import { useQuery } from "react-query";

const fetchData = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (err) {
    throw new Error("DB connection failed", { cause: err });
  }
};
// export const useFetchSpace = (spaceApi) => {
//   return useQuery("spaceData", async () => await fetchSpace(spaceApi));
// };

export const useFetchedUrl = (url, urlType) => {
  return useQuery(urlType, async () => await fetchData(url));
};
