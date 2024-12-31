import React from 'react';
import { useState } from 'react';

import './Navbar.css';
import { ButtonColor } from './Components.jsx';
import { Toggle } from './Components.jsx';
import { FollowMouse } from './Components.jsx';


const Navbar =  ({handleChange, isChecked}) => {
    
    return (
        
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">Francisco Annoni</a>
                </div>

                <div className="navbar-right">
                <div>
                    <a className="darkLight-icon">
                        <Toggle isChecked={isChecked} handleChange={handleChange}/>
                    </a>
                </div>

                    <ul className="nav-links">
                        <li>
                            <a href="/#about" className="nav-link">About</a>
                        </li>
                        <li>
                            <a href="/#experience" className="nav-link">Experience</a>
                        </li>
                        <li>
                            <a href="/#projects" className="nav-link">Projects</a>
                        </li>
                    </ul>
                    <div>
                        <ButtonColor text="Resume" href="/resume.pdf" />
                    </div>

                </div>
            </nav>

    );
};

export default Navbar;


