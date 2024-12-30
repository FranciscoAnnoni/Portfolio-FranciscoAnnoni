import { useEffect, useState } from 'react'
import './Components.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaMouse, FaMousePointer } from 'react-icons/fa';


//----------------------------------------------------------------------------// Sigue el mouse
export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Efecto para seguir el mouse
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  // Efecto para cambiar el estilo del cuerpo
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <>
      {/* Cursor personalizable */}
      <div
        className="cursor"
        style={{
          pointerEvents: 'none',
          left: -23,
          top: -23,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      {/* Punto del cursor */}
      <div
        className="cursor-dot"
        style={{
          pointerEvents: 'none',
          left: -5,
          top: -5,
          transform: `translate(${position.x}px, ${position.y}px) scale(1)`,
        }}
      ></div>
      
      {/* Botón de toggle con ícono 
      <button className="toggle-button" onClick={() => setEnabled(!enabled)}>
        {enabled ? <FaMousePointer /> : <FaMouse />}
      </button>
      */}
    </>
  );
};

//----------------------------------------------------------------------------// Toggle de Cambio de Modo Darck a Light


export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <button className="minimal-toggle-button" onClick={handleChange}>
      {isChecked ? <FaSun className="iconSun" /> : <FaMoon className="iconMoon" />}
    </button>
  );
};

//----------------------------------------------------------------------------// Boton vase de la App
export const ButtonColor = ({text}) => {
    return (
        <button>
        <span aria-hidden="true">{text}</span>
        <span></span>
        <span>{text}</span>
       </button>
        
    );
};

//----------------------------------------------------------------------------// Boton vase de la App
export const ButtonNav = ({ text, href, onClick }) => {
  return (
    <div class="button-nav-wrapper">
    <a class="button-nav" href="/your-link" target="_blank" rel="noopener noreferrer">{text}</a>
    </div>
  );
};