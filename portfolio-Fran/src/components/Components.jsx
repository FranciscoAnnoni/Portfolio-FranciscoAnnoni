import { useEffect, useState } from 'react'
import './Components.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { IoSunny } from "react-icons/io5";
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
      {isChecked ? <IoSunny className="iconSun" /> : <FaMoon className="iconMoon" />}
    </button>
  );
};

//----------------------------------------------------------------------------// Boton vase de la App

// eslint-disable-next-line react/prop-types
export const ButtonColor = ({ children, className  }) => {
  return (
    <button className={className}>
      <span aria-hidden="true">{children}</span>
      <span></span>
      <span>{children}</span>
    </button>
  );
};

//----------------------------------------------------------------------------// Scroll Section
import ExperienceData from '../data/ExperienceData.json';
const tabs = ExperienceData;

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

//----------------------------------------------------------------------------// Proyectos
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
        </div>
          <a href={projectLink} rel="noopener noreferrer" target="_blank" className="project-image-phone">
      <div className="project-image-phone-div">
          <div>
            <img decoding="async" src={imagePath} alt={title} className="main-image" />
          </div>
      </div>
      </a>

          <ul className="project-tech-list-featured">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        
        <div className="project-links-feature">
          <a href={githubLink} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a href={projectLink} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <a href={projectLink} rel="noopener noreferrer" target="_blank" className="project-image-link">
      <div className="project-image">
          <div>
            <img decoding="async" src={imagePath} alt={title} className="main-image" />
            
          </div>
        
      </div>
      </a>
    </li>
  );
};