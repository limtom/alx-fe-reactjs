import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import "../src/App.css";

function App() {
  return (
    <div className="app">
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
