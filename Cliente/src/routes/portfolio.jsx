import React from "react";
import '../style/portfolio.css';
import link from '../imgs/uc.jpg';

export default function Portfolio(){
return (
        <div className="portfolios-container">
            <img src={link} alt="portfolios-image"/>
            <p>Portfolio</p>
            <img src={link} alt="portfolios-image"/>
        </div>
    );
}