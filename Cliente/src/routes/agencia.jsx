import React from "react";
import '../style/agencia.css';
import link from '../imgs/uc.jpg';

export default function Agencia(){
 return (
        <div className="agency-container">
            <img src={link} alt="agency-image"/>
            <p>Agencia</p>
            <img src={link} alt="agency-image"/>
        </div>
    );
}