import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="sticky top-0 z-50 border-b bg-background-light/80 backdrop-blur-md border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a className="flex items-center gap-2 group" href="#">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <span className="material-icons-round text-lg">
              restaurant_menu
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900  group-hover:text-primary transition-colors">
            Pantry.
          </span>
        </a>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
          <span className="material-icons-round absolute left-3 text-gray-400">
            search
          </span>
          <input
            className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Search recipes, ingredients..."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5">
          <span className="material-icons-round text-sm">add</span>
          <span>Add Recipe</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
