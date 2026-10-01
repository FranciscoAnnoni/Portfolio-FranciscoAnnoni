import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { ButtonColor } from './Components.jsx';
import { Toggle } from './Components.jsx';
import { IoMenu, IoClose, IoSunny, IoMoon } from "react-icons/io5";


const NavBar = ({ isChecked, handleChange }) => {
  const [activeLink, setActiveLink] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("touchmove", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const appElement = document.querySelector('.App');
    if (appElement) {
      if (menuOpen) {
        appElement.classList.add('app-blurred');
      } else {
        appElement.classList.remove('app-blurred');
      }
    }
  }, [menuOpen]);

  useEffect(() => {
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
          <div className="title-small">
            <span className='title-main'>F.A.</span>
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
          <a href="/CV-FranciscoAnnoni-AI_Engineer.pdf" target="_blank" rel="noopener noreferrer">
            <ButtonColor>
              Resume
            </ButtonColor>
          </a>
        </div>
      </div>

      <div className='navbar-mobile' ref={menuRef}>
        <button
          className="darkLight-icon-mobile theme-icon-btn"
          onClick={handleChange}
          aria-label="Toggle theme"
        >
          {isChecked ? <IoSunny size={22} /> : <IoMoon size={20} />}
        </button>

        <div className="navbar-menu-icon" onClick={toggleMenu}>
          <ButtonColor>
            {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </ButtonColor>
        </div>

        <div className={`navbar-menu ${menuOpen ? "open" : "close"}`}>
          <div className='content-menu'>
            <ol>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#work" onClick={toggleMenu}>Work</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ol>

            <a href="/CV-FranciscoAnnoni-AI_Engineer.pdf" target="_blank" rel="noopener noreferrer">
              <div className='button-menu-phone'>
                <ButtonColor>
                  Resume
                </ButtonColor>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
