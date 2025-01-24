import {React, useContext} from 'react';
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

export default function Navbar() {
    const { imageID } = useContext(ImageContext);

    function check() {
        return imageID > 1;
    }

    function selectA() {
        return check() ? logo2 : logo;
    }

    function selectB() {
        return check() ? linkedinW : linkedin;
    }

    function selectD() {
        return check() ? facebookW : facebook;
    }

    function selectE() {
        return check() ? instagramW : instagram;
    }
    function selectF() {
        return check() ? "trade-mark-w" : "trade-mark";
    }
    function selectG() {
        return check() ? "nav-item-w" : "nav-item";
    }

    return (
        <div className="nav-conteiner">
            <div className="nav-container-inner">
                <a className="navbar-brand" href="/">
                    <img src={selectA()} alt="Almabtl_Icon" className="img-fluid" />
                </a>
                <ul className="nav-ul">
                    <li className={selectG()}>
                        <a className="nav-link" href="#agency">AGENCIA&#9662;</a>
                    </li>
                    <li className={selectG()}>
                        <a className="nav-link" href="#services">SERVICIOS&#9662;</a>
                    </li>
                    <li className={selectG()}>
                        <a className="nav-link" href="#portfolios">PORTFOLIOS&#9662;</a>
                    </li>
                    <li className={selectG()}>
                        <a className="nav-link" href="#clients">CLIENTES&#9662;</a>
                    </li>
                    <li className={selectG()}>
                        <a className="nav-link" href="#contact">CONTACTO&#9662;</a>
                    </li>
                </ul>
                <div className="social-conteiner">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                        <img src={selectB()} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={selectD()} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={selectE()} alt="Instagram" className="social-icon" />
                    </a>
                    <p className={selectF()}>@Almabtl</p>
                </div>
            </div>
        </div>
    );
}