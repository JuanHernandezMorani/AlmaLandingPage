import React from 'react';
import '../style/agencia.css';
import sep from '../imgs/others/separador.png';
import creative from '../imgs/others/creative.png';
import prof from '../imgs/others/prof.png';
import versatil from '../imgs/others/versatil.png';
import { Bolder } from '../components/helper/helper.jsx';

const VALUES = [
  [creative, 'SOMOS CREATIVOS'],
  [versatil, 'SOMOS VERSÁTILES'],
  [prof, 'SOMOS PROFESIONALES'],
];

export default function Agencia() {
  return (
    <div className="agency-container section-shell">
      <h1 className="section-title">AGENCIA</h1>
      <h2>¿QUIÉNES SOMOS?</h2>
      <div className="agency-middle">
        <div className="agency-inner">
          <h3 className="agency-description">
            Somos una agencia con más de 20 años desarrollando soluciones comerciales y creativas para todo tipo de empresas y eventos en Argentina.
          </h3>
          <div className="agency-text">
            <p>Un equipo multidisciplinario compuesto por licenciados en marketing y administración, diseñadores gráficos e industriales, fotógrafos y filmmakers, entre otros.</p>
            <p>Vivimos en una evolución constante que también nos hace versátiles y sumamente adaptables. La innovación es parte de nuestro core business.</p>
            <p>No entendemos límites o problemas: siempre existe una solución. Respondemos ante todas las necesidades con velocidad y precisión.</p>
          </div>
        </div>
        <ul className="agency-inner-imgs">
          {VALUES.map(([image, label]) => (
            <li key={label}>
              <img src={image} alt="" />
              <p>{label}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="section-divider" />
      <div className="separator">
        <h2 className="agency-end"><Bolder text={'SOMOS PROFESIONALES AL SERVICIO\nDE PROFESIONALES'} toBold={['SOMOS', 'PROFESIONALES']} /></h2>
        <img src={sep} alt="" />
      </div>
    </div>
  );
}
