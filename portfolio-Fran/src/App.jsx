import { useEffect, useState } from 'react'
import './App.css'
import { Toggle } from './components/Toggle'
import { FollowMouse } from './components/FollowMouse';
import useLocalStorage from 'use-local-storage';


export const App = () => {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      <FollowMouse />
      <h1 className="title">Titulo</h1>
      </div>
    </>
  );
};

