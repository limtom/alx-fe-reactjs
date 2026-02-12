import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
