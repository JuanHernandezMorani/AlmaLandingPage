import '../style/contacto.css';
import Form from '../components/form/Form';
import React, { useState } from "react";

export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // sendMail();

    setTimeout(() => {
      e.target.reset();
      setFormSubmitted(false);
    }, 10000);
  };

  function sendMail() {
    
  }

  return (
    <div className="contact-container">
      <h1 className="contact-h1">¿Estás listo para embarcarte con nosotros?</h1>
      <h2 className="contact-h2">
        Completá el formulario y en breve nos ponemos en contacto
      </h2>
      <div className="contact-inner">
        <div className="contact-info">
            <Form />
        </div>
        <div className="contact-form">
          {formSubmitted ? (
            <div className="mensaje-container">
            <h1 className="mensaje-titulo">¡Nos estaremos comunicando pronto!</h1>
            <p className="mensaje-parrafo">
              Recibimos tu consulta, y nos estaremos contactando en las próximas 48
              horas.
            </p>
            <p className="mensaje-parrafo">
              Recuerda que si no ves nuestra respuesta, revisa dentro de correo no
              deseado de tu mail.
            </p>
          </div>
          ) : (
            <form
              className="contact-form-inner"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="* NOMBRE"
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="* TELÉFONO"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="* EMAIL"
                className="form-input"
                required
              />
              <select className="form-input" required defaultValue="default">
                <option value="default" disabled>MOTIVO DE TU CONSULTA</option>
                <option value="consulta1">Consulta 1</option>
                <option value="consulta2">Consulta 2</option>
                <option value="consulta3">Consulta 3</option>
              </select>
              <textarea
                placeholder="MENSAJE"
                className="form-textarea"
              ></textarea>
              <button type="submit" className="contact-form-button">
                ENVIAR
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
