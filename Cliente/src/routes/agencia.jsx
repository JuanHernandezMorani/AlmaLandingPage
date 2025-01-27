import React from "react";
import '../style/agencia.css';
import sep from '../imgs/others/separador.png';
import Divider from '@mui/material/Divider';
import creative from '../imgs/others/creative.png';
import prof from '../imgs/others/prof.png';
import versatil from '../imgs/others/versatil.png';
import { Bolder } from "../components/helper/helper";

export default function Agencia(){
 return (
        <div className="agency-container">
            <h1 className="agency-title">AGENCIA</h1>
            <h2>¿QUIENES SOMOS?</h2>
            <div className="agency-middle">
                <div className="agency-inner">
                   <h3 className="agency-description">{`Somos una agencia con más de 20 años desarrollando soluciones\ncomerciales y creativas para todo tipo de empresas\ny eventos en Argentina.`}</h3>
                   <div className="agency-text">
                        <p>{"Un equipo multidisciplinario compuesto por licenciados en marketing y\nadministración, diseñadores gráficos e industriales, fotógrafos y filmmakers,\nentre otros."}</p>

                        <p>{"Vivimos en una evolución constante que también nos hace versátiles y\nsumamente adaptables. La innovación es parte de nuestro core business."}</p>

                        <p>{"No entendemos límites o problemas: Siempre existe una solución.\nRespondemos ante todas las necesidades con velocidad y precisión."}</p>
                   </div>
                </div>
                <ul className="agency-inner-imgs">
                    <li>
                    <img src={creative} alt="creative" className="img-fluid"/>
                    <p>SOMOS CREATIVOS</p>
                    </li>
                    <li>
                    <img src={versatil} alt="versatil" className="img-fluid"/>
                    <p>SOMOS VERSÁTILES</p>
                    </li>
                    <li>
                    <img src={prof} alt="prof" className="img-fluid"/>
                    <p>SOMOS PROFESIONALES</p>
                    </li>
                    
                    
                    
                </ul>
            </div>
            <Divider variant="middle" sx={{ background: 'darkgrey', height: '0.3vh' }} />
            <div className="separator">
                <h1 className="agency-end"><Bolder text={"SOMOS PROFESIONALES AL SERVICIO\nDE PROFESIONALES"} toBold={["SOMOS","PROFESIONALES"]} /></h1>
                <img src={sep} alt="agency-image" className="img-fluid"/>
            </div>
        </div>
    );
}