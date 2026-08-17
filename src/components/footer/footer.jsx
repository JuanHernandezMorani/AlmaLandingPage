import React from 'react';
import '../../style/Footer.css';
import linkedin from '../../imgs/ico/white-linkedin.png';
import facebook from '../../imgs/ico/white-fb.png';
import instagram from '../../imgs/ico/white-instagram.png';
import footlogo from '../../imgs/log/Alma_Footer.png';

export default function Footer() {
  return (
    <footer className="foot-container">
      <div className="foot-inner-container">
        <div className="footer-img-conteiner">
          <img src={footlogo} alt="ALMA BTL" />
        </div>
        <div className="footer-social-info">
          <div className="foot-icons-conteiner">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={linkedin} alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={facebook} alt="" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={instagram} alt="" /></a>
          </div>
          <a href="https://almabtl.com/" className="footer-site" target="_blank" rel="noopener noreferrer">www.almabtl.com</a>
        </div>
      </div>
      <div className="footer-credit">Desarrollo web © 2026 Juan Braian Hernández Morani. Todos los derechos reservados.</div>
    </footer>
  );
}
