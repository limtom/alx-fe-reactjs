import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import RootLayout from "./components/RootLayout";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path=":id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
