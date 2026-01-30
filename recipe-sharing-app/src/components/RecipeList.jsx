import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  return (
    <div className="mt-5 mx-auto flex flex-col items-center gap-5">
      <h2 className="text-base text-left font-bold item">All recipe</h2>
      {recipes.map((recipe) => (
        <Link
          to={`${recipe.id}`}
          key={recipe.id}
          className="w-1/2 bg-amber-400 mt-3 p-6"
        >
          <h3 className="text-base font-bold mb-1">{recipe.title}</h3>
          <p className="text-sm line-clamp-2">{recipe.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;
