import { useState, useEffect } from 'react';


// Importamos las páginas
import Introduction from './pages/Introduction.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';

//importamos los componentes
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import { FollowMouse } from './components/Components.jsx';

//los estilos
import './App.css';


export const App = () => {
  const [isDark, setIsDark] = useState(true);

  // Cuando cambie isDark, aplicamos el tema correspondiente
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', theme); // Cambiamos el tema en el <html>
  }, [isDark]);

  return (
    <>
     <FollowMouse/>
    <div className="App">
    <Navbar isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    <Introduction/>
    <About/>
    <Experience/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
};