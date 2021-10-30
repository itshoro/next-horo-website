import { StatCard as Base, LoadingCardArgs } from "./base";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Skeleton } from "@/components/skeleton";

const GithubCard = ({ loading = false }: LoadingCardArgs) => {
  const { data, error } = useSWR("/api/github", fetcher);
  return (
    <Base title="Public Repositories">
      <Skeleton inline={true} show={!data || loading}>
        <div className="font-bold text-lg">
          {data ? data.public_repos.toLocaleString() : "Loading..."}
        </div>
      </Skeleton>
    </Base>
  );
};

export default GithubCard;
