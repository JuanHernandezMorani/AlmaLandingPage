import React from "react";
import '../style/servicios.css';
import link from '../imgs/uc.jpg';

export default function Servicios(){
return (
        <div className="services-container">
            <img src={link} alt="services-image"/>
            <p>Servicios</p>
            <img src={link} alt="services-image"/>
        </div>
    );
}