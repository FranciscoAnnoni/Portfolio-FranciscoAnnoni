import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ButtonColor } from './Components.jsx';
import { Toggle } from './Components.jsx';
import { IoMenu,IoClose } from "react-icons/io5";



const NavBar = ({ isChecked, handleChange }) => {
  const [activeLink, setActiveLink] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

useEffect(() => {
  const appElement = document.querySelector('.App'); // Selecciona la clase 'App'
  if (appElement) {
      if (menuOpen) {
          appElement.classList.add('app-blurred');
      } else {
          appElement.classList.remove('app-blurred');
      }
  }
}, [menuOpen]);

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
            <ButtonColor >
              Resume
             </ButtonColor>
          </a>
        </div>
      </div>

      <div className='navbar-mobile'>
      <a className="darkLight-icon-mobile">
            <Toggle isChecked={isChecked} handleChange={handleChange} />
      </a>

      <div className="navbar-menu-icon" onClick={toggleMenu}>

      <ButtonColor >
      {menuOpen ? <IoClose  size={30}/>: <IoMenu size={30} />}
      </ButtonColor>
      </div>
            {menuOpen && (
                <div className="navbar-menu">
                    <a href="#about" onClick={toggleMenu}>About</a>
                    <a href="#experience" onClick={toggleMenu}>Experience</a>
                    <a href="#work" onClick={toggleMenu}>Work</a>
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                </div>
            )}
     </div>       
    </nav>
  );
};

export default NavBar;
