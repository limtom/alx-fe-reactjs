// components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = (e, id, title) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.confirm(`Delete "${title}"?`)) {
      deleteRecipe(id);
    }
  };

  return (
    <div className="recipes-list">
      <div className="list-header">
        <h3 className="list-title">All Recipes ({recipes.length})</h3>
        {recipes.length === 0 && (
          <p className="empty-message">No recipes yet. Add your first one!</p>
        )}
      </div>

      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/${recipe.id}`} className="recipe-link">
              <div className="recipe-content">
                <h4 className="recipe-title">{recipe.title}</h4>
                <p className="recipe-description">
                  {recipe.description.length > 120
                    ? `${recipe.description.substring(0, 120)}...`
                    : recipe.description}
                </p>
                <span className="view-details">View Details →</span>
              </div>
            </Link>

            <button
              onClick={(e) => handleDelete(e, recipe.id, recipe.title)}
              className="action-btn delete-btn"
              title="Delete recipe"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
