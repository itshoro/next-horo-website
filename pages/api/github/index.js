import { getUserData } from "@/lib/api/github";

export default async (_, res) => {
  const data = await getUserData();

  const userData = {
    public_repos: data?.public_repos,
  };

  return res.status(200).json({
    ...userData,
  });
};
