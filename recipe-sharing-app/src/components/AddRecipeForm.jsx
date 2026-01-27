import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 flex flex-col justify-center"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border mb-4 p-2"
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
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
