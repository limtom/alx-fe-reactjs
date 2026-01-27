import { useRecipeStore } from "./recipeStore";

function DeleteRecipeButton() {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div>
      <span
        className="border rounded p-1 cursor-pointer"
        onClick={() => deleteRecipe(id)}
      >
        &#128465;
      </span>
    </div>
  );
}

export default DeleteRecipeButton;
