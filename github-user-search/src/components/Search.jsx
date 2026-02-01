import { Fragment, useState } from "react";
import fetchUserData from "../services/githubService";
import { Link } from "react-router-dom";
import { advancedSearch } from "../services/githubService";

function GithubSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [advanceOpen, setAdvanceOpen] = useState(false);

  // Advance search
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

  async function handleSearch() {
    setIsLoading(true);
    try {
      const res = await fetchUserData(searchInput);
      if (res.length > 0) {
        console.log(res);
        setUsers(res);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
    }
  }

  // Open advance search
  function handleOpen() {
    setAdvanceOpen((open) => !open);
  }

  async function handleSubmit() {
    filters = {
      ...filters,
      language: lang,
      location,
      repos: minRepo,
      followers: minFollowers,
    };

    setIsLoading(true);
    try {
      const res = await advancedSearch(filters);
      if (res.length > 0) {
        console.log(res);
        setUsers(res);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
    }
  }
  return (
    <Fragment>
      <div className="mt-15  text-center flex flex-col ">
        <h1 className="text-5xl tracking-wider font-bold text-black mb-5">
          Discover Github Talent
        </h1>
        <p>
          Search for developers by username, location and programming language.
        </p>
        <p>Connect with the biggest mind in open source.</p>

        <div className="w-full max-w-2xl mx-auto mt-8">
          <form
            className="relative group"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <img src="./public/search.svg" alt="search" />
            </div>
            <input
              className="block w-full h-14 pl-12 pr-32 rounded-xl border border-gray-300 bg-white text-text-primary placeholder-gray-400 focus:border-primary focus:ring-4 focus:ring-blue-100 shadow-sm transition-all text-lg"
              placeholder="Search username, language, or location..."
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="absolute inset-y-2 right-2 flex items-center">
              <button
                className="h-10 px-6 rounded-lg bg-blue-700 hover:bg-primary-hover text-white font-bold text-sm transition-colors shadow-sm hover:shadow-md cursor-pointer"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex justify-end w-full px-1 my-2">
            <button
              className="flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 shadow-sm ring-2 ring-blue-100/50 cursor-pointer"
              onClick={handleOpen}
            >
              <img src="./public/tune.svg" alt="tune" />
              <span>Advanced Filters</span>
              <img
                src={`${advanceOpen ? "./public/arr-up.svg" : "./public/arr-down.svg"}`}
                alt={`${advanceOpen ? "arrow-up" : "arrow-down"}`}
              />
            </button>
          </div>
          {advanceOpen && (
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
          )}
        </div>
      </div>

      {/* REsult*/}
      {!error ? (
        <div className="flex gap-5 w-9/10  mt-8 flex-wrap items-center justify-center">
          {isLoading ? (
            <p className="text-center text-3xl font-bold">Loading...</p>
          ) : (
            users.map((user) => (
              <div
                className="flex gap-5 flex-wrap items-center shadow-lg rounded-lg p-6 bg-white  "
                key={user.id}
              >
                <div className="flex gap-3">
                  <img
                    alt={user.login}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-blue-100 transition-all"
                    src={user.avatar_url}
                  />
                  <div>
                    <h3 className="font-bold text-lg leading-tight text-text-primary group-hover:text-primary transition-colors">
                      {user.login}
                    </h3>
                    <p className="text-sm text-text-secondary">{`@${user.login}`}</p>
                  </div>
                </div>
                <Link to={`/profile/:${user.id}`}>
                  <button className="font-light rounded-lg border border-black px-4 py-2 text-sm cursor-pointer">
                    View profile
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="flex gap-5 w-9/10  mt-8 flex-wrap items-center justify-center">
          <p className="text-center text-3xl font-bold">
            Looks like we cant find the user
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default GithubSearch;
