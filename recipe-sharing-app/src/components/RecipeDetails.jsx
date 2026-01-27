import { useNavigate, useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useState } from "react";

function RecipeDetails() {
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id)),
  );

  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  function handleEdit(recipe) {
    setEdit((edit) => !edit);
    setTitle(recipe.title);
    setDescription(recipe.description);
  }

  function handleUpdateRecipe(e) {
    e.preventDefault();
    updateRecipe(id, { title, description });
    console.log({ title, description });
  }

  return (
    <div className="w-1/2 mt-5 mx-auto flex flex-col items-center gap-5">
      <div>
        <h2 className="text-lg text-center font-bold mb-2">{recipe.title}</h2>
        <p className="text-base mb-2">{recipe.description}</p>
        <div className="flex items-center justify-between">
          <span
            className="border rounded p-1 cursor-pointer"
            onClick={() => handleEdit(recipe)}
          >
            &#9998;
          </span>
          <button
            onClick={() => navigate("/recipes")}
            className="cursor-pointer border py-1 px-2 rounded-md"
          >
            &larr; Go back
          </button>
          <span
            className="border rounded p-1 cursor-pointer"
            onClick={() => deleteRecipe(id)}
          >
            &#128465;
          </span>
        </div>
        {edit ? (
          <form
            onSubmit={(e) => handleUpdateRecipe(e)}
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
        ) : (
          ""
        )}
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    </div>
  );
}

export default RecipeDetails;
