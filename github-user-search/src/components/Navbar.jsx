function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full shadow bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="./public/vite.svg" alt="logo" />
            <span className="text-xl font-bold tracking-tight text-blue-700">
              GitHunter
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-primary transition-colors rounded-full hover:bg-gray-100">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full ring-2 ring-gray-200 cursor-pointer overflow-hidden transition-shadow hover:ring-primary">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0A-i-UDxPNDnkSsm8GWwIW72UlcZBi49XWy-FdvYJWtnxHyfci3q5ovOShuhcMMNOgnt_jOvo9qTc8RS-CqjNMsEEr1qLp9wN3IYj2XeLpZe60CXh8dCfLEBwTdvYCkeKXphL-1MCg_Z2P1DblO4IkeA8oTSVgkcBvxgeAlHZ8LRCNvI3idN0kJph_N1pbkx6e2jYI4r2Wg9Ki_B7NkSEwT66STLlmog5UTIS-wnFJYnDpSdntY4UUHknp-938lT8JtKZsq9uZEVm"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
