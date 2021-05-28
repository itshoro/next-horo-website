export const getUserData = async () => {
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  };
  const data = await fetch(
    "https://api.github.com/users/" + process.env.GITHUB_USER,
    { headers: headers }
  ).then((res) => res.json());

  return data;
};
