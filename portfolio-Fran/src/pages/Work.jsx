import './Pages.css';
import { ProjectCard } from '../components/Components';

const Work = () => {
    const projects = [
        {
            title: 'Project Title 1',
            description: 'Project description goes here. It should be brief and to the point.',
            technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
            githubLink: 'https://github.com/tu-repo',
            projectLink: 'https://tu-proyecto.com'
        },
        {
            title: 'Project Title 2',
            description: 'Another project description.',
            technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
            githubLink: 'https://github.com/otro-repo',
            projectLink: 'https://otro-proyecto.com'
        }
        // Añade más proyectos según sea necesario
    ];

    return (
        <section className="Flex" id="work">
            <div id="work">
                <div className="numbered-heading">
                    <h2 className="title-section">Some Things I’ve Built</h2>
                </div>
                <ul className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            githubLink={project.githubLink}
                            projectLink={project.projectLink}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Work;