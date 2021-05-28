import querystring from "querystring";
import { addRateLimit, rateLimitIsNotPresent } from "@/lib/rate_limit";

const now_playing_endpoint =
  "https://api.spotify.com/v1/me/player/currently-playing";
const top_tracks_endpoint = "https://api.spotify.com/v1/me/top/tracks";
const token_endpoint = "https://accounts.spotify.com/api/token";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const cache = {
  now_playing: {},
  top_tracks: {},
  access_token: { access_token: null, valid_until: -1 },
};

const API_SOURCE = "spotify";
addRateLimit(API_SOURCE);

const getAccessToken = async () => {
  if (Date.now() + 10000 < cache.access_token.valid_until) {
    return cache.access_token;
  } else if (rateLimitIsNotPresent(API_SOURCE)) {
    const res = await fetch(token_endpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();

      cache.access_token.access_token = data.access_token;
      cache.access_token.valid_until = Date.now() + data.expires_in * 1000;

      return cache.access_token;
    } else if (res.status === 429) {
      addRateLimit(API_SOURCE, res.headers["Retry-After"]);
    } else {
      console.error(
        `[lib/spotify] Unknown API state. ${res.status} - ${res.statusText}`
      );
    }
  }
  return { access_token: false };
};

export const getNowPlaying = async () => {
  const { access_token, valid_until } = await getAccessToken();

  if (!access_token) {
    // We're rate limited or another error has occured.
    return cache.now_playing;
  }

  const res = await fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  switch (res.status) {
    case 200:
      cache.now_playing = await res.json();
      break;
    case 204:
      cache.now_playing = { data: { is_playing: false } };
      break;
    case 429:
      addRateLimit(API_SOURCE, res.headers["Retry-After"]);
      break;
  }
  return cache.now_playing;
};

export const getTopTracks = async () => {
  const { access_token, valid_until } = await getAccessToken();

  if (!access_token) {
    // We're rate limited or another error has occured.
    return cache.top_tracks;
  }

  const res = await fetch(
    `${top_tracks_endpoint}?${querystring.stringify({
      time_range: "short_term",
      limit: 5,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  switch (res.status) {
    case 200:
      const data = await res.json();
      cache.top_tracks = data;
      return data;
    case 429:
      addRateLimit(API_SOURCE, res.headers["Retry-After"]);
  }
  return cache.top_tracks;
};
