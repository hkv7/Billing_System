import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Menubar.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const Menubar = () => {
  const { setAuthData, auth } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuthData(null, null);
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  const isAdmin = auth.role === "ROLE_ADMIN";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <Link className="navbar-brand" to="/">
        <img src={assets.logo} alt="Logo" height="40" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                isActive("/dashboard") ? "fw-bold text-warning" : ""
              }`}
              to="/dashboard"
            >
              <i className="bi bi-speedometer2 me-1"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                isActive("/explore") ? "fw-bold text-warning" : ""
              }`}
              to="/explore"
            >
              <i className="bi bi-search me-1"></i> Explore
            </Link>
          </li>
          {isAdmin && (
            <>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/items") ? "fw-bold text-warning" : ""
                  }`}
                  to="/items"
                >
                  <i className="bi bi-card-list me-1"></i> Manage Items
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/category") ? "fw-bold text-warning" : ""
                  }`}
                  to="/category"
                >
                  <i className="bi bi-tags me-1"></i> Manage Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/users") ? "fw-bold text-warning" : ""
                  }`}
                  to="/users"
                >
                  <i className="bi bi-people me-1"></i> Manage Users
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link
              className={`nav-link ${
                isActive("/orders") ? "fw-bold text-warning" : ""
              }`}
              to="/orders"
            >
              <i className="bi bi-clock-history me-1"></i> Order History
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-tem dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={assets.Profile} alt="" height={32} width={32} />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <a href="#!" className="dropdown-item">
                <i className="bi bi-gear-fill me-2"></i> Settings
              </a>
              <a href="#!" className="dropdown-item">
                <i className="bi bi-journal-text me-2"></i> Activity log
              </a>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <a href="#!" className="dropdown-item" onClick={logout}>
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menubar;
