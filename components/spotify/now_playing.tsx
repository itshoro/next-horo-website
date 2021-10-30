import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Icon from "../icons";

const NowPlaying = ({ loading }: NowPlayingArgs) => {
  const { data, error } = useSWR("/api/spotify/now_playing", fetcher);

  const { title, artists, songUrl, artistsUrl } =
    error || !data || !data.isPlaying
      ? {
          title: "Not Playing",
          artists: "Spotify",
          songUrl: null,
          artistsUrl: null,
        }
      : data;

  return (
    <div className="group flex items-center gap-2 min-w-0">
      <div className="text-white group-hover:text-[#1ED760] transition-colors">
        <Icon type="spotify" size={24} />
      </div>
      <div className="flex flex-col max-w-xs">
        <a
          className={[
            "font-medium truncate flex-shrink-0 text-white rounded-md transition-all",
            (!data || loading) && "skeleton",
          ]
            .filter((x) => x)
            .join(" ")}
          href={songUrl || ""}
        >
          {title}
        </a>
        <a
          className={[
            "rounded-md transition-all",
            !data || loading ? "skeleton" : "text-xs flex-shrink truncate",
          ]
            .filter((x) => x)
            .join(" ")}
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
