import { useState } from "react";
import { advancedSearch } from "../services/githubService";

function AdvancedSearch() {
  const [lang, setLang] = useState("");
  const [location, setLocation] = useState("");
  const [minFollowers, setMinFollowers] = useState("");
  const [minRepo, setMinRepo] = useState("");

  let filters = {};
  function handleReset() {
    setLang("");
    setLocation("");
    setMinFollowers("");
    setMinRepo("");
  }

  async function handleSubmit() {
    filters = {
      ...filters,
      language: lang,
      location,
      repos: minRepo,
      followers: minFollowers,
    };

    const res = await advancedSearch(filters);

    console.log(res);
  }

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-lg p-5 animate-fade-in-down mt-2 transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
            Language
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <img src="./public/code.svg" alt="code" />
            </span>
            <select
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-lg text-sm text-text-blue-700 focus:ring-blue-700 focus:border-blue-700 transition-colors border"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="">Any Language</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="typescript">TypeScript</option>
              <option value="csharp">C#</option>
              <option value="cpp">C++</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
            </select>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
            Location
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <img src="./public/location-on.svg" alt="location-on" />
            </span>
            <input
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-lg text-sm text-text-blue-700 focus:ring-blue-700 focus:border-blue-700 transition-colors placeholder-gray-400 border"
              placeholder="e.g. San Francisco"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
            Min. Followers
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <img src="./public/group.svg" alt="group" />
            </span>
            <input
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-lg text-sm text-text-blue-700 focus:ring-blue-700 focus:border-blue-700 transition-colors placeholder-gray-400 border"
              min="0"
              placeholder="0"
              type="number"
              value={minFollowers}
              onChange={(e) => setMinFollowers(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
            Min. Repositories
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <img src="./public/folder-open.svg" alt="folder0open" />
            </span>
            <input
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-lg text-sm text-text-blue-700 borderfocus:ring-blue-700 focus:border-blue-700 transition-colors placeholder-gray-400 border"
              min="0"
              placeholder="0"
              type="number"
              value={minRepo}
              onChange={(e) => setMinRepo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
        <button
          className="text-sm font-medium text-blue-500 hover:text-text-blue-700 px-4 py-2 rounded-lg transition-colors"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="text-sm font-bold bg-blue-700 text-white hover:bg-blue-700-hover px-6 py-2 rounded-lg shadow-sm transition-colors"
          onClick={handleSubmit}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default AdvancedSearch;
