// components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to="/" className="header-link">
            🍳 Recipe Book
          </Link>
        </h1>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Recipe Book App</p>
      </footer>
    </div>
  );
}

export default Layout;
