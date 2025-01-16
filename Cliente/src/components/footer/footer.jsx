import React from 'react';
import './Footer.css';
import linkedin from '../../imgs/ico/linkedin.png'
import facebook from '../../imgs/ico/facebook.png'
import instagram from '../../imgs/ico/instagram.png'
import footlogo from '../../imgs/log/Alma Footer.png';

export default function Footer(){
    return (
        <div className='foot-container'>
            <div className='foot-inner-container'>
                <div className='foot-ico'>
                    <img src={footlogo} alt='@Alma'/>
                </div>
                <div className="foot-social">
                    <div className='foot-social-ico'>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} className="bi bi-linkedin" alt="LinkedIn" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} className="bi bi-facebook" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} className="bi bi-instagram" alt="Instagram" />
                        </a>
                    </div>
                    <div className='foot-link'>
                        <a href="https://almabtl.com/" className="navbar-text">www.almabtl.com</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}