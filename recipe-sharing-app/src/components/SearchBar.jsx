import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipe = useRecipeStore((state) => state.filterRecipe);

  useEffect(() => {
    filterRecipe();
  }, [searchTerm, filterRecipe]);

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="outline outline-amber-400 p-2 focus:border w-72 focus:border-amber-700 rounded"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="p-2 cursor-pointer">🔍</button>
    </div>
  );
}

export default SearchBar;
