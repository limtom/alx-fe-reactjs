// components/CreateRecipe.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && description.trim()) {
      setIsSubmitting(true);

      const newRecipe = {
        title: title.trim(),
        description: description.trim(),
        createdAt: new Date().toISOString(),
      };

      // Add recipe to store
      addRecipe(newRecipe);

      // Reset form
      setTitle("");
      setDescription("");

      // Reset submit state
      setTimeout(() => setIsSubmitting(false), 500);

      // Show success message
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="create-recipe">
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Classic Pancakes"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your recipe..."
            rows={5}
            className="form-textarea"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Adding...
              </>
            ) : (
              "Add Recipe"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
