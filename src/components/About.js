import React from "react";
import aboutImg from "./Images/myPhoto2.jpg"; // replace with your photo
import "./cssProperty/About.css";

export default function About() {
  return (
    <section
      id="about"
      className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-5 px-4"
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffaf6",
        color: "#222",
        padding:"80px"
      }}
    >
      {/* Left Side - Image */}
      <div className="text-center me-lg-5 mb-4 mb-lg-0 about-photo">
        <img
          src={aboutImg}
          alt="Taufiq Raza"
          style={{
            width: "370px",
            height: "490px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Right Side - Content */}
      <div style={{ maxWidth: "600px", lineHeight: "1.8", fontFamily: "'Poppins', sans-serif"  }}>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2rem",
            color: "#111",
          }}
        >
          I’m <span style={{ color: "#007bff" }}>Taufiq Raza</span>, a
          passionate Full-Stack Developer from India.
        </h2>

        <p style={{ marginTop: "20px", color: "#555", fontSize: "1rem" }}>
          I’m a passionate <strong>Web Developer</strong> who loves crafting
          <strong> modern, responsive websites</strong> using
          <strong> React.js, HTML, CSS,</strong> and <strong>JavaScript</strong>
          . I enjoy blending clean design with functional code to create
          user-friendly digital experiences.
        </p>

        <p style={{ marginTop: "10px", color: "#555", fontSize: "1rem" }}>
          I’ve built projects like a <strong>Student Information System</strong>
          and a <strong>Bank Management System</strong> using
          <strong>Java, MySQL, HTML,</strong> and <strong>CSS</strong>, which
          strengthened my skills in full-stack development.
        </p>

        <p style={{ marginTop: "10px", color: "#555", fontSize: "1rem" }}>
          Outside coding, I explore <strong>tech trends</strong>, practice{" "}
          <strong>English communication</strong>, enjoy <strong>cycling</strong>
          , and help my father at his shop.
        </p>

        <p style={{ marginTop: "10px", color: "#555", fontSize: "1rem" }}>
          My goal is to grow as a <strong>Full Stack Developer</strong>
          and build software that makes life easier for people.
        </p>

        <div style={{ marginTop: "25px" }}>
          <a
            href="#contact"
            className="btn btn-dark px-4 py-2"
            style={{
              borderRadius: "25px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              fontWeight: "500",
            }}
          >
            Contact Me →
          </a>
        </div>
      </div>
    </section>
  );
}
