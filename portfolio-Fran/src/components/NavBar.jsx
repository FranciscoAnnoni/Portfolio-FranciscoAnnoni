import React from 'react';

import './Navbar.css';


const Navbar = () => {
    return (
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">Francisco Annoni</a>
                </div>

                <div className="navbar-right">
                    <ul className="nav-links">
                        <li>
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li>
                            <a href="/experience" className="nav-link">Experience</a>
                        </li>
                        <li>
                            <a href="/projects" className="nav-link">Projects</a>
                        </li>
                    </ul>
                    <a className="darkLight-icon">
                        <i className="fas fa-sun"></i>
                    </a>
                </div>
            </nav>

    );
};

export default Navbar;


