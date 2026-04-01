import './Pages.css'

const Introduction = () => {
    return (
        
        <section className="introduction section" id="introduction" >
        <div>
            <div  className="pt-5">
            <p  className="Small-text">Hi, my name is</p>
            </div>
            <div className="pt-5">
            <h1 className="Introduction-title">Francisco Annoni.</h1>
            </div >
            <div className="pt-8">
            <h2 className="Introduction-subtitle">I’m a Full Stack Developer & AI Engineer.</h2>
            </div>
            <div className="pt-8">
            <p className="Introduction-p">I build web applications and AI-driven solutions, specializing in agentic workflows, LLM integration, and process automation. I focus on precision, adaptability, and collaboration to create systems that scale and solve real-world problems.</p>
            </div>
            <a href='#about'>
            <div className="arrow-container">
            <div className="arrow"></div>
            </div>
            </a>
        </div>
        </section>
        
    
    );
};

export default Introduction;

