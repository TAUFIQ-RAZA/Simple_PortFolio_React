import React from "react";
import "./cssProperty/Skills.css";

import htmlImg from "./SkillsImage/HTML.jpg";
import jsImg from "./SkillsImage/JS.png";
import nodeImg from "./SkillsImage/NODEJS.jpg";
import reactImg from "./SkillsImage/REACT.png";
import cssImg from "./SkillsImage/CSS.webp";
import MongoDBImg from "./SkillsImage/MongoDB.jpg";
import BootstrapImage from "./SkillsImage/Bootstrap.png";
import TailwindImg from "./SkillsImage/TailwindCss.jpeg";

export default function Skills() {
  return (
    <div>
      <div className="skill-section">
        <h1 className="heading">TECHNICAL SKILLS</h1>
        <div className="skills-container">
          {/* HTML */}
          <div className="skill-card">
            <img src={htmlImg} className="skill-img" alt="HTML" />
            <div className="skill-level">98%</div>
            <h1 className="skill-name">HTML</h1>
            <p className="skill-info">
              Strong understanding of semantic structure, forms, accessibility,
              and layout building.
            </p>
          </div>

          {/* CSS */}
          <div className="skill-card">
            <img src={cssImg} className="skill-img" alt="CSS" />
            <div className="skill-level">88%</div>
            <h1 className="skill-name">CSS</h1>
            <p className="skill-info">
              Strong understanding of semantic structure, forms, accessibility,
              and layout building.
            </p>
          </div>

          {/* JavaScript */}
          <div className="skill-card">
            <img src={jsImg} className="skill-img" alt="JS" />
            <div className="skill-level">92%</div>
            <h1 className="skill-name">JavaScript</h1>
            <p className="skill-info">
              Skilled in ES6+, DOM manipulation, events, APIs, and async
              programming.
            </p>
          </div>

          {/* NodeJS */}
          <div className="skill-card">
            <img src={nodeImg} className="skill-img" alt="NodeJS" />
            <div className="skill-level">85%</div>
            <h1 className="skill-name">NodeJS</h1>
            <p className="skill-info">
              Experience in building backend APIs using Express, routing,
              middleware, and MongoDB.
            </p>
          </div>

          {/* React */}
          <div className="skill-card">
            <img src={reactImg} className="skill-img" alt="React" />
            <div className="skill-level">90%</div>
            <h1 className="skill-name">React</h1>
            <p className="skill-info">
              Proficient in components, props, state, hooks, routing, and
              reusable UI building.
            </p>
          </div>

          {/* MongoDB */}
          <div className="skill-card">
            <img src={MongoDBImg} className="skill-img" alt="MongoDB" />
            <div className="skill-level">70%</div>
            <h1 className="skill-name">MongoDB</h1>
            <p className="skill-info">
              Proficient in MongoDB schema design, CRUD operations, aggregation
              pipeline, indexing, and scalable database structuring.
            </p>
          </div>

          {/* Bootstrap */}
          <div className="skill-card">
            <img src={BootstrapImage} className="skill-img" alt="Boostrap" />
            <div className="skill-level">75%</div>
            <h1 className="skill-name">Bootstrap</h1>
            <p className="skill-info">
              Experienced in building responsive layouts using Bootstrap grid
              system, utility classes, components, and mobile-first UI design.
            </p>
          </div>

          {/* Tailwind Css */}
          <div className="skill-card">
            <img src={TailwindImg} className="skill-img" alt="TailwindCss" />
            <div className="skill-level">85%</div>
            <h1 className="skill-name">Tailwind CSS</h1>
            <p className="skill-info">
              Skilled in crafting modern, responsive UIs using Tailwind’s
              utility-first classes, reusable components, and custom theme
              configurations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
