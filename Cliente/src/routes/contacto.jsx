import React from "react";
import '../style/contacto.css';
import link from '../imgs/uc.jpg';

export default function Contacto(){
return (
        <div className="contact-container">
            <img src={link} alt="contact-image"/>
            <p>Contacto</p>
            <img src={link} alt="contact-image"/>
        </div>
    );
}