import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="container flex items-center justify-center w-full flex-col pt-4">
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
