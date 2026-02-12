import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import RootLayout from "./components/RootLayout";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path=":id" element={<RecipeDetails />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
