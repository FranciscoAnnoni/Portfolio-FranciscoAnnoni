import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App.jsx';


// Crea el contenedor raíz y renderiza la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);