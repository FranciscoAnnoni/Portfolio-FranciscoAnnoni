import './Pages.css';
import { ProjectCard } from '../components/Components';
import { FeaturedProjectCard } from '../components/Components';

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
        },
        {
          title: 'Project Title 2',
          description: 'Another project description.',
          technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
          githubLink: 'https://github.com/otro-repo',
          projectLink: 'https://otro-proyecto.com'
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
        <section className="Flex work" id="work">
        <div id="work">
          <div className="numbered-heading">
            <h2 className="title-section">Some Things I’ve Built</h2>
          </div>
          <ul className="projects-feautured">
          <FeaturedProjectCard
              title="Halcyon Theme"
              description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
              technologies={['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']}
              githubLink="https://github.com/bchiang7/halcyon-site"
              projectLink="https://halcyon-theme.netlify.com/"
              imagePath={'../images/bigWalrus.png'}
            />
                      <FeaturedProjectCard
              title="Halcyon Theme"
              description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
              technologies={['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']}
              githubLink="https://github.com/bchiang7/halcyon-site"
              projectLink="https://halcyon-theme.netlify.com/"
              imagePath={'../images/bigWalrus.png'}
            />
            
          </ul>
          <h2 className='title-2'>Other Noteworthy Projects</h2>
              <a className="inline-link archive-link" href="https://github.com/FranciscoAnnoni?tab=repositories" target="_blank" rel="noopener noreferrer">
                view my GitHub Repository
              </a>
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