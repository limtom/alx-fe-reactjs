import { useEffect, useState } from "react";
import { useRecipeStore } from "./recipeStore";

function EditRecipeForm({ id }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      const foundRecipe = useRecipeStore
        .getState()
        .recipes.find((recipe) => recipe.id === parseInt(id));
      if (foundRecipe) {
        setTitle(foundRecipe.title);
        setDescription(foundRecipe.description);
      }
    }
  }, [id]);

  function handleUpdateRecipe(event) {
    event.preventDefault();
    updateRecipe(id, { title, description });
    console.log({ title, description });
  }

  return (
    <div>
      <form
        onSubmit={(event) => handleUpdateRecipe(e)}
        className="flex flex-col justify-center gap-3 mt-5 bg-red-300 p-5"
      >
        <h3 className="font-bold text-lg">Edit Recipe</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border mb-2 p-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border mb-4 p-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-green-400 border rounded-lg py-2 cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditRecipeForm;
