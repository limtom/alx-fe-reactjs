import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import GithubSearch from "./components/GithubSearch";
import Profile from "./components/Profile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<GithubSearch />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
