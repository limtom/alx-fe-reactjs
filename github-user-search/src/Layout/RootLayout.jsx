import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <Fragment>
      <Navbar />
      <main className="flex flex-col items-center justify-center mx-auto">
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;
