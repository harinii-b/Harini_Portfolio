import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Code for Good Hackathon - JP Morgan Chase & Co",
    description:
      "Developed a web app to automate student enrollment for software training in government colleges, preventing dropouts and raising awareness for an NGO.",
    technologies: "Web Development",
  },
  {
    title: "Kodikon - National Level Hackathon",
    description:
      "An AI-driven portal that simplifies legal documents and suggests welfare schemes for underprivileged citizens based on their needs.",
    technologies: "AI, Web Development",
  },
  {
    title: "Develop For Her 4.0 - Safe Her Web Application",
    description:
      "A web app to prevent workplace harassment by allowing anonymous complaints and tracking them. Ranked in the top 8.",
    technologies: "MERN Stack, Auth0 API",
  },
  {
    title: "Override 23 - Entrelaunch Web Application",
    description:
      "A web app providing free online content in local languages to make learning more accessible. Ranked in the top 44 out of 235 teams.",
    technologies: "AngularJS, Node.js",
  },
  {
    title: "Vehicle Fare Prediction",
    description:
      "Developed predictive models for fare forecasting across multiple vehicle types using historical hourly data (2021–2023).",
    technologies:
      "Time Series Analysis, Feature Engineering, Statistical Testing",
  },
  {
    title: "Multimodal Fusion Model for Emotion Detection",
    description:
      "Developed a model to detect emotions from video and subtitle data of the TV show Friends using video analysis and NLP.",
    technologies: "Python, OpenCV, Transformers",
  },
  {
    title: "Expense Tracker",
    description:
      "An end semester project to track daily expenses. Users can filter entries by cost or category and view total expenses.",
    technologies: "C++",
  },
  {
    title: "Care Crafter",
    description:
      "End semester Web Technologies project - A web app for easy booking of doctor appointments and viewing.",
    technologies: "MERN Stack",
  },
  {
    title: "Text Based Adventure Game",
    description:
      "A text-based adventure game with multiple levels and a dynamic UI.",
    technologies: "Python, Tkinter",
  },
  {
    title: "Chat Server",
    description:
      "A secure chat room with SSL where multiple users can join and leave, chat, kick/ban users, and search history.",
    technologies: "Socket Programming in Python, SSL",
  },
  
  {
    title: "Terrathon - CropConnect",
    description:
      "A web app enabling farmers to directly access the market, eliminating middlemen and ensuring fair trade.",
    technologies: "MERN Stack, Auth0 API",
  },
  
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
