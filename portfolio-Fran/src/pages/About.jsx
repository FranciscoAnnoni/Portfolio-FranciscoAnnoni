import { FaPython, FaGitAlt, FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandKotlin, TbFileTypeSql } from 'react-icons/tb';
import { motion } from 'framer-motion';

import './Pages.css';

const About = () => {
    // Configuración de animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring",
                stiffness: 100, 
                damping: 10 
            }
        }
    };

    // Animación especial para la imagen
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                delay: 0.3, 
                type: "spring",
                stiffness: 70, 
                damping: 10 
            }
        },
        hover: {
            scale: 1.05,
            transition: { 
                duration: 0.3
            }
        }
    };

    return (
        <section id="about" className="section about about__StyledAboutSection-sc-1ownso9-0 bNXWUU Flex" data-sr-id="0">
            <motion.div 
                className="about-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="numbered-heading"
                    variants={itemVariants}
                >
                    <motion.h2 
                        className="title-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Me
                    </motion.h2>
                </motion.div>
           
                <motion.div 
                    className="inner"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="about__StyledText-sc-1ownso9-1 kNIdQM"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="text-section"
                            variants={itemVariants}
                        >
                            <p style={{ paddingBottom: '15px' }}>Hello! My name is Francisco, and I’m a technology enthusiast and Systems Engineer. I started programming in 2018, which sparked my passion for creating impactful and innovative solutions. I began my degree in Systems Engineering at UTN in 2019, and I graduated in 2024, diving deeper into the world of tech along the way.</p>
                            <p style={{ paddingBottom: '15px' }}>Over the years, I’ve gained experience working as a Data Architect at DBlandIT, where I was responsible for designing data architectures and optimizing information flows. More recently, I’ve focused on full-stack development, working with technologies like React, Node.js, and Kotlin to build dynamic, user-focused web and mobile applications.</p>
                            <p style={{ paddingBottom: '20px' }}>I’m a fast learner, a creative problem solver, and I thrive on taking on new challenges that help me grow both professionally and personally.</p>
                            <p style={{ paddingBottom: '0px' }}>Here are some of the technologies I’ve been working with recently:</p>
                        </motion.div>
                        <motion.ul 
                            className="skills-list tech-item"
                            variants={containerVariants}
                        >
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><IoLogoJavascript color="#e1cd1d" size={30} /><span>JavaScript (ES6+)</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><FaGitAlt color="#ff4c07" size={30} /><span>Git</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer"><TbBrandKotlin color="purple" size={30} /><span>Kotlin</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaNodeJs color="#69ff2e" size={30} /><span>Node.js</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><FaPython color="orange" size={30} /><span>Python</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><TbFileTypeSql color="grey" size={30} /><span>SQL & NoSQL</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact color="cyan" size={30} /><span>React</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><FaDocker color="#0fa5ff" size={30} /><span>Docker</span></a>
                            </motion.li>
                            <motion.li 
                                variants={itemVariants}
                            >
                                <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><FaAws color="orange" size={30} /><span>AWS</span></a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div 
                        className="about__StyledPic-sc-1ownso9-2 lbrXps"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="wrapper"
                            variants={imageVariants}
                            whileHover="hover"
                        >
                            <div  className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                                <div style={{ maxWidth: '300px', display: 'block', borderRadius: '5%', overflow: 'hidden' }}>
                                    <img alt="Headshot" role="presentation" aria-hidden="true" src="/franAnnoni.png" style={{ maxWidth: '100%', display: 'block', position: 'static' }} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
