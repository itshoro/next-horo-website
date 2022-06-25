import { getTopTracks } from "@/lib/api/spotify";

const SpotifyApi = async (_, res) => {
  const { items } = await getTopTracks();

  const tracks = items.map((track) => ({
    artists: track.artists.map((artist) => artist.name).join(", "),
    artistsUrl: track.artists[0].external_urls.spotify,
    images: track.album.images,
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ tracks: [...tracks] });
};

export default SpotifyApi;
