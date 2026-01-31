import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import GithubSearch from "./components/GithubSearch";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<GithubSearch />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
