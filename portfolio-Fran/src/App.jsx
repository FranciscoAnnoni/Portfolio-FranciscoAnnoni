import { useState, useEffect } from 'react';
import Navbar from './components/NavBar.jsx'
import { FollowMouse } from './components/components.jsx';

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
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      <h1 className="title">Titulo</h1>
      {/* Agrega todo el contenido aquí */}
      <div id="about" className="section">
        <h2>About Section</h2>
      </div>
    </div>
    </>
  );
};