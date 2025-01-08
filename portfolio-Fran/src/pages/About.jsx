import { FaPython, FaGitAlt, FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandKotlin, TbFileTypeSql } from 'react-icons/tb';
import { GrHadoop } from "react-icons/gr";

import './Pages.css';

const About = () => {
    return (
        <section id="about" className="section about__StyledAboutSection-sc-1ownso9-0 bNXWUU Flex" data-sr-id="0" style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'all, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s' }}>
            <div className='about-content'>
                <div className="numbered-heading">
                <h2 className="title-section">About Me</h2>
                </div>
           
            <div className="inner">
                <div className="about__StyledText-sc-1ownso9-1 kNIdQM">
                    <div  className="text-section">
                    <p style={{ paddingBottom: '15px' }}>Hello! My name is Francisco, and I’m a technology enthusiast and Systems Engineer. I started programming in 2018, which sparked my passion for creating impactful and innovative solutions. I began my degree in Systems Engineering at UTN in 2019, and I graduated in 2024, diving deeper into the world of tech along the way.</p>
                    <p style={{ paddingBottom: '15px' }}>Over the years, I’ve gained experience working as a Data Architect at DBlandIT, where I was responsible for designing data architectures and optimizing information flows. More recently, I’ve focused on full-stack development, working with technologies like React, Node.js, and Kotlin to build dynamic, user-focused web and mobile applications.</p>
                    <p style={{ paddingBottom: '20px' }}>I’m a fast learner, a creative problem solver, and I thrive on taking on new challenges that help me grow both professionally and personally.</p>
                    <p style={{ paddingBottom: '0px' }}>Here are some of the technologies I’ve been working with recently:</p>
                    </div>
                   <ul className="skills-list tech-item">
                            <li><a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><IoLogoJavascript color="#e1cd1d" size={30} /><span>JavaScript (ES6+)</span></a></li>
                            <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><FaGitAlt color="#ff4c07" size={30} /><span>Git</span></a></li>
                            <li><a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer"><TbBrandKotlin color="purple" size={30} /><span>Kotlin</span></a></li>
                            <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaNodeJs color="#69ff2e" size={30} /><span>Node.js</span></a></li>
                            <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><FaPython color="orange" size={30} /><span>Python</span></a></li>
                            <li><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><TbFileTypeSql color="grey" size={30} /><span>SQL & NoSQL</span></a></li>
                            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact color="cyan" size={30} /><span>React</span></a></li>
                            <li><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><FaDocker color="#0fa5ff" size={30} /><span>Docker</span></a></li>
                            <li><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><FaAws color="orange" size={30} /><span>AWS</span></a> </li>
                            {/*<li><a href="https://hadoop.apache.org/" target="_blank" rel="noopener noreferrer"><GrHadoop color="#76d7ea" size={30} /></a><span>Hadoop</span></li>*/}
                        </ul>
                </div>
                <div className="about__StyledPic-sc-1ownso9-2 lbrXps">
                    <div className="wrapper">
                        <div  className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                            <div style={{ maxWidth: '300px', display: 'block', borderRadius: '5%', overflow: 'hidden' }}>
                                <img alt="Headshot" role="presentation" aria-hidden="true" src="/franAnnoni.png" style={{ maxWidth: '100%', display: 'block', position: 'static' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default About;
