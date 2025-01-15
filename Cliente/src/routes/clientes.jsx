import React from "react";
import '../style/clientes.css';
import link from '../imgs/uc.jpg';

export default function Clientes(){
 return (
        <div className="clients-container">
            <img src={link} alt="clients-image"/>
            <p>Clientes</p>
            <img src={link} alt="clients-image"/>
        </div>
    );
}