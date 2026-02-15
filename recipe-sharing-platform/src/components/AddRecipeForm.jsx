import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [instruction, setInstruction] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title && ingredient && instruction) {
      console.log({ title, ingredient, instruction });
      setIngredient("");
      setTitle("");
      setInstruction("");
    } else return;
  }
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl text-black font-bold text-center capitalize my-16">
        share your favorite recipe
      </h2>
      <form className="max-w-2xl mx-auto">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-1">
            Recipe Title
          </label>
          <div className="relative group">
            <input
              className="w-full text-lg font-medium bg-surface-light dark:bg-surface-dark border border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400  transition-all duration-300 text-gray-900  caret-primary"
              placeholder="e.g. Grandma's Famous Lasagna"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-4">
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Ingredients
            </h3>
            <span className="text-xs text-gray-400">
              One ingredient per line
            </span>
          </div>
          <div className="relative">
            <textarea
              className="w-full bg-surface-light border border-gray-200 rounded-xl px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary leading-relaxed transition-colors font-medium placeholder-gray-400 "
              placeholder="2 cups Flour
1 tsp Salt
1/2 cup Sugar"
              rows="10"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Instructions
            </h3>
            <span className="text-xs text-gray-400">
              Describe the preparation steps
            </span>
          </div>
          <div className="relative">
            <textarea
              className="w-full bg-surface-light border border-gray-200 rounded-xl px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary leading-relaxed transition-colors placeholder-gray-400"
              placeholder="1. Preheat your oven to 350°F (175°C).
2. Mix the dry ingredients in a large bowl.
3. Slowly add wet ingredients while stirring..."
              rows="12"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="pt-12 pb-8 flex flex-col-reverse md:flex-row items-center justify-end gap-6 border-t border-gray-200 dark:border-gray-800">
          <button
            className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
            type="button"
          >
            Save as Draft
          </button>
          <button
            className="w-full md:w-auto bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            type="submit"
            onClick={handleSubmit}
          >
            <span>Publish Recipe</span>
            <span className="material-icons-round text-sm">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
