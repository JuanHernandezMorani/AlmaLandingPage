import '../style/contacto.css';
import Form from '../components/form/Form';
import React, { useState } from "react";
import { Bolder } from "../components/helper/helper.jsx";

export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    motivo: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    sendMail(formData);

    setTimeout(() => {
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        motivo: "",
        mensaje: "",
      });
      setFormSubmitted(false);
    }, 10000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function sendMail(formData) {
    fetch('https://almalandingpage-production.up.railway.app/send-email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Correo enviado con éxito:', data);
    })
    .catch((error) => {
      console.error('Error al enviar correo:', error);
    });
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
          {!formSubmitted ? (
            <div className="mensaje-container">
            <h1 className="mensaje-titulo">¡Nos estaremos comunicando pronto!</h1>
            <p className="mensaje-parrafo">
              <Bolder text={"Recibimos tu consulta, y nos estaremos contactando\nen las próximas 48 horas."} toBold={["48","horas"]}/>
            </p>
            <p className="mensaje-parrafo">
              <Bolder text={"Recuerda que en caso de no ver nuestra respuesta,\nbusca el mail dentro de correo no deseado de tu correo."} toBold={["no","ver","correo","deseado"]}/>
            </p>
          </div>
          ) : (
            <form
              className="contact-form-inner"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="nombre"
                placeholder="* NOMBRE"
                className="form-input"
                required
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="telefono"
                placeholder="* TELÉFONO"
                className="form-input"
                required
                value={formData.telefono}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="* EMAIL"
                className="form-input"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <select
                name="motivo"
                className="form-input"
                required
                value={formData.motivo}
                onChange={handleChange}
              >
                <option value="" disabled>MOTIVO DE TU CONSULTA</option>
                <option value="consulta1">Consulta 1</option>
                <option value="consulta2">Consulta 2</option>
                <option value="consulta3">Consulta 3</option>
              </select>
              <textarea
                name="mensaje"
                placeholder="MENSAJE"
                className="form-textarea"
                value={formData.mensaje}
                onChange={handleChange}
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