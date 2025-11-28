import React from "react";
import avatar from "./Images/HomeLogo2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center p-5"
        style={{
          minHeight: "100vh",
          backgroundColor: "rgb(18 29 70)",
          gap: "60px",
           padding:"80px"
        }}
      >
        {/* LEFT SIDE TEXT */}
        <div className="text-center text-lg-start">
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              color: "rgb(235 238 246)",
              lineHeight: "1.2",
            }}
          >
            Hi,
            <br />
            I’m <span style={{ color: "#4361ee" }}>TAUFIQ RAZA</span>
            <br />
            Full-Stack Developer
          </h1>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn mt-4"
            style={{
              backgroundColor: "#4361ee",
              color: "#fff",
              borderRadius: "30px",
              padding: "12px 30px",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 4px 10px rgba(67, 97, 238, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#274cdb")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4361ee")}
          >
            Contact
          </a>

          {/* Social Icons */}
          <div className="mt-5 d-flex justify-content-center justify-content-lg-start">
            <a
              href="https://www.linkedin.com/in/taufiq-raza"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-light"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-light"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://github.com/TAUFIQ-RAZA"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-light"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="position-relative"
          style={{
            width: "280px",
            height: "280px",
          }}
        >
          {/* Blue Blob Background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#4361ee",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              transform: "rotate(5deg)",
              zIndex: 0,
            }}
          ></div>

          {/* Avatar Image */}
          <img
            src={avatar}
            alt="Profile"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              zIndex: 1,
            }}
          />
        </div>
      </section>
    </>
  );
}
