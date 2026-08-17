import React, { useState } from 'react';
import '../style/contacto.css';
import Form from '../components/form/Form.jsx';

const INITIAL_FORM = { nombre: '', telefono: '', email: '', motivo: '', mensaje: '', website: '' };
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = String(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();

export default function Contacto() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;

    // Honeypot: bots often fill hidden fields. Silently accept without sending.
    if (formData.website.trim()) {
      setStatus('success');
      setFeedback('Recibimos tu consulta. Nos estaremos comunicando dentro de las próximas 48 horas.');
      setFormData(INITIAL_FORM);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setFeedback('El formulario todavía no está configurado para envíos online.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', `Nueva consulta web ALMA: ${formData.motivo}`);
    payload.append('from_name', 'ALMA BTL Web');
    payload.append('name', formData.nombre);
    payload.append('email', formData.email);
    payload.append('Teléfono', formData.telefono);
    payload.append('Motivo', formData.motivo);
    payload.append('message', formData.mensaje);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || 'No se pudo enviar el mensaje.');
      }

      setStatus('success');
      setFeedback('Recibimos tu consulta. Nos estaremos comunicando dentro de las próximas 48 horas.');
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'No pudimos enviar la consulta en este momento.');
    }
  };

  return (
    <div className="contact-container section-shell">
      <h1 className="section-title">CONTACTO</h1>
      <h2 className="contact-h1">¿Estás listo para embarcarte con nosotros?</h2>
      <p className="contact-h2">Completá el formulario y en breve nos ponemos en contacto.</p>

      <div className="contact-inner">
        <div className="contact-info"><Form /></div>
        <div className="contact-form">
          <form className="contact-form-inner" onSubmit={handleSubmit}>
            <label>
              <span className="sr-only">Nombre</span>
              <input type="text" name="nombre" placeholder="* NOMBRE" required autoComplete="name" maxLength="100" value={formData.nombre} onChange={handleChange} />
            </label>
            <label>
              <span className="sr-only">Teléfono</span>
              <input type="tel" name="telefono" placeholder="* TELÉFONO" required autoComplete="tel" maxLength="60" value={formData.telefono} onChange={handleChange} />
            </label>
            <label>
              <span className="sr-only">Email</span>
              <input type="email" name="email" placeholder="* EMAIL" required autoComplete="email" maxLength="180" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              <span className="sr-only">Motivo</span>
              <select name="motivo" required value={formData.motivo} onChange={handleChange}>
                <option value="" disabled>MOTIVO DE TU CONSULTA</option>
                <option value="BTL & Eventos">BTL & Eventos</option>
                <option value="Trade Marketing">Trade Marketing</option>
                <option value="Arquitectura y Diseño">Arquitectura y Diseño</option>
                <option value="Producción y Logística">Producción y Logística</option>
                <option value="Marketing Digital">Marketing Digital</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Otro">Otro</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Mensaje</span>
              <textarea name="mensaje" placeholder="* MENSAJE" required rows="6" maxLength="5000" value={formData.mensaje} onChange={handleChange} />
            </label>
            <label className="contact-honeypot" aria-hidden="true">
              Website
              <input type="text" name="website" tabIndex="-1" autoComplete="off" value={formData.website} onChange={handleChange} />
            </label>
            <button type="submit" className="contact-form-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'ENVIANDO…' : 'ENVIAR'}
            </button>
            <div className={`contact-feedback ${status}`} role="status" aria-live="polite">
              {feedback}
              {status === 'error' && <> <a href="mailto:info@almabtl.com">Escribir por email</a>.</>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
