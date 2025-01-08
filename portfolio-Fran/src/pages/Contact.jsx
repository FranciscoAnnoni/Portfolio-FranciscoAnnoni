import { ButtonColor } from '../components/Components';
import './Pages.css'

 
// Usarlos en tu componente

const Contact = () => {
    return (
        <section className="Flex contact section" id="contact">
        <div id="contact">
            <div className="numbered-heading contact-heading">
                <h2 className="title-section">
                Contact
                </h2>
            </div>
            <div className="contact-content">
                <p>
I'm always on the lookout for new opportunities! Feel free to reach out and let me know about any exciting possibilities, or if you'd like to collaborate on something. I’ll do my best to get back to you!
                </p>
            </div>
            
            <div className='button-contact'>
          <a className="mail" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=franciscoannoni@gmail.com&amp;su=Consulta%20Web" target="_blank" rel="noopener noreferrer">
          <ButtonColor text="Contact Me!" className="button-contact-personal"  />
          </a>
        </div>

        </div>
        </section>
        
    );
};

export default Contact;