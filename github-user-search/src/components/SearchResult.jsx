import { Link } from "react-router-dom";

function SearchResult({ user }) {
  return (
    <div className="flex gap-5 flex-wrap items-center shadow-lg rounded-lg p-6 bg-white  ">
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
  );
}

export default SearchResult;
