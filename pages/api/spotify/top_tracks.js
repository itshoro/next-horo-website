import { getTopTracks } from "@/lib/spotify";

export default async (_, res) => {
  const { items } = await getTopTracks();

  const tracks = items.map((track) => ({
    artists: track.artists.map((artist) => artist.name).join(", "),
    images: track.album.images,
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ ...tracks });
};
