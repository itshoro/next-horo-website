import querystring from "querystring";
import { addRateLimit, resolveRateLimitIfPresent } from "@/lib/rate_limit";

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
};

const API_SOURCE = "spotify";
addRateLimit(API_SOURCE);

const getAccessToken = async () => {
  if (!resolveRateLimitIfPresent(API_SOURCE)) {
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
      return res.json();
    } else if (res.status === 429) {
      addRateLimit(API_SOURCE, res.headers["Retry-After"]);
    } else {
      console.error(
        `[API / ${API_SOURCE}] Unknown API state. ${res.status} - ${res.statusText}`
      );
    }
  }

  return { access_token: false };
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

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
      const data = res.json();
      cache.now_playing = data;
      return data;
    case 204:
      data = { data: { is_playing: false } };
      cache.now_playing = data;
      return data;
    case 429:
      addRateLimit(API_SOURCE, res.headers["Retry-After"]);
  }
  return data;
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return await fetch(
    `${top_tracks_endpoint}?${querystring.stringify({
      time_range: "short_term",
      limit: 5,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((res) => {
    console.log(res.json());
    return res.json();
  });
};
