import querystring from "querystring";

const now_playing_endpoint =
  "https://api.spotify.com/v1/me/player/currently-playing";
const top_tracks_endpoint = "https://api.spotify.com/v1/me/top/tracks";
const token_endpoint = "https://accounts.spotify.com/api/token";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const getAccessToken = async () => {
  return await fetch(token_endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  }).then((res) => res.json());
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return await fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
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
  ).then((res) => res.json());
};
