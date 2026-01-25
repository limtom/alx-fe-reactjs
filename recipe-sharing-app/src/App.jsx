// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetails, {
  loader as recipeLoader,
} from "./components/RecipeDetails";
import Layout from "./components/Layout";
import "./App.css";
import ErrorPage from "./components/ErrorPage";

// Create router with loader
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":recipeId",
        element: <RecipeDetails />,
        loader: recipeLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
