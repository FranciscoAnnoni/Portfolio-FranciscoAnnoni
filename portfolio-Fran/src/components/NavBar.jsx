import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ButtonColor } from './Components.jsx';
import { Toggle } from './Components.jsx';

const Navbar = ({ handleChange, isChecked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash);  // Estado para el enlace activo

  // Efecto que actualiza el estado de activeLink cuando cambia el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href='/#introduction'
          className="logo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="title-container">
            <span className={`title-main ${isHovered ? "slide-out" : ""}`}>F.A.</span>
            <span className={`title-hover ${isHovered ? "slide-in" : ""}`}>Francisco Annoni</span>
          </div>
        </a>
      </div>

      <div className="navbar-right">
        <div>
          <a className="darkLight-icon">
            <Toggle isChecked={isChecked} handleChange={handleChange} />
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a 
              href="/#about" 
              className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/#experience" 
              className={`nav-link ${activeLink === "#experience" ? "active" : ""}`}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="/#work" 
              className={`nav-link ${activeLink === "#projects" ? "active" : ""}`}
            >
              Work
            </a>
          </li>
        </ul>

        <div className='buttonNav'>
        <a href="/CV-FranciscoAnnoni-Systems_Engineer.pdf" target="_blank" rel="noopener noreferrer">
            <ButtonColor text="Resume" />
        </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;



