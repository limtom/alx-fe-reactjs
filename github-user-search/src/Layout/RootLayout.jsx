import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <Fragment>
      <nav>
        <img src="../public/vite.svg" alt="logo" />

        <ul>
          <li>profile</li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default RootLayout;
