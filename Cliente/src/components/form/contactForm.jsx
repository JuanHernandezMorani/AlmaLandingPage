import React from 'react';
import '../../style/ContactForm.css';

export default function ContactForm () {
    return (
        <form className="contact-form">
          <input type="text" placeholder="* NOMBRE" className="form-input" required />
          <input type="tel" placeholder="* TELÉFONO" className="form-input" required />
          <input type="email" placeholder="* EMAIL" className="form-input" required />
          <select className="form-input" required>
            <option value="" disabled selected>
              MOTIVO DE TU CONSULTA
            </option>
            <option value="consulta1">Consulta 1</option>
            <option value="consulta2">Consulta 2</option>
            <option value="consulta3">Consulta 3</option>
          </select>
          <textarea placeholder="MENSAJE" className="form-textarea"></textarea>
          <button className='contact-form-button'>ENVIAR</button>
        </form>
      );
    };