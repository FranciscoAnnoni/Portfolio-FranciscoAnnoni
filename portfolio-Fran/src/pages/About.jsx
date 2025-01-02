import React from 'react';
import './About.css'
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitSquare,  FaDocker , FaAws } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandKotlin } from "react-icons/tb";

// Usarlos en tu componente

const About = () => {
    return (
        
        <section className="Flex" id="about">
        <div>
            <div className="numbered-heading">
                <h2 className="title-section">
                    About Me
                </h2>
            </div>
            <div className='text-section'>
                <p>Hello! My name is Francisco, and I’m a technology enthusiast and Systems Engineer. I started programming in 2018, which sparked my passion for creating impactful and innovative solutions. I began my degree in Systems Engineering at UTN in 2019, and I graduated in 2024, diving deeper into the world of tech along the way.</p>
                <p> Over the years, I’ve gained experience working as a Data Architect at DBlandIT, where I was responsible for designing data architectures and optimizing information flows. More recently, I’ve focused on full-stack development, working with technologies like React, Node.js, and Kotlin to build dynamic, user-focused web and mobile applications.</p>
                <p>I’m a fast learner, a creative problem solver, and I thrive on taking on new challenges that help me grow both professionally and personally.</p>
                <p>Here are some of the technologies I’ve been working with recently:</p>
            </div>
            <div>
            <FaPython color="orange" size={30} />
            <FaJava color="green" size={30} />
            <FaReact color="lightblue" size={30} />
            <FaNodeJs color="yellow" size={30}/>
            <FaGitSquare  color="green" size={30} />
            <IoLogoJavascript color="yellow" size={30}/>
            <TbBrandKotlin color="yellow" size={28} />
            <FaAws  color="yellow" size={30} />
            <FaDocker  color="yellow" size={30} />
            <p>HOLA</p>
            </div>
        </div>
        </section>
        
    );
};

export default About;