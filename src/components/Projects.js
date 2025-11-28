import React from "react";
import "./cssProperty/Project.css";

import bankImg from "./ProjectImages/bank.jpg";
import universityImg from "./ProjectImages/university.jpeg";
import fakeNewsImg from "./ProjectImages/fakeNews.webp";
import calculatorImg from "./ProjectImages/calculator.jpg";
import portfolioImg from "./ProjectImages/portfolio.png";

export default function Projects() {
  return (
    <div>
      <div className="skill-section">
      <h className="heading">PROJECT</h>
      <p className="para">
        Management is all above, the practice where art,science and craft.
      </p>
      <div className="container projects-container">
        {/* Bank Management System */}
        <div className="project-card">
          <img src={bankImg} className="project-img" alt="BankImage" />
          <div className="project-body">
            <h5 className="project-title">Bank Management System</h5>
            <p className="project-text">
              A Java Swing + MySQL based application designed to manage customer
              accounts, transactions, balances, loan processing, and secure
              login authentication with a clean UI.
            </p>
            <a
              href="https://github.com/TAUFIQ-RAZA/Bank_Management_System.git"
              className="btn btn-primary"
            >
              CODE
            </a>
          </div>
        </div>

        {/* University Management System */}
        <div className="project-card">
          <img src={universityImg} className="project-img" alt="University" />
          <div className="project-body">
            <h5 className="project-title">University Management System</h5>
            <p className="project-text">
              A complete portal for students and faculty with course
              registration, attendance, results, faculty management, and
              department-level data handling using Java + MySQL.
            </p>
            <a
              href="https://github.com/TAUFIQ-RAZA/University_Management_System.git"
              className="btn btn-primary"
            >
              CODE
            </a>
          </div>
        </div>

        {/* Fake News Headline Generator (AI Project) */}
        <div className="project-card">
          <img src={fakeNewsImg} className="project-img" alt="FakeNews" />
          <div className="project-body">
            <h5 className="project-title">Fake News Headline Generator</h5>
            <p className="project-text">
              An AI-powered text generation tool that creates random fake news
              headlines using NLP models. Built using React + API integration.
            </p>
            <a
              href="https://github.com/TAUFIQ-RAZA/FakeNewsHeadlingGeneratorUsingPython.git"
              className="btn btn-primary"
            >
              CODE
            </a>
          </div>
        </div>

        {/* Portfolio */}
        <div className="project-card">
          <img src={portfolioImg} className="project-img" alt="Portfolio" />
          <div className="project-body">
            <h5 className="project-title">Personal Portfolio Website</h5>
            <p className="project-text">
              A modern, responsive portfolio built using React, showcasing
              skills, projects, education, and experience with smooth UI and
              custom animations.
            </p>
            <a href="https://github.com/TAUFIQ-RAZA/Simple_PortFolio_React.git" className="btn btn-primary">
              CODE
            </a>
          </div>
        </div>

        {/* Calculator */}
        <div className="project-card">
          <img src={calculatorImg} className="project-img" alt="calculator" />
          <div className="project-body">
            <h5 className="project-title">Calculator With History</h5>
            <p className="project-text">
              A simple yet functional calculator built with JavaScript featuring
              full operation history, clearing options, and responsive layout.
            </p>
            <a
              href="https://github.com/TAUFIQ-RAZA/Calculator_with_history_using_python.git"
              className="btn btn-primary"
            >
              CODE
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
