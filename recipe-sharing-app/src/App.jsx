import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./Layout/RootLayout";
import RecipeList from "../src/components/RecipeList";
import Home from "../src/components/Home";
import RecipeDetails from "./components/RecipeDetails";
import RecipeLayout from "./layout/RecipeLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<RecipeLayout />}>
          <Route index element={<RecipeList />} />
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
