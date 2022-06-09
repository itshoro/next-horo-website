import Track from "./Track";

import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const EmptyTrackData: TrackData = {
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
      <div className="grid grid-cols-2 gap-4">
        {tracks.map((track: TrackData, i: number) => {
          const img = (track.images && track.images[1]?.url) || "";
          return (
            <Track key={`${track.title}-${i}`} {...track} imageSrc={img} />
          );
        })}
      </div>
    </>
  );
};

type TrackData = {
  title: string;
  artists: string;
  loading: boolean;
  images?: any;
};

export default TopTracks;
