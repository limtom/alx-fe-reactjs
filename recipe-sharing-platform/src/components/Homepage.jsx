import { Fragment, useState } from "react";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import recipe from "./data.json";

function Homepage() {
  const [recipes, setRecipes] = useState(recipe);
  return (
    <Fragment>
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </main>
    </Fragment>
  );
}

export default Homepage;
