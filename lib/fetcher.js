const Fetcher = async (...args) =>
  await fetch(...args).then((res) => res.json());

export default Fetcher;
