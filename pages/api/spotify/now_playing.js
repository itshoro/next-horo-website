import { getNowPlaying } from "@/lib/spotify";

export default async (_, res) => {
  const { item } = await getNowPlaying();

  const nowPlaying = {
    artists: item.artists.map((artist) => artist.name).join(", "),
    artistsUrl: item.artists[0].external_urls.spotify,
    imags: item.album.images,
    songUrl: item.external_urls.spotify,
    title: item.name,
  };

  return res.status(200).json({ ...nowPlaying });
};
