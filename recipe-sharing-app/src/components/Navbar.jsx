import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex items-center justify-around bg-slate-100 h-15 w-full shadow-lg ">
      <div className="flex items-center">
        <img src="../public/vite.svg" alt="logo" />
        <div className="text-lg font-bold text-amber-400">Cook Book</div>
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;
