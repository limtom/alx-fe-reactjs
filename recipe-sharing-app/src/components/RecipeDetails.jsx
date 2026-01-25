// components/RecipeDetails.jsx
import { useLoaderData, useParams, useNavigate, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useState, useEffect } from "react";

// Loader function for React Router
export async function loader({ params }) {
  const { recipeId } = params;

  // Simulate API delay for demo purposes
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Get recipe from store (in real app, this would be an API call)
  const recipe = useRecipeStore
    .getState()
    .recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    throw new Response("Recipe not found", {
      status: 404,
      statusText: "Recipe Not Found",
    });
  }

  return { recipe };
}

function RecipeDetails() {
  const { recipe: loaderRecipe } = useLoaderData();
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  // Find recipe in store (fallback if loader fails)
  const storeRecipe = recipes.find((r) => r.id === recipeId);
  const recipe = loaderRecipe || storeRecipe;

  useEffect(() => {
    if (recipe) {
      setEditedTitle(recipe.title);
      setEditedDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (editedTitle.trim() && editedDescription.trim()) {
      updateRecipe(recipe.id, {
        title: editedTitle,
        description: editedDescription,
      });
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${recipe.title}"?`)) {
      deleteRecipe(recipe.id);
      navigate("/");
    }
  };

  return (
    <div className="recipe-details">
      {/* Navigation */}
      <div className="recipe-nav">
        <Link to="/" className="back-link">
          ← Back to All Recipes
        </Link>
        <div className="recipe-actions">
          <button onClick={handleEditToggle} className="edit-btn">
            {isEditing ? "Cancel" : "Edit Recipe"}
          </button>
          <button onClick={handleDelete} className="delete-btn">
            Delete Recipe
          </button>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="recipe-content">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="edit-title-input"
              placeholder="Recipe Title"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="edit-description-input"
              placeholder="Recipe Description"
              rows={10}
            />
            <div className="edit-form-actions">
              <button onClick={handleSave} className="save-btn">
                Save Changes
              </button>
              <button onClick={handleEditToggle} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="recipe-title">{recipe.title}</h1>

            <div className="recipe-meta">
              <span className="recipe-id">
                ID: {recipe.id.substring(0, 8)}...
              </span>
              <span className="recipe-date">
                Created:{" "}
                {new Date(recipe.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {recipe.updatedAt && (
                <span className="recipe-updated">
                  Updated:{" "}
                  {new Date(recipe.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>

            <div className="recipe-description-container">
              <h3 className="section-title">Description</h3>
              <p className="recipe-description">{recipe.description}</p>
            </div>

            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <div className="recipe-ingredients">
                <h3 className="section-title">Ingredients</h3>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {recipe.instructions && recipe.instructions.length > 0 && (
              <div className="recipe-instructions">
                <h3 className="section-title">Instructions</h3>
                <ol className="instructions-list">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item">
                      <span className="step-number">{index + 1}.</span>
                      <span className="step-text">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
