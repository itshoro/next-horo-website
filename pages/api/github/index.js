import { getUserData } from "@/lib/api/github";

const GithubApi = async (_, res) => {
  const data = await getUserData();

  const userData = {
    public_repos: data?.public_repos,
  };

  return res.status(200).json({
    ...userData,
  });
};

export default GithubApi;
