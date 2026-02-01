import axios from "axios";
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${apiKey}`,
  },
});

async function fetchUserData(query) {
  try {
    const res = await api.get("/search/users", {
      params: {
        q: query,
        per_page: 6,
      },
    });
    const { items } = res.data;
    return items;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchUserData;
