import { useState, useEffect } from 'react';
import { FollowMouse } from './components/Components.jsx';

import Introduction from './pages/Introduction.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx';

import Navbar from './components/NavBar.jsx'



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
    <Navbar isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    <div className="App">
    <Introduction/>
    <About/>
    <Experience/>
    </div>
    </>
  );
};