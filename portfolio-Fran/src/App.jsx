import { useEffect, useState } from 'react'
import './App.css'
import { Toggle } from './components/Toggle.jsx'
import { FollowMouse } from './components/FollowMouse.jsx';
import { ButtonColor } from './components/ButtonColor.jsx';

export const App = () => {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <ButtonColor text={"PEPE"}/>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      <FollowMouse />
      <h1 className="title">Titulo</h1>
      </div>
    </>
  );
};

