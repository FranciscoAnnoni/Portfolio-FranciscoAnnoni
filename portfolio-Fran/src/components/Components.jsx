import { useEffect, useState } from 'react'
import './Components.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaMouse, FaMousePointer } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoFolderOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
//----------------------------------------------------------------------------// Sigue el mouse
export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Efecto para seguir el mouse
  useEffect(() => {
    const handleMove = (event) => {
      const { pageX, pageY } = event; // Usa pageX y pageY
      setPosition({ x: pageX, y: pageY });
    };
  
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
  
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);
  

  // Efecto para cambiar el estilo del cuerpo
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <>
      {/* Cursor personalizable */}
      <div
        className="cursor"
        style={{
          pointerEvents: 'none',
          left: -23,
          top: -23,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      {/* Punto del cursor */}
      <div
        className="cursor-dot"
        style={{
          pointerEvents: 'none',
          left: -5,
          top: -5,
          transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
        }}
      ></div>
      
      {/* Botón de toggle con ícono 
      <button className="toggle-button" onClick={() => setEnabled(!enabled)}>
        {enabled ? <FaMousePointer /> : <FaMouse />}
      </button>
      */}
    </>
  );
};

//----------------------------------------------------------------------------// Toggle de Cambio de Modo Darck a Light

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <button className="minimal-toggle-button" onClick={handleChange}>
      {isChecked ? <FaSun className="iconSun" /> : <FaMoon className="iconMoon" />}
    </button>
  );
};

//----------------------------------------------------------------------------// Boton vase de la App
export const ButtonColor = ({ text, className }) => {
  return (
    <button className={className}>
      <span aria-hidden="true">{text}</span>
      <span></span>
      <span>{text}</span>
    </button>
  );
};

//----------------------------------------------------------------------------// Boton vase de la App
export const ButtonNav = ({ text, href, onClick }) => {
  return (
    <div className="button-nav-wrapper">
    <a className="button-nav" href="/your-link" target="_blank" rel="noopener noreferrer">{text}</a>
    </div>
  );
};

//----------------------------------------------------------------------------// Scroll Section

const tabs = [
  {
    id: "panel-0",
    label: "Data Architect",
    title: "Data Architect - DBlandIT",
    date: "Dec 2021 - Aug 2024",
    content: [
      "Implemented custom Bash scripting for log optimization and analysis, using Logrotate and Logstash to streamline data management and ensure system efficiency.",
      "Designed and maintained MongoDB databases, configured ReplicaSets, and optimized database performance to meet the growing needs of the company.",
      "Developed expertise in big data ecosystems such as Hadoop, Cloudera Manager, NiFi, HDFS, and YARN, leading data integration and management projects.",
      "Utilized monitoring tools such as Kibana and Grafana, as well as others like Prometheus and ElasticSearch, to ensure system health and performance.",
    ],
  },
  {
    id: "panel-1",
    label: "Researcher",
    title: "Research and Development Intern - UTN",
    date: "Apr 2020 - Dec 2021",
    content: [
      "I collaborated with the teaching team at UDB Chemistry to develop a platform for administering exams and storing responses during the pandemic.",
      "The platform was built using Google Suite and Google's set of tools, managing channels and sequences to configure a spreadsheet for recording students' grades, which was later used for analysis and conclusions.",
    ],
  },
  {
    id: "panel-2",
    label: "Intership",
    title: "Web Page Design - Intership at High School",
    date: "Spring 2017 & 2018",
    content: [ 
      "Assisted in the creation of the student record page for the school, helping design and implement a platform for managing student data.",
      "Collaborated on the development of a basic webpage to showcase upcoming school events, providing an easy-to-use interface for students and teachers.",
    ],
  },
];

export const TabSection = () => {
  const [activeTab, setActiveTab] = useState("panel-0");

  return (
    <div className="app-container">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="content-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`panel ${activeTab === tab.id ? "active" : ""}`}
          >
            <h3 className='titulo'>{tab.title}</h3>
            <p className='subtitulo'>{tab.date}</p>
            <ul className="custom-list">
              {tab.content.map((item, index) => (
                <li className="custom-list-item texto" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectCard = ({ title, description, technologies, githubLink, projectLink }) => {
  return (
      <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
          <div className="project-inner">
              <header>
                  <div className="project-top">
                      <div className="folder">
                      <IoFolderOutline/>
                      </div>
                      <div className="project-links">
                        <a href={githubLink} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                          <FaGithub/>
                        </a>
                        <a href={projectLink} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
                          <FiExternalLink/>
                        </a>
                      </div>
                  </div>
                  <h3 className="project-title">
                      <a href={projectLink} target="_blank" rel="noopener noreferrer">{title}</a>
                  </h3>
                  <div className="project-description">
                      <p>{description}</p>
                  </div>
              </header>
              <footer>
                  <ul className="project-tech-list">
                      {technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                      ))}
                  </ul>
              </footer>
          </div>
      </li>
  );
};


export const FeaturedProjectCard = ({ title, description, technologies, githubLink, projectLink, imagePath }) => {
  return (
    <li className="featured__StyledProject-ywnbqt-1 gvznfB" data-sr-id="4">
      <div className="project-content">
        <div className="project-text">
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title-work">
            <a href={projectLink} rel="noopener noreferrer" target="_blank">{title}</a>
          </h3>
          <div className="project-description">
            <p>{description}</p>
          </div>
          <ul className="project-tech-list-featured">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="project-links-feature">
          <a href={githubLink} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a href={projectLink} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="project-image">
        <a href={projectLink} rel="noopener noreferrer" target="_blank">
          <div>
            <img decoding="async" src={imagePath} alt={title} className="main-image" />
            <noscript></noscript>
          </div>
        </a>
      </div>
    </li>
  );
};