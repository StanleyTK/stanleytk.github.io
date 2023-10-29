import React from 'react';
import './css_files/Experience.css';
import MyImage from '../public/pfp_myself.jpg';
import PATH from '../public/Visualizer2.jpg';


const experienceData = [
  {
    "name": "Kohl's",
    "job_title": "Software Engineer Intern",
    "pic_filepath": PATH,
    "description": "Incoming in Summer of 2024",
    "location": "San Ramon",
    "skills": "Python, React, Selenium"
  },
  {
    "name": "Comerica Bank",
    "job_title": "Software Engineer Intern",
    "pic_filepath": PATH,
    "description": "did nothing",
    "location": "Auburn Hills",
    "skills": "Python, React, Selenium"
  },
  {
    "name": "Quantic",
    "job_title": "Software Engineer Intern",
    "pic_filepath": PATH,
    "description": "did something",
    "location": "King of Prussia",
    "skills": "Python, React, Selenium"
  }
]

function Portfolio() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Experience</a></li>
          <li><a href="/about">P.A.V.</a></li>
          <li><a href="/sudoku">Sudoku</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      
      <div className="aboutme">
      <h1 className="name">Stanley Kim</h1>
          <p className="description">Computer Science Major at Purdue</p>
      </div>
      <section id="profile">
        <div className="section_pic-container">
          <img className="circular-img" src={MyImage} alt="Myself" />
        </div>
        <div className="name-description">

        </div>
      </section>

      <div className="name-description">
        <h2 className="name">Experience</h2>
        <ul className="experience-list">
          {experienceData.map((experience, index) => (
            <li key={index} className="experience-item">
              <img
                className="experience-image"
                src={experience.pic_filepath}
                alt={experience.name}
              />
              <div className="experience-details">
                <h3 className="experience-title">{experience.name}</h3>
                <p className="experience-description">{experience.description}</p>
                <p className="experience-location">Location: {experience.location}</p>
                <p className="project-skills">Skills: {experience.skills}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>




      <div className="navbar">
        <ul>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/about">P.A.V.</a></li>
          <li><a href="/sudoku">Sudoku</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
