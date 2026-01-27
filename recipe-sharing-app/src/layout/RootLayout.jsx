import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function RootLayout() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
