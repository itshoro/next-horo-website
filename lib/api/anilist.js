export const getUserStats = async () => {
  const query = `
        query($id: Int) {
          User(id: $id) {
            statistics {
              anime {
                minutesWatched
              }
            }
          } 
        }
      `;

  const vars = {
    id: process.env.ANILIST_USER_ID,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: vars,
    }),
  };

  const userData = await fetch(url, options).then((res) => res.json());

  return userData?.data.User.statistics;
};
