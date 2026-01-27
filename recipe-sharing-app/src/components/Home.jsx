import { Fragment } from "react";
import AddRecipeForm from "./AddRecipeForm";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

function Home() {
  const recipes = useRecipeStore((state) => state.recipes);
  return (
    <Fragment>
      <AddRecipeForm />

      <div className="mt-5 mx-auto flex flex-col items-center gap-5">
        <h2 className="text-base text-left font-bold item">All recipe</h2>
        {recipes.map((recipe) => (
          <Link
            to={`recipes/${recipe.id}`}
            key={recipe.id}
            className="w-1/2 bg-amber-400 mt-3 p-6"
          >
            <h3 className="text-base font-bold mb-1">{recipe.title}</h3>
            <p className="text-sm line-clamp-2">{recipe.description}</p>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
