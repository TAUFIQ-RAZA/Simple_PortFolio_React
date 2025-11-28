import React from "react";
import "./cssProperty/Education.css";
import { FaCalendar } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      year: "2024 - 2026",
      title: "Master Degree – VTU University",
      desc: "As a front-end developer, I thrive on crafting responsive and visually appealing websites.",
    },
    {
      year: "2020 - 2024",
      title: "Bacholer Degree – VTU University",
      desc: "I work on responsive UI designs that adapt beautifully across devices.",
    },
    {
      year: "2019 - 2020",
      title: "PUC  – Karnataka University",
      desc: "Passionate about design, usability, and interactive experiences.",
    },
  ];

  const experience = [
    {
      year: "2017 - 2018",
      title: "Web Developer – Company",
      desc: "I thrive on crafting responsive and visually appealing websites.",
    },
    {
      year: "2018 - 2019",
      title: "Web Developer – Company",
      desc: "Building clean and optimized UI that adapts to all devices.",
    },
    {
      year: "2019 - 2020",
      title: "Web Developer – Company",
      desc: "Focused on frontend frameworks and user-centered design.",
    },
  ];

  return (
    <div className="container timeline-section">
      <div className="row">
        {/* LEFT – Education */}
        <div className="col-md-6">
          <h3 className="section-title">Education</h3>
          {education.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="dot"></div>
              <div className="timeline-card">
                <p className="year">
                  <FaCalendar /> {item.year}
                </p>
                <h5 className="title">{item.title}</h5>
                <p className="desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – Experience */}
        <div className="col-md-6">
          <h3 className="section-title">Experience</h3>
          {experience.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="dot"></div>
              <div className="timeline-card">
                <p className="year">
                  <FaCalendar /> {item.year}
                </p>
                <h5 className="title">{item.title}</h5>
                <p className="desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
