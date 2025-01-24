import React from 'react';
import '../../style/Footer.css';
import linkedin from '../../imgs/ico/white-linkedin.png';
import facebook from '../../imgs/ico/white-fb.png';
import instagram from '../../imgs/ico/white-instagram.png';
import footlogo from '../../imgs/log/Alma_Footer.png';

export default function Footer(){
    return (
        <footer className="foot-container">
            <div className="foot-inner-container">
                <div className='footer-img-conteiner'>
                    <img src={footlogo} alt="@Alma" className="img-fluid" />
                </div>
                <div className="footer-social-info">
                    <div className="foot-icons-conteiner">
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="img-fluid" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="img-fluid" />
                        </a>
                        <a href="https://www.instagram.com/almabtl/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="img-fluid" />
                        </a>
                    </div>
                    <a href="https://almabtl.com/" className="text-danger">www.almabtl.com</a>
                </div>
            </div>
        </footer>
    );
}