import React from 'react';
import '../../style/form.css';
import ubicacion from '../../imgs/others/ubicacion.png';

export default function Form() {
  return (
    <div className="form-container">
      <div className="form-info">
        <h3 className="form-h3">DATOS OFICINAS</h3>
        <div className="form-location">
          <img src={ubicacion} alt="" />
          <ul>
            <li>Julio A. Roca 2420 (B7602GUX)</li>
            <li>Mar del Plata, Buenos Aires</li>
          </ul>
        </div>
        <div className="form-location">
          <img src={ubicacion} alt="" />
          <ul>
            <li>R. Escalada de San Martín 2749</li>
            <li>OF. 275 (C1406HCC)</li>
            <li>CABA, Buenos Aires, Argentina</li>
          </ul>
        </div>
        <h3 className="form-h3">TELÉFONOS</h3>
        <ul className="info-list-tel">
          <li>M: +54 9223 304 5424</li>
          <li>M: +54 911 2468 2389</li>
        </ul>
        <h3 className="form-h3">MAIL</h3>
        <a className="form-mail" href="mailto:info@almabtl.com">info@almabtl.com</a>
      </div>
    </div>
  );
}
