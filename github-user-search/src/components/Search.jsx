import { Fragment, useEffect, useState } from "react";
import fetchUserData from "../services/githubService";
import { Link } from "react-router-dom";

function GithubSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
