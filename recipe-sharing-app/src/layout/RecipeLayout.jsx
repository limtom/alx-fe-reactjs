import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function RecipeLayout() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Outlet />
    </div>
  );
}

export default RecipeLayout;
