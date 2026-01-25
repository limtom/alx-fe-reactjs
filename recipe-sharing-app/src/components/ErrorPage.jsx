// components/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops!</h1>
        <p className="error-message">
          Sorry, an unexpected error has occurred.
        </p>

        {error.status === 404 ? (
          <>
            <div className="error-code">404</div>
            <p className="error-description">
              The recipe you're looking for could not be found.
            </p>
          </>
        ) : (
          <>
            <div className="error-code">{error.status || 500}</div>
            <p className="error-description">
              {error.statusText || error.message || "An unknown error occurred"}
            </p>
          </>
        )}

        <Link to="/" className="home-link">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
