import React from 'react';
import './Skills.css'; // Importing the CSS file

const Skills = () => {
  const skills = [
    { title: 'Python', logo: "https://simpleicons.org/icons/python.svg" },
    { title: 'C', logo: "https://simpleicons.org/icons/c.svg" },
    { title: 'C++', logo: "https://simpleicons.org/icons/cplusplus.svg" },
    { title: 'Java', logo: "https://img.icons8.com/?size=100&id=2572&format=png" },
    { title: 'Golang', logo: "https://simpleicons.org/icons/go.svg" },
    { title: 'SQL', logo: "https://simpleicons.org/icons/mysql.svg" },
    { title: 'HTML', logo: 'https://simpleicons.org/icons/html5.svg' },
    { title: 'CSS', logo: 'https://simpleicons.org/icons/css.svg' },
    { title: 'Javascript', logo: 'https://simpleicons.org/icons/javascript.svg' },
    { title: 'React JS', logo: 'https://simpleicons.org/icons/react.svg' },
    { title: 'Angular JS', logo: 'https://simpleicons.org/icons/angular.svg' },
    { title: 'Flask', logo: 'https://simpleicons.org/icons/flask.svg' },
    { title: 'Node JS', logo: 'https://simpleicons.org/icons/nodedotjs.svg' },
    { title: 'Google Firebase', logo: 'https://simpleicons.org/icons/firebase.svg' },
    { title: 'Pandas', logo: 'https://simpleicons.org/icons/pandas.svg' },
    { title: 'Numpy', logo: 'https://simpleicons.org/icons/numpy.svg' },
    { title: 'MongoDB', logo: 'https://simpleicons.org/icons/mongodb.svg' },
    { title: 'Git', logo: 'https://simpleicons.org/icons/github.svg' },
    { title: 'Scikit-learn', logo: 'https://simpleicons.org/icons/scikitlearn.svg' }
  ];

  const hackathons = [
    'Code for Good - JP Morgan Chase & Co.',
    'Kodikon - National level hackathon at PES University',
    'Develop For Her 4.0 - State level hackathon at PES University',
    'Terrathon - PES University hackathon',
    'Override 23 - Hackathon organized by Google Developers Group PES University',
  ];

  const leadership = `
    Currently serving as the Club Head of Research Et Al and the Research Head of Gron IT. 
    We have conducted a ideathon where participants come up with solutions to real world sustainability problems as well as conducted a state level 24 hour hackathon
  `;

  // const introduction = `
  //   Hey there! 👋 I'm a passionate Full Stack Web Developer and Machine Learning enthusiast 
  //   who loves building impactful projects and exploring the exciting crossroads of technology 
  //   and creativity. 🚀 Whether it's crafting seamless web apps or training models that make 
  //   sense of the world, I thrive on solving problems and delivering innovative solutions.
  // `;

  const codeForGoodDescription = `
  `;

  return (
    <div className="about-me-container">
      {/* <div class="border">
      <header>
        <h1>About Me</h1>
        <p>{introduction}</p>
      </header>
      </div> */}

<section className="skills">
        <h2>Skills</h2>
        <div class="border">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <img src={skill.logo} alt={skill.title} />
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="hackathons">
      <div class="border">
        <h2>Hackathon Experience</h2>
        <ul>
          {hackathons.map((hackathon, index) => (
            <li key={index}>{hackathon}</li>
          ))}
        </ul>
        </div>
        <p>{codeForGoodDescription}</p>
      </section>

      <section className="leadership">
        <div class="border">
        <h2>Leadership & Research</h2>
        <p>{leadership}</p>
        </div>
      </section>

      
    </div>
  );
};

export default Skills;
