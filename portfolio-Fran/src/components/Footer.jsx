import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
         <div className="social-icons">
            <p className='follow'>Follow me on:</p>
                
          <a href="https://github.com/FranciscoAnnoni" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/franciscoannoni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
      <div className="footer-container">
        <a href="https://github.com/FranciscoAnnoni/Portfolio-FranciscoAnnoni" rel="noopener noreferrer" target="_blank"><div className="francisco">Created &amp; developed by Francisco Annoni</div></a>
       </div>
      <p>&copy; {new Date().getFullYear()} Francisco Annoni. All rights reserved.</p>
    </footer>
  );
};

export default Footer;