import { NavLink, useParams } from "react-router-dom";
import recipes from "./data.json";
import { useEffect, useState } from "react";
function RecipeDetail() {
  const [recipe, setRecipe] = useState("");
  const { id } = useParams();

  useEffect(
    function () {
      const recipe = recipes.find((recipe) => recipe.id === Number(id));
      setRecipe(recipe);
      console.log(recipe);
    },
    [id],
  );

  return (
    <main className="max-w-7xl mx-auto px-6 w-full text-center">
      <header className="text-center mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-semibold tracking-tight">
          {recipe.title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2 my-7">
            <span className="material-icons-round text-xl text-primary">
              schedule
            </span>
            <span>{recipe.prepTime}</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-xl">
              restaurant
            </span>
            <span>{recipe.servings} Servings</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-xl text-primary">
              signal_cellular_alt
            </span>
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </header>

      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-12 group overflow-hidden rounded-2xl shadow-xl shadow-primary/5">
        <img
          alt={recipe.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          src={recipe.image}
        />
      </div>
      <NavLink to="/">
        <button className="bg-primary px-6 py-2 rounded-lg border-0 mb-5 text-white text-sm ">
          Back
        </button>
      </NavLink>
    </main>
  );
}

export default RecipeDetail;
