import { useNavigate, useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useState } from "react";
import EditRecipeForm from "./EditRecipeForm";

function RecipeDetails() {
  const [edit, setEdit] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id)),
  );

  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  function handleEdit(recipe) {
    setEdit((edit) => !edit);
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
        {edit ? <EditRecipeForm id={id} /> : ""}
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    </div>
  );
}

export default RecipeDetails;
