import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Error parsing stored user", e);
      }
    } else {
      setUser(null);
    }

    const registered = localStorage.getItem("isRegistered") === "true";
    setIsRegistered(registered);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Preserve isRegistered: "true" so returning users see the Login option
    setUser(null);
    setIsRegistered(true);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom sticky-top" style={{ backgroundColor: '#FFF' }}>
      <div className="container p-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="media/images/logo.svg" alt="TradeX logo" style={{ width: "145px", height: "auto" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">Support</Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <a
                    href="http://localhost:3001"
                    className="btn btn-sm btn-outline-primary px-3 fw-semibold"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <span className="badge bg-secondary py-2 px-3 fw-normal text-capitalize">
                    Hi, {user.username}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-outline-danger px-2 py-1"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : isRegistered ? (
              <li className="nav-item d-flex align-items-center gap-1">
                <Link
                  className="btn btn-primary btn-sm px-3 fw-semibold"
                  style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-link btn-sm text-decoration-none text-muted"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            ) : (
              <li className="nav-item d-flex align-items-center gap-1">
                <Link
                  className="btn btn-primary btn-sm px-3 fw-semibold"
                  style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
                  to="/signup"
                >
                  Sign Up
                </Link>
                <Link
                  className="btn btn-link btn-sm text-decoration-none text-muted"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;