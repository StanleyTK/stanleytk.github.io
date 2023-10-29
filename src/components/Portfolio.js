import React from 'react';
import './css_files/Portfolio.css';
import MyImage from '../public/pfp_myself.jpg';
import TE_PIC from '../public/TE_AI_CUP_Photo.jpg';
import WalkMeHome from '../public/WalkMeHome.jpg';
import NASA from '../public/Lunabotics.png';
import PATH from '../public/Visualizer2.jpg';
import COMERICA from '../public/Comerica_Logo.jpg';
import KOHLS from '../public/kohls-logo.jpg';
import QUANTIC from '../public/getquantic_logo.jpeg';
import PURDUE from '../public/purdue-banner-logo.jpg';
import PORTFOLIO from '../public/Portfolio.png';
import IUHEALTH from '../public/symposium.png'



const projectsData = [
  {
    "name": "TE AI Cup Competition",
    "pic_filepath": TE_PIC,
    "description": "We achieved a high accuracy rate in predicting 18-month sales forecasts using 500 external indicators, demonstrating strong data modeling and machine learning skills.",
    "skills": "Python, TensorFlow"
  },
  {
    "name": "WalkMeHome",
    "pic_filepath": WalkMeHome,
    "githubLink": "https://github.com/StanleyTK/WalkMeHome",
    "description": "I designed and developed a real-time mobile application for BoilerMake Hackathon. It enables precise geolocation services for seamless user movement visualization on a map. I integrated CockroachDB backend with Flutter frontend for optimal performance.",
    "skills": "Flutter, CockroachDB"
  },
  {
    "name": "Purdue X NASA Lunabotics",
    "pic_filepath": NASA,
    "githubLink": "https://github.com/StanleyTK/WalkMeHome",
    "description": "I developed a Python program to implement the FastSLAM algorithm. It allows a lunar rover to efficiently map and localize itself in a simulated lunar environment. This enabled accurate mapping and position updates across complex lunar terrain.",
    "skills": "Python, C++"
  },
  {
    "name": "Path-finding Algorithm Visualizer",
    "pic_filepath": PATH,
    "githubLink": "https://github.com/StanleyTK/Pathfinding-Algorithm-Visualizer",
    "description": "I created a website for visualizing maze-solving using A* Search Algorithm and Dijkstra’s Algorithm. I ensured the shortest path between start and end nodes, receiving positive feedback from users for its educational value.",
    "skills": "JavaScript, HTML"
  },
  {
    "name": "Portfolio",
    "pic_filepath": PORTFOLIO,
    "description": "You're looking right at it. I built a website with all of my projects that I have done in my career.",
    "githubLink": "https://github.com/StanleyTK/WalkMeHome",
    "skills": "React"
  },
  {
    "name": "Data Mine Research: LSTM Forecasting Model",
    "pic_filepath": IUHEALTH,
    "description": "I collaborated with IU Health to design various time-series forecasting models to forecast the emergency surgeries. I utilized Python and LSTM neural network to capture complex patterns in the data and combined with statistical algorithms to optimize the accuracy of the model to 97%.",
    "skills": "Python, R, SQL"
  }
];

const experienceData = [
  {
    "name": "Kohl's",
    "job_title": "Software Engineer Intern",
    "pic_filepath": KOHLS,
    "description": "I'm joining Kohl's as a Software Engineer Intern in the Summer of 2024. Super Excited :)",
    "location": "San Ramon, CA",
    "timeline": "June 2024 - Aug 2024",
    "skills": "Python, React, Selenium"
  },
  {
    "name": "The Data Mine - Purdue University",
    "job_title": "Undergraduate Teaching Assistant",
    "pic_filepath": PURDUE,
    "description": "I orchestrated a diverse project team to build a multivariate predictive model for Inogen’s portable oxygen concentrator usage and patient behavior data through intensive data analysis and machine learning in Python and R. I served as the Scrum Master in an agile environment and collaborated with students to develop a random forest and multivariate LSTM model.",
    "location": "West Lafayette, IN",
    "timeline": "Aug 2023 - May 2024",
    "skills": "Python"
  },
  {
    "name": "Comerica Bank",
    "job_title": "Software Engineer Intern",
    "pic_filepath": COMERICA,
    "description": "I worked with the IAM team to develop an automation solution for HR bulk change procedures, resulting in a substantial reduction in processing time. I showcased advanced proficiency in Java and SailPoint IdentityIQ to create a highly efficient algorithm script, which automated a two-week manual process, reducing it to under two hours. I applied a blend of SQL queries and data warehousing techniques to meticulously manage HR-received data, conducting comprehensive cleansing and validation to secure the dataset’s accuracy and reliability.",
    "location": "Auburn Hills, MI",
    "timeline": "May 2023 - Aug 2024",
    "skills": "Python, React, Selenium"
  },
  {
    "name": "Quantic",
    "job_title": "Software Engineer Intern",
    "pic_filepath": QUANTIC,
    "description": "I utilized Python and Selenium framework to program and execute 50 test scripts, thoroughly assessing the functionalities of the web-based POS system. I collaboratively improved dashboards by leveraging the React framework to visualize and analyze the productivity and efficiency of store associates. I optimized data retrieval and storage in a web-based POS system through indexing and normalization techniques, improving overall system efficiency and reliability.",
    "location": "King of Prussia, PA",
    "timeline": "May 2022 - Aug 2022",
    "skills": "Python, React, Selenium"
  }
];

function Portfolio() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/sudoku">Sudoku</a></li>
        </ul>
      </div>

      
      <div className="aboutme">
      <h1 className="name">Stanley Kim</h1>
          <h3 className="description">Incoming SWE Intern @ Kohl's | CS @ Purdue</h3>
      </div>
      <section id="profile">
        <div className="section_pic-container">
          <img className="circular-img" src={MyImage} alt="Myself" />
        </div>
        <div className="name-description">

        </div>
      </section>

      <div className="aboutme">
        <h2 className="about">About Me</h2>
        <p className="description-text">
        Hello! I am a sophomore at Purdue majoring in Computer Science, minoring in Mathematics.
        </p>
        <p className="description-text">
        I have experience in Software Engineering, Full Stack Development, Data Analysis, ML through prior internships and passion projects. 
        </p>
        <p className="description-text">
        I am primarily interested in building technology for social good, and am always eager to explore new opportunities in this field via software development.  
        </p>

        <p className="description-text">
        I am looking for Full-Time Software Engineering roles in 2025! Please feel free to reach out @ stanleykim2003@gmail.com
        </p>

      </div>

      <div className="name-description">
  <h2 className="name">Projects</h2>
  <ul className="project-list">
    {projectsData.map((project, index) => (
      <li key={index} className="project-item">
        <h3 className="project-name">
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <img
          className="project-image"
          src={project.pic_filepath}
          alt={project.name}
        />
        <p className="project-description">{project.description}</p>
        <p className="project-skills">Skills: {project.skills}</p>
      </li>
    ))}
  </ul>
</div>


      <div className="aboutme">
        <h2 className="about">Courses</h2>
        <p className="description-text">
          Sophomore: Software Engineering, Data Structures and Algorithms, System Design, Computer Architecture, Linear Algebra.
        </p>
        <p className="description-text">
          Freshman: Object-Oriented Programming, Programming in C, Multivariable Calculus, Discrete Mathematics
        </p>
      </div>


      
      <div className="name-description">
        <h2 className="name">Experience</h2>
        <ul className="experience-list">
          {experienceData.map((experience, index) => (
            <li key={index} className="project-item">
              <h3 className="project-name">{experience.name}: {experience.job_title}</h3>
              <p className="project-description">{experience.location}, {experience.timeline}</p>


              <img
                className="project-image"
                src={experience.pic_filepath}
                alt={experience.name}
              />
              <p className="project-description">{experience.description}</p>
              <p className="project-skills">Skills: {experience.skills}</p>
            </li>
          ))}
        </ul>
      </div>





      <div className="navbar">
        <ul>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/sudoku">Sudoku</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
