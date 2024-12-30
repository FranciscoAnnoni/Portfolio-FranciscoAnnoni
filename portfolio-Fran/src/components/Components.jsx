import { useEffect, useState } from 'react'
import './Components.css'

//----------------------------------------------------------------------------// Sigue el mouse
export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
     <div className="cursor"
     style={{
        pointerEvents: 'none',
        left: -23,
        top: -23,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      ></div>
    <div
      className="cursor-dot"
      style={{
        pointerEvents: 'none',
        left: -5,
        top: -5,
        transform: `translate(${position.x}px, ${position.y}px) scale(1)`
      }}
    ></div>

    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
  </>
  );
};


//----------------------------------------------------------------------------// Toggle de Cambio de Modo Darck a Light
export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check" className="toggle-label"></label>
    </div>
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