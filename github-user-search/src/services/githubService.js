// githubService.js - Minimal version with optional everything
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

// https://api.github.com//search/users?q

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: apiKey ? `Bearer ${apiKey}` : "",
  },
});

// Original function (unchanged)
async function fetchUserData(query) {
  try {
    const res = await api.get("/search/users", {
      params: { q: query, per_page: 6 },
    });
    return res.data.items;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

// New function with ALL optional filters including username
async function advancedSearch({
  username,
  language,
  location,
  minRepos,
  minFollowers,
} = {}) {
  let query = "";

  // Add username if provided (optional)
  if (username) {
    query += username;
  }

  // Add language filter if provided (optional)
  if (language) {
    if (query) query += " "; // Add space if we already have content
    query += `language:${language}`;
  }

  // Add location filter if provided (optional)
  if (location) {
    if (query) query += " ";
    query += `location:${location}`;
  }

  // Add min repos filter if provided (optional)
  if (minRepos) {
    if (query) query += " ";
    query += `repos:>=${minRepos}`;
  }

  // Add min followers filter if provided (optional)
  if (minFollowers) {
    if (query) query += " ";
    query += `followers:>=${minFollowers}`;
  }

  // Always search for users (not organizations) if we have any criteria
  if (query) {
    query += " type:user";
  } else {
    // If no criteria at all, return empty array
    console.log("No search criteria provided");
    return [];
  }

  // Use the original fetchUserData function
  return await fetchUserData(query);
}

// Export both
export { advancedSearch };
export default fetchUserData;
