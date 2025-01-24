import React from 'react';
import '../../style/Footer.css';
import linkedin from '../../imgs/ico/white-linkedin.png';
import facebook from '../../imgs/ico/white-fb.png';
import instagram from '../../imgs/ico/white-instagram.png';
import footlogo from '../../imgs/log/Alma_Footer.png';

export default function Footer(){
    return (
        <footer className="container-fluid">
            <div className="container d-flex justify-content-between align-items-center">
                <div className='footer-img-conteiner'>
                    <img src={footlogo} alt="@Alma" className="img-fluid" />
                </div>
                <div className="text-center">
                    <div className="d-flex justify-content-center mb-3 foot-icons-conteiner">
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="mx-2 social-icon-foot" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="mx-2 social-icon-foot" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="mx-2 social-icon-foot" />
                        </a>
                    </div>
                    <a href="https://almabtl.com/" className="text-decoration-none fs-5 fw-bold text-danger">www.almabtl.com</a>
                </div>
            </div>
        </footer>
    );
}