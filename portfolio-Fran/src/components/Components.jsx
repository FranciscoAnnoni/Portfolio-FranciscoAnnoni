import { useEffect, useState } from 'react'
import './Components.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaMouse, FaMousePointer } from 'react-icons/fa';
 

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
export const ButtonColor = ({text}) => {
    return (
        <button>
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
    label: "Upstatement",
    title: "Lead Engineer @ Upstatement",
    date: "May 2018 - Present",
    content: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients.",
      "Work alongside creative directors to lead the research and development.",
      "Collaborate with designers, project managers, and engineers to create production realities.",
      "Provide leadership within engineering departments.",
    ],
  },
  {
    id: "panel-1",
    label: "Apple",
    title: "UI Engineer Co-op @ Apple",
    date: "July - December 2017",
    content: [
      "Developed and styled interactive web applications for Apple Music.",
      "Built and shipped Apple Music Extension for Facebook Messenger.",
      "Architected Apple Music's embeddable web player widget.",
      "Contributed extensively to MusicKit JS.",
    ],
  },
  {
    id: "panel-2",
    label: "Scout Studio",
    title: "Developer @ Scout Studio",
    date: "Spring 2016 & 2017",
    content: [
      "Collaborated on projects for community organizations.",
      "Created technical solutions for stakeholder business requirements.",
    ],
  },
  {
    id: "panel-3",
    label: "Starry",
    title: "Software Engineer Co-op @ Starry",
    date: "July - December 2016",
    content: [
      "Engineered and improved major features of customer-facing apps.",
      "Proposed scalable solutions for cloud services issues.",
      "Collaborated with designers to create consistent experiences.",
    ],
  },
  {
    id: "panel-4",
    label: "MullenLowe",
    title: "Creative Technologist Co-op @ MullenLowe",
    date: "July - December 2015",
    content: [
      "Developed and shipped production code for client websites.",
      "Performed QA tests to ensure cross-browser compatibility.",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense.",
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

