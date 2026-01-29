import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

function DeleteRecipeButton({ id }) {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const recipes = useRecipeStore((state) => state.recipes);

  function handleDelete() {
    const toDelete = confirm("Are you sure you want to delete");
    if (toDelete) {
      deleteRecipe(parseInt(id));
      navigate("/recipes");
    }
  }
  return (
    <button
      className="border rounded p-1 cursor-pointer"
      onClick={handleDelete}
    >
      &#128465;
    </button>
  );
}

export default DeleteRecipeButton;
