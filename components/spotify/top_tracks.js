import Track from "./track";

import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const EmptyTrackData = {
  artists: "undefined",
  title: "undefined",
  loading: true,
};

const TopTracks = ({ loading = false }) => {
  const { data, error } = useSWR("/api/spotify/top_tracks", fetcher);

  const tracks =
    loading || !data || error
      ? [
          EmptyTrackData,
          EmptyTrackData,
          EmptyTrackData,
          EmptyTrackData,
          EmptyTrackData,
        ]
      : data.tracks;

  return (
    <>
      {tracks.map((track, i) => {
        const img = (track.images && track.images[1]?.url) || "";
        return <Track key={`${track.title}-${i}`} {...track} imageSrc={img} />;
      })}
    </>
  );
};

export default TopTracks;
