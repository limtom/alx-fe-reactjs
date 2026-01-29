import { useEffect, useState } from "react";
import { useRecipeStore } from "./recipeStore";

function EditRecipeForm({ id }) {
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      const foundRecipe = recipes.find((recipe) => recipe.id === numericId);

      if (foundRecipe) {
        setTitle(foundRecipe.title || "");
        setDescription(foundRecipe.description || "");
      } else {
        console.warn(`Recipe with id ${id} not found`);
      }
      setIsLoading(false);
    }
  }, [id, recipes]); // Added 'recipes' to dependencies

  function handleUpdateRecipe(event) {
    event.preventDefault();

    if (!id) return;

    if (!title && !description) return;

    const numericId = parseInt(id, 10);
    updateRecipe(numericId, {
      title,
      description,
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form
        onSubmit={handleUpdateRecipe}
        className="flex flex-col justify-center gap-3 mt-5 bg-red-300 p-5"
      >
        <h3 className="font-bold text-lg">Edit Recipe</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border mb-2 p-2"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border mb-4 p-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-green-400 border rounded-lg py-2 cursor-pointer hover:bg-green-500 transition-colors"
          disabled={!title.trim()} // Disable if empty
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditRecipeForm;
