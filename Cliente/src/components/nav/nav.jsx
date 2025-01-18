import {React, useState, useContext} from 'react';
import { ImageContext } from '../../context/ImageContext';
import '../../style/nav.css';
import logo from '../../imgs/log/ALMA_en_negro.png';
import logo2 from '../../imgs/log/ALMA_en_blanco.png';
import linkedin from '../../imgs/ico/linkedin.png';
import facebook from '../../imgs/ico/facebook.png';
import instagram from '../../imgs/ico/instagram.png';
import linkedinW from '../../imgs/ico/white-linkedin.png';
import facebookW from '../../imgs/ico/white-fb.png';
import instagramW from '../../imgs/ico/white-instagram.png';
import { Divider } from '@mui/material';

export default function Navbar() {
    const { imageID } = useContext(ImageContext);
    const [menuOpen, setMenuOpen] = useState(false);

    function check() {
        return imageID > 1;
    }

    function selectA() {
        return check() ? "nav-link-white" : "nav-link";
    }

    function selectB() {
        return check() ? logo2 : logo;
    }

    function selectC() {
        return check() ? "navbar-text-white" : "navbar-text";
    }

    function selectD() {
        return check() ? linkedinW : linkedin;
    }

    function selectE() {
        return check() ? facebookW : facebook;
    }

    function selectF() {
        return check() ? instagramW : instagram;
    }

    function selectDivider() {
        return check() ? (
            <Divider
                variant="middle"
                sx={{ border: 1, borderColor: "white", width: "99%", marginTop: 1 }}
            />
        ) : (
            <Divider
                variant="middle"
                sx={{ border: 1, borderColor: "darkgrey", width: "99%", marginTop: 1 }}
            />
        );
    }

    return (
        <div className="container">
            <div className="inner-container">
                <a className="navbar-brand" href="/">
                    <img src={selectB()} alt="Almabtl_Icon" />
                </a>
                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                    <li className="nav-item">
                        <a className={selectA()} href="#agency">
                            Agencia
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={selectA()} href="#services">
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={selectA()} href="#portfolios">
                            Portfolios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={selectA()} href="#clients">
                            Clientes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={selectA()} href="#contact">
                            Contacto
                        </a>
                    </li>
                </ul>
                <div className="social">
                    <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={selectD()} className="bi bi-linkedin" alt="LinkedIn" />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={selectE()} className="bi bi-facebook" alt="Facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={selectF()} className="bi bi-instagram" alt="Instagram" />
                    </a>
                    <p className={selectC()}>@Almabtl</p>
                </div>
            </div>
            {selectDivider()}
        </div>
    );
}