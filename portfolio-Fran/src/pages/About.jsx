import { FaPython, FaGitAlt, FaReact, FaNodeJs, FaGitSquare, FaAws, FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandKotlin, TbFileTypeSql } from 'react-icons/tb';
import { GrHadoop } from "react-icons/gr";

const About = () => {
    return (
        <section id="about" className="about__StyledAboutSection-sc-1ownso9-0 bNXWUU Flex" data-sr-id="0" style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'all, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s' }}>
            <div className='about-content'>
                <div className="numbered-heading">
                <h2 className="title-section">About Me</h2>
                </div>
           
            <div className="inner">
                <div className="about__StyledText-sc-1ownso9-1 kNIdQM">
                    <div  className="text-section">
                        <p>Hello! My name is Francisco, and I’m a technology enthusiast and Systems Engineer. I started programming in 2018, which sparked my passion for creating impactful and innovative solutions. I began my degree in Systems Engineering at UTN in 2019, and I graduated in 2024, diving deeper into the world of tech along the way.</p>
                        <p>Over the years, I’ve gained experience working as a Data Architect at DBlandIT, where I was responsible for designing data architectures and optimizing information flows. More recently, I’ve focused on full-stack development, working with technologies like React, Node.js, and Kotlin to build dynamic, user-focused web and mobile applications.</p>
                        <p>I’m a fast learner, a creative problem solver, and I thrive on taking on new challenges that help me grow both professionally and personally.</p>
                        <p>Here are some of the technologies I’ve been working with recently:</p>
                    </div>
                    <ul className="skills-list tech-item">
                        <li ><FaPython color="orange" size={30} /><span>Python</span></li>
                        <li><IoLogoJavascript color="#e1cd1d" size={30} /><span>JavaScript (ES6+)</span></li>
                        <li><FaReact color="cyan" size={30} /><span>React</span></li>
                        <li><FaNodeJs color="#69ff2e" size={30} /><span>Node.js</span></li>
                        <li><TbBrandKotlin color="purple" size={30} /><span>Kotlin</span></li>
                        <li><FaGitAlt color="#ff4c07" size={30} /><span>Git</span></li>
                        
                        <li><TbFileTypeSql color="grey" size={30} /><span>SQL & NoSQL</span></li>
                        <li><FaDocker color="#0fa5ff" size={30} /><span>Docker</span></li>
                        <li><GrHadoop  color="#76d7ea" size={30} /><span>Hadoop</span></li>
                        <li><FaAws color="orange" size={30} /><span>AWS</span></li>
                    </ul>
                </div>
                <div className="about__StyledPic-sc-1ownso9-2 lbrXps">
                    <div className="wrapper">
                        <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                            <div style={{ maxWidth: '500px', display: 'block' }}>
                                <img alt="Headshot" role="presentation" aria-hidden="true" src="path/to/your/image.jpg" style={{ maxWidth: '100%', display: 'block', position: 'static' }} />
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
