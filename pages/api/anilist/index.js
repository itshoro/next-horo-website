import { getUserData } from "@/lib/api/anilist";

const fetchAnilistData = async (_, res) => {
  const data = await getUserData();

  const userData = {
    anime_watched: data?.anime.minutesWatched,
  };

  return res.status(200).json({
    ...userData,
  });
};

export default fetchAnilistData;
