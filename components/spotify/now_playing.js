import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const NowPlaying = ({ loading }) => {
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
    <div className="flex items-center gap-2 min-w-0">
      <object>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9989 0.0395508C5.39193 0.0395508 0.0356445 5.39569 0.0356445 12.0027C0.0356445 18.61 5.39193 23.9657 11.9989 23.9657C18.6066 23.9657 23.9624 18.61 23.9624 12.0027C23.9624 5.39612 18.6066 0.0401222 11.9988 0.0401222L11.9989 0.0395508ZM17.4852 17.2938C17.4342 17.3775 17.3671 17.4503 17.2879 17.508C17.2087 17.5657 17.1189 17.6072 17.0236 17.6301C16.9283 17.6531 16.8295 17.657 16.7327 17.6417C16.6359 17.6264 16.5431 17.5922 16.4595 17.541C13.6506 15.8253 10.1146 15.4367 5.95036 16.3881C5.75753 16.432 5.55519 16.3975 5.38779 16.2922C5.2204 16.1869 5.10165 16.0195 5.05765 15.8267C5.03573 15.7312 5.03286 15.6324 5.0492 15.5358C5.06553 15.4393 5.10076 15.3469 5.15286 15.2639C5.20495 15.181 5.2729 15.1091 5.3528 15.0525C5.4327 14.9959 5.52299 14.9555 5.6185 14.9338C10.1756 13.8923 14.0846 14.341 17.2381 16.2681C17.5895 16.4838 17.7009 16.9424 17.4852 17.2938ZM18.9495 14.036C18.6795 14.4753 18.1052 14.6138 17.6666 14.3438C14.4509 12.3668 9.54908 11.7944 5.7455 12.949C5.25222 13.098 4.73122 12.82 4.5815 12.3276C4.51006 12.0908 4.53543 11.8354 4.65203 11.6173C4.76863 11.3993 4.96695 11.2363 5.2035 11.1643C9.54822 9.84598 14.9495 10.4846 18.6424 12.7538C19.0809 13.0238 19.2195 13.5981 18.9495 14.0361V14.036ZM19.0752 10.644C15.2195 8.35384 8.85808 8.14327 5.17679 9.26055C4.58565 9.43984 3.9605 9.10612 3.78136 8.51498C3.69522 8.23097 3.7254 7.92438 3.86527 7.66262C4.00514 7.40086 4.24324 7.20536 4.52722 7.11912C8.75307 5.83627 15.7781 6.08412 20.2172 8.71941C20.3437 8.79425 20.4542 8.89332 20.5424 9.01094C20.6306 9.12856 20.6947 9.26241 20.731 9.40484C20.7674 9.54727 20.7753 9.69547 20.7543 9.84096C20.7333 9.98645 20.6838 10.1264 20.6086 10.2527C20.2944 10.7844 19.6058 10.9597 19.0758 10.644H19.0752Z"
            fill="#1ED760"
          />
        </svg>
      </object>
      <a
        className={[
          "font-medium flex-shrink-0 text-white rounded-md transition-all",
          !data || loading
            ? "skeleton"
            : "hover:px-2 hover:py-1 focus:px-2 focus:py-1 focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 ",
        ]
          .filter((x) => x)
          .join(" ")}
        href={songUrl || ""}
      >
        {title}
      </a>
      &mdash;
      <a
        className={[
          "rounded-md transition-all",
          !data || loading
            ? "skeleton"
            : "hover:px-2 hover:py-1 focus:px-2 focus:py-1 focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 md:flex-shrink truncate",
        ]
          .filter((x) => x)
          .join(" ")}
        href={artistsUrl || ""}
      >
        {artists}
      </a>
    </div>
  );
};

export default NowPlaying;
