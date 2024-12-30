import { useState } from 'react';
import './App.css';

import { Toggle } from './components/Components.jsx';
import { FollowMouse } from './components/Components.jsx';

import Navbar from './components/NavBar.jsx'


export const App = () => {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Navbar  isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      <FollowMouse />
      <h1 className="title">Titulo</h1>
      </div>
    </>
  );
};

