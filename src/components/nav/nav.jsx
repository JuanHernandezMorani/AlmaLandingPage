import React, { useContext, useEffect, useState } from 'react';
import { ImageContext } from '../../context/ImageContext.jsx';
import '../../style/nav.css';
import logoDark from '../../imgs/log/ALMA_en_negro.png';
import logoLight from '../../imgs/log/ALMA_en_blanco.png';
import linkedinDark from '../../imgs/ico/linkedin.png';
import facebookDark from '../../imgs/ico/facebook.png';
import instagramDark from '../../imgs/ico/instagram.png';
import linkedinLight from '../../imgs/ico/white-linkedin.png';
import facebookLight from '../../imgs/ico/white-fb.png';
import instagramLight from '../../imgs/ico/white-instagram.png';

const NAV_ITEMS = [
  ['agency', 'AGENCIA'],
  ['services', 'SERVICIOS'],
  ['portfolios', 'PORTFOLIO'],
  ['clients', 'CLIENTES'],
  ['contact', 'CONTACTO'],
];

export default function Navbar() {
  const { imageID } = useContext(ImageContext);
  const [open, setOpen] = useState(false);
  const lightOnHero = imageID > 1;
  const logo = lightOnHero ? logoLight : logoDark;
  const icons = lightOnHero
    ? [linkedinLight, facebookLight, instagramLight]
    : [linkedinDark, facebookDark, instagramDark];

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav-conteiner ${lightOnHero ? 'nav-on-dark' : 'nav-on-light'} ${open ? 'is-open' : ''}`}>
      <div className="nav-container-inner">
        <a className="navbar-brand" href="#top" aria-label="ALMA BTL — inicio" onClick={closeMenu}>
          <img src={logo} alt="ALMA BTL" />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-navigation" className="nav-menu" aria-label="Navegación principal">
          <ul className="nav-ul">
            {NAV_ITEMS.map(([id, label]) => (
              <li key={id} className="nav-item">
                <a className="nav-link" href={`#${id}`} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="social-conteiner" aria-label="Redes sociales de ALMA">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={icons[0]} alt="" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={icons[1]} alt="" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={icons[2]} alt="" className="social-icon" />
            </a>
            <span className="trade-mark">@Almabtl</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
