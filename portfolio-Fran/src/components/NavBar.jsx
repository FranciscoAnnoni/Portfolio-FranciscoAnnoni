import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ButtonColor } from './Components.jsx';
import { Toggle } from './Components.jsx';


const NavBar = ({ isChecked, handleChange }) => {
  const [activeLink, setActiveLink] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Desplazarse a la sección correcta al cargar la página
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(hash);
      }
    }
  }, []);

  const handleNavClick = (hash) => {
    setActiveLink(hash);
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              onClick={() => handleNavClick('#about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#experience"
              className={`nav-link ${activeLink === "#experience" ? "active" : ""}`}
              onClick={() => handleNavClick('#experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/#work"
              className={`nav-link ${activeLink === "#work" ? "active" : ""}`}
              onClick={() => handleNavClick('#work')}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className={`nav-link ${activeLink === "#contact" ? "active" : ""}`}
              onClick={() => handleNavClick('#contact')}
            >
              Contact
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

export default NavBar;
