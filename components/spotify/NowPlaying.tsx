import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Icon from "../icons";

const NowPlaying = ({ loading }: NowPlayingArgs) => {
  const { data, error } = useSWR("/api/spotify/now_playing", fetcher);

  const { title, artists, songUrl, artistsUrl } =
    error || !data || !data.isPlaying
      ? {
          title: null,
          artists: null,
          songUrl: null,
          artistsUrl: null,
        }
      : data;

  const hideSongDisplay = !data || loading || !data.isPlaying;

  return (
    <div
      className={[
        "group lg:ml-auto lg:flex-row-reverse flex items-center gap-2 min-w-0",
      ]
        .filter((x) => x)
        .join(" ")}
    >
      <div
        className={[
          loading ? "animate-pulse" : !hideSongDisplay && "text-[#1ED760]",
          " transition-colors",
        ]
          .filter((x) => x)
          .join(" ")}
      >
        <Icon type="spotify" size={24} />
      </div>
      <div className="flex flex-col lg:items-end max-w-xs">
        <a
          className="font-medium truncate flex-shrink-0 text-white rounded-md transition-all origin-left lg:origin-right"
          href={songUrl ?? ""}
        >
          {title}
        </a>
        <a
          className="text-xs truncate flex-shrink rounded-md transition-all origin-left lg:origin-right"
          href={artistsUrl || ""}
        >
          {artists}
        </a>
      </div>
    </div>
  );
};

type NowPlayingArgs = {
  loading?: boolean;
};

export default NowPlaying;
