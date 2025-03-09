import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Virtusa Consulting Services Pvt Ltd",
    role: "Summer Intern",
    date: "May 31st 2024- July 31st 2024",
    location: "Bangalore , India",
    description:
      "Learnt advanced Python and AIML concepts and worked on AI/ML use case development. Developed an Incident Prediction Machine Learning model.",
  },
  {
    company: "JP Morgan Chase & Co.",
    role: "Summer Intern",
    date: "June - August 2025",
    location: "India",
    description:
      "Upcoming internship at JPMC for the summer of 2025.",
  },
];

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="section-title">Experience</h1>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h2 className="experience-company">{experience.company}</h2>
            <p className="experience-role"><strong>Role:</strong> {experience.role}</p>
            <p className="experience-date"><strong>Date:</strong> {experience.date}</p>
            <p className="experience-location"><strong>Location:</strong> {experience.location}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
