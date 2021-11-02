import { StatCard as Base, LoadingCardArgs } from "./base";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const AniListCard = ({ loading = false }: LoadingCardArgs) => {
  const { data, error } = useSWR("/api/anilist", fetcher);
  return (
    <Base title="Anime watched">
      <div
        className={[
          (!data || loading) && "skeleton rounded select-none",
          "font-bold text-lg",
        ].join(" ")}
      >
        {data
          ? `${Math.round(data.anime_watched / 60).toLocaleString()} hours`
          : "Loading..."}
      </div>
    </Base>
  );
};

export default AniListCard;
