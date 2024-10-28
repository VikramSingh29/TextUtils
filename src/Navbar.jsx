import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar({ mode, toggleMode, color }) {
  return (
    <div style={{ color: color }}>
      <nav
        className={`navbar bg-${mode} navbar-expand-lg bg-body-tertiary boxshadow`}
        data-bs-theme={`${mode}`}
  
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TextUtils
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch" style={{ color: color }}>
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: color }}
            >
              {mode === "dark" ? "LightMode" : "DarkMode"}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
