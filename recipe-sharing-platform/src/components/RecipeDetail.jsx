import { NavLink } from "react-router-dom";

function RecipeDetail() {
  return (
    <div className="max-w-7xl mx-auto px-6 w-full">
      <NavLink to="/">
        <button className="bg-primary px-2 py-1 border-0">Back</button>
      </NavLink>
    </div>
  );
}

export default RecipeDetail;
