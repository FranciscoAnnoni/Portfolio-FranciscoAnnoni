import React from 'react';
import './Introduction.css'


const About = () => {
    return (
        
        <section className="Introduction" >
        <div id="about">
            <div  className="pt-5">
            <p  className="Small-text">Hi, my name is</p>
            </div>
            <div className="pt-5">
            <h1 className="Introduction-title">Francisco Annoni.</h1>
            </div >
            <div className="pt-8">
            <h2 className="Introduction-subtitle">I’m a Full Stack Engineer.</h2>
            </div>
            <div className="pt-8">
            <p className="Introduction-p">I design, develop, and execute innovative projects that solve real-world problems. I focus on adaptability, precision, and collaboration to create solutions that meet the unique needs of each client.</p>
            </div>
            
            <div className="arrow-container">
            <div className="arrow"> <a href='#about'></a></div>
            </div>
        </div>
        </section>
        
    
    );
};

export default About;