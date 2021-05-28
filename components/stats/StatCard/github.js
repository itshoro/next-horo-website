import Base from "./base";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const GithubCard = ({ loading = false }) => {
  const { data, error } = useSWR("/api/github", fetcher);
  return (
    <Base title="Public Repositories">
      <div
        className={[
          (!data || loading) && "skeleton rounded select-none",
          "font-bold text-lg",
        ].join(" ")}
      >
        {data ? data.public_repos.toLocaleString() : "Loading..."}
      </div>
    </Base>
  );
};

export default GithubCard;
