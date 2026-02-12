import { NavLink } from "react-router-dom";

function RecipeDetails() {
  return (
    <div className="max-w-7xl mx-auto px-6 w-full">
      RecipeDetails{" "}
      <NavLink to="/">
        <button className="bg-primary px-2 py-1 border-0">Back</button>
      </NavLink>
    </div>
  );
}

export default RecipeDetails;
