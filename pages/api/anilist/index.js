import { getUserStats } from "@/lib/api/anilist";

export default async (_, res) => {
  const data = await getUserStats();

  const userData = {
    anime_watched: data?.anime.minutesWatched,
  };

  return res.status(200).json({
    ...userData,
  });
};
