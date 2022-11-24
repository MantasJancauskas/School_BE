import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light px-5">
      <Link className="navbar-brand" to="/home">
        BetterMedium
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/school">
              Schools
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
