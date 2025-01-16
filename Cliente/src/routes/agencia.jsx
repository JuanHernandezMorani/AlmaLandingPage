import React from "react";
import '../style/agencia.css';
import sep from '../imgs/others/separador-inicio.png';
import Divider from '@mui/material/Divider';
import creative from '../imgs/others/creative.png';
import prof from '../imgs/others/prof.png';
import versatil from '../imgs/others/versatil.png';

export default function Agencia(){
 return (
        <div className="agency-container">
            <h1 className="agency-title">Agencia</h1>
            <h2>¿Quiénes Somos?</h2>
            <div className="agency-middle">
                <div className="agency-inner">
                   <h3 className="agency-description">Somos una agencia con más de 20 años desarrollando 
                   soluciones comerciales y creativas para todo tipo de empresas 
                   y eventos en Argentina.</h3>
                   <div className="agency-text">
                        <p>Un equipo multidisciplinario compuesto por licenciados en marketing y 
                        administración, diseñadores gráficos e industriales, fotógrafos y filmmakers, 
                        entre otros.</p>
                        <p>Vivimos en una evolución constante que también nos hace versátiles y 
                        sumamente adaptables. La innovación es parte de nuestro core business.</p>
                        <p>No entendemos límites o problemas: Siempre existe una solución.
                        Respondemos ante todas las necesidades con velocidad y precisión</p>
                   </div>
                </div>
                <div className="agency-inner-imgs">
                    <img src={creative} alt="creative"/>
                    <p>SOMOS CREATIVOS</p>
                    <img src={versatil} alt="versatil" />
                    <p>SOMOS VERSÁTILES</p>
                    <img src={prof} alt="prof" />
                    <p>SOMOS PROFESIONALES</p>
                </div>
            </div>
            <Divider variant="middle"/>
            <div className="separator">
                <h1 className="agency-end">SOMOS PROFESIONALES AL SERVICIO
                DE PROFESIONALES</h1>
                <img src={sep} alt="agency-image"/>
            </div>
        </div>
    );
}