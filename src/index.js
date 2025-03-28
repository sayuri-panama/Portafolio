// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './Portafolio'; // Importa el componente Portfolio
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio /> {/* Renderiza el componente Portfolio aquí */}
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, pasa una función a log resultados
// o envíalos a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
