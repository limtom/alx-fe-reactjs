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
    <main className="max-w-5xl mx-auto px-6 w-full text-center">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Ingredients
              </h2>
              <button className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                Metric
              </button>
            </div>
            <div className="space-y-4">
              {recipe.ingredients?.map((ingre) => (
                <label
                  className="group flex items-start gap-4 p-3 -mx-3 rounded-lg hover:bg-white dark:hover:bg-slate-800/50 transition-colors cursor-pointer select-none"
                  key={ingre.id}
                >
                  <input
                    className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary dark:border-slate-600 dark:bg-slate-800 dark:checked:bg-primary transition-all"
                    type="checkbox"
                  />
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors leading-relaxed">
                    {ingre}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white dark:bg-slate-800/40 rounded-xl border border-primary/10 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-primary text-sm">
                  info
                </span>{" "}
                Nutrition
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Calories
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {recipe.nutrition?.calories}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Carbs
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {recipe.nutrition?.carbs}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Protein
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {recipe.nutrition?.protein}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Fat
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {recipe.nutrition?.fat}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Fiber
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {recipe.nutrition?.fiber}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Sodium
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {recipe.nutrition?.sodium}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-primary/10 pb-4 inline-block">
            Instruction
          </h2>
          <div className="space-y-12">
            {recipe.instructions?.map((instr, i) => (
              <div className="group relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-background-light dark:bg-background-dark border-2 border-primary text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {instr.heading}
                </h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {instr.detail}
                </p>
                {i + 1 === 1 && (
                  <div className="mt-4 flex gap-2">
                    <div className="rounded-lg overflow-hidden w-32 h-24 bg-gray-100 dark:bg-slate-800">
                      <img
                        alt={recipe.title}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                        src={recipe.image}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <span className="material-icons-round text-primary">
                  tips_and_updates
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Chef's Tip
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {recipe.chefTip}
                </p>
              </div>
            </div>
          </div>
        </div>
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
