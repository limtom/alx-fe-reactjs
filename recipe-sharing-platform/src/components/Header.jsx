function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Fresh from the kitchen
      </h1>
      <p className="text-gray-500 text-lg">
        Discover simple, delicious recipes for your daily life.
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        <button className="px-5 py-2 rounded-full bg-primary text-white font-medium shadow-md shadow-primary/20">
          All
        </button>
        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600  hover:border-primary hover:text-primary transition-colors">
          Breakfast
        </button>
        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600  hover:border-primary hover:text-primary transition-colors">
          Main Course
        </button>
        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600  hover:border-primary hover:text-primary transition-colors">
          Snacks
        </button>
        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600  hover:border-primary hover:text-primary transition-colors">
          Desserts
        </button>
      </div>
    </header>
  );
}

export default Header;
