import { StatCard as Base, LoadingCardArgs } from "./base";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Skeleton } from "@/components/skeleton";

const GithubCard = ({ loading = false }: LoadingCardArgs) => {
  const { data, error } = useSWR("/api/github", fetcher);
  return (
    <Base title="Public Repositories">
      <Skeleton inline={true} show={!data || loading}>
        <span className="font-medium text-white text-lg tabular-nums">
          {data ? data.public_repos.toLocaleString() : "Loading..."}
        </span>
      </Skeleton>
    </Base>
  );
};

export default GithubCard;
