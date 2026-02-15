import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path=":id" element={<RecipeDetail />} />
        <Route path="addRecipe" element={<AddRecipeForm />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
