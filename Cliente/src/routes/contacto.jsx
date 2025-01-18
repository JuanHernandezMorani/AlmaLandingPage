import React from "react";
import '../style/contacto.css';
import Form from '../components/form/Form';
import ContactForm from '../components/form/contactForm.jsx';

export default function Contacto(){
return (
        <div className="contact-container">
            <h1 className='contact-h1'>¿Estás listo para embarcarte con nosotros?</h1>
            <h2 className='contact-h2'>Completá el formulario y en breve nos ponemos en contacto</h2>
            <div className="contact-inner">
                <div className="contact-info">
                    <Form />
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}