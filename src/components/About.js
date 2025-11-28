import React from "react";
import aboutImg from "./Images/myPhoto2.jpg";
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
        padding: "80px",
        margin:"100px 50px"
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
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)"
          }}
        />
      </div>

      {/* Right Side - Content */}
      <div
        style={{
          maxWidth: "600px",
          lineHeight: "1.85",
          fontFamily: "'Inter', sans-serif"
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2.1rem",
            color: "#111"
          }}
        >
          I’m <span style={{ color: "#007bff" }}>Taufiq Raza</span>, a Full-Stack Developer based in India.
        </h2>

        <p style={{ marginTop: "20px", color: "#444", fontSize: "1.05rem" }}>
          I’m a web developer who enjoys creating modern and responsive websites
          using React.js, JavaScript, HTML, and CSS. I like building clean and simple
          interfaces that give users a smooth experience. Some of my major projects
          include a Student Information System and a Bank Management System, which
          helped me improve both front-end and back-end development skills.
        </p>

        <p style={{ marginTop: "15px", color: "#444", fontSize: "1.05rem" }}>
          Outside of coding, I explore new tech trends, practice English
          communication, enjoy cycling, and help my father at his shop. I’m focused
          on growing as a Full Stack Developer and building software that solves
          real problems and makes everyday tasks easier for people.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="#contact"
            className="btn btn-dark px-4 py-2"
            style={{
              borderRadius: "30px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              fontWeight: "500"
            }}
          >
            Contact Me →
          </a>
        </div>
      </div>
    </section>
  );
}
