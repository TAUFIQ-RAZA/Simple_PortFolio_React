import React from "react";
import logo from "./Images/tr_logo.avif";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: "#121212", // deep black tone
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)", // soft black shadow
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-bold">MyPortfolio</span>
          </a>

          {/* Mobile Menu Toggle */}
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

          {/* Menu Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left side buttons */}
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{
                fontFamily:
                  "Franklin Gothic Medium, 'Arial Narrow', Arial, sans-serif",
              }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Projects">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/Education">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-outline-info ms-2"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "6px 15px" }}
                >
                  Resume
                </a>
              </li>
            </ul>

            {/* Right side (Contact button) */}
            <div className="d-flex">
              <a className="btn btn-primary" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
