import { NavLink } from "react-router-dom";

function Navbar() {
  const style = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  };
  return (
    <nav style={style}>
      <img src="./vite.svg" alt="Vite-logo" />
      <ul className="navbar-link">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="about">
          <li>About</li>
        </NavLink>
        <NavLink to="services">
          <li>Services</li>
        </NavLink>
        <NavLink to="contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}
export default Navbar;
