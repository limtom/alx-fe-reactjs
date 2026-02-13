import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
