import React from "react";
import '../style/clientes.css';
import linkedin from '../imgs/ico/linkedin-g.png';
import facebook from '../imgs/ico/facebook-g.png';
import instagram from '../imgs/ico/instagram-g.png';
import correas from '../imgs/cli/correas.png';
import esteco from '../imgs/cli/esteco.png';
import moras from '../imgs/cli/moras.png';
import smirnoff from '../imgs/cli/smirnoff.png';
import tanqueray from '../imgs/cli/tanqueray.png';
import trapiche from '../imgs/cli/trapiche.png';
import boomstudio from '../imgs/ptr/boomstudio.png';
import ecofold from '../imgs/ptr/ecofold.png';
import ecoprint from '../imgs/ptr/ecoprint.png';
import graficatucuman from '../imgs/ptr/graficatucuman.png';
import root from '../imgs/ptr/root.png';
import sapyd from '../imgs/ptr/sapyd.png';
import wooprom from '../imgs/ptr/wooprom.png';
import rhbg from '../imgs/others/rhbg.jpg';

export default function Clientes(){
 return (
        <div className="clients-container">
            <div className="clients-follow">
                <h2>SEGUINOS EN NUESTRAS REDES SOCIALES</h2>
                <ul className="follow-imgs">
                    <li className="follow-li-imgs-1">
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt='linkedin-grey-ico' />
                        </a>
                    </li>
                    <li className="follow-li-imgs-2">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt='facebook-grey-ico' />
                        </a>
                    </li>
                    <li className="follow-li-imgs-3">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt='instagram-grey-ico' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="clients-inner">
                <h1 className="clientes-h1">CLIENTES</h1>
                <h2>Estas empresas ya confían en nosotros.</h2>
                <ul className="clients-list">
                    <li><img src={trapiche} alt='trapiche' className="clients-list-img-1"/></li>
                    <li><img src={moras} alt='moras' className="clients-list-img-2"/></li>
                    <li><img src={esteco} alt='esteco'className="clients-list-img-3"/></li>
                    <li><img src={correas} alt='correas' className="clients-list-img-4"/></li>
                    <li><img src={smirnoff} alt='smirnoff' className="clients-list-img-5"/></li>
                    <li><img src={tanqueray} alt='tanqueray' className="clients-list-img-6"/></li>
                </ul>
            </div>
            <div className="clients-sc">
                    <img src={rhbg} alt="rhbg"/>
                    <div className="partners-inner">
                        <h1 className="clientes-h1">PARTNERS</h1>
                        <ul className="partners-list">
                            <li><img src={wooprom} alt='wooprom' className="partners-list-img-1"/></li>
                            <li><img src={graficatucuman} alt='graficatucuman' className="partners-list-img-2"/></li>
                            <li><img src={ecofold} alt='ecofold'className="partners-list-img-3"/></li>
                            <li><img src={root} alt='root' className="partners-list-img-4"/></li>
                            <li><img src={ecoprint} alt='ecoprint' className="partners-list-img-5"/></li>
                            <li><img src={boomstudio} alt='boomstudio' className="partners-list-img-6"/></li>
                            <li><img src={sapyd} alt='sapyd' className="partners-list-img-7"/></li>
                        </ul>
                    </div>
            </div>
            <h1 className="clientes-h1">CONTACTO</h1>
        </div>
    );
}