import { React, useContext, useState, useEffect } from 'react';
import { PortContext } from '../context/PortContext.js';
import '../style/portfolio.css';
import link from '../imgs/others/separador-final.png';

import eventos from "../imgs/port/EVENTOS_CORPORATIVOS.jpg";
import mkt from "../imgs/port/TRADE_MKT.jpg";
import ferias from "../imgs/port/FERIAS_&_CONGRESOS.jpg";
import family from "../imgs/port/FAMILY_DAY.jpg";
import merchan from "../imgs/port/MERCHAN.jpg";
import film from "../imgs/port/FOTO_Y_FILMMAKER.jpg";

import btl_1 from '../imgs/btl/btl_1.jpg';
import btl_2 from '../imgs/btl/btl_2.jpg';
import btl_3 from '../imgs/btl/btl_3.jpg';
import btl_4 from '../imgs/btl/btl_4.jpg';

import trade_1 from '../imgs/trade/trade_1.jpg';
import trade_2 from '../imgs/trade/trade_2.jpg';
import trade_3 from '../imgs/trade/trade_3.jpg';
import trade_4 from '../imgs/trade/trade_4.jpg';
import trade_5 from '../imgs/trade/trade_5.jpg';

import diseño_1 from '../imgs/arq/diseño_1.jpg';
import diseño_2 from '../imgs/arq/diseño_2.jpg';
import diseño_3 from '../imgs/arq/diseño_3.jpg';

import prod_1 from '../imgs/prod/prod_1.jpg';
import prod_2 from '../imgs/prod/prod_2.jpg';
import prod_3 from '../imgs/prod/prod_3.jpg';
import prod_4 from '../imgs/prod/prod_4.jpg';

import rh1 from '../imgs/rrhh/rh1.jpg';
import rh2 from '../imgs/rrhh/rh2.jpg';

import mkt_1 from '../imgs/mkt/mkt_1.jpg';
import mkt_2 from '../imgs/mkt/mkt_2.jpg';
import mkt_3 from '../imgs/mkt/mkt_3.jpg';

export default function Portfolio() {
    const { portID, setPortID } = useContext(PortContext);
    const [currentPort, setCurrentPort] = useState(portID);

    function setElement(portID) {
        setPortID(portID);
        setCurrentPort(portID);
    }

    useEffect(() => {
        if(currentPort !== portID) setCurrentPort(portID);
        if (currentPort > 7 || currentPort < 1) {
            setTimeout(() => {
                setCurrentPort(1);
                setPortID(1);
            }, 1);
        }
    }, [currentPort, setPortID,portID]);

    function selectElement(){
        switch(currentPort){
            case 2: return (
                <div className="inner-port-component">
                    <img src={btl_1} alt="btl_1"/>
                    <img src={btl_2} alt="btl_2"/>
                    <img src={btl_3} alt="btl_3"/>
                    <img src={btl_4} alt="btl_4"/>
                </div>
            );
            case 3: return (
                <div className="inner-port-component">
                    <img src={trade_1} alt="trade_1"/>
                    <img src={trade_2} alt="trade_2"/>
                    <img src={trade_3} alt="trade_3"/>
                    <img src={trade_4} alt="trade_4"/>
                    <img src={trade_5} alt="trade_5"/>
                </div>
            );
            case 4: return (
                <div className="inner-port-component">
                    <img src={diseño_1} alt="diseño_1"/>
                    <img src={diseño_2} alt="diseño_2"/>
                    <img src={diseño_3} alt="diseño_3"/>
                </div>
            );
            case 5: return (
                <div className="inner-port-component">
                    <img src={prod_1} alt="prod_1"/>
                    <img src={prod_2} alt="prod_2"/>
                    <img src={prod_3} alt="prod_3"/>
                    <img src={prod_4} alt="prod_4"/>
                </div>
            );
            case 6: return (
                <div className="inner-port-component">
                    <img src={rh1} alt="rh1"/>
                    <img src={rh2} alt="rh2"/>
                </div>
            );
            case 7: return (
                <div className="inner-port-component">
                    <img src={mkt_1} alt="mkt_1"/>
                    <img src={mkt_2} alt="mkt_2"/>
                    <img src={mkt_3} alt="mkt_3"/>
                </div>
            );
            default: return (
                <div className="inner-port-component">
                    <img src={eventos} alt="eventos"/>
                    <img src={mkt} alt="mkt"/>
                    <img src={ferias} alt="ferias"/>
                    <img src={family} alt="family"/>
                    <img src={merchan} alt="merchan"/>
                    <img src={film} alt="film"/>
                </div>
            );
        }
    }

    return (
        <div className="portfolios-container">
            <p className="port-title">PORTFOLIO</p>
            <div className="portfolios-inner">
                <ul className="inner-ul">
                    <li>
                        <button
                            onClick={() => setElement(1)}
                            className="port-button"
                        >
                            TODOS
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setElement(2)}
                            className="port-button"
                        >
                            BTL & EVENTOS
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setElement(3)}
                            className="port-button"
                        >
                            TRADE MKT
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setElement(4)}
                            className="port-button"
                        >
                            ARQ Y DISEÑO
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setElement(5)}
                            className="port-button"
                        >
                            PRODUCCIÓN Y LOGISTICA
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setElement(6)}
                            className="port-button"
                        >
                            RECURSOS HUMANOS
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setElement(7)}
                            className="port-button"
                        >
                            MKT DIGITAL
                        </button>
                    </li>
                </ul>
                {selectElement()}
            </div>
            <div className="portfolio-foot">
                <img src={link} alt="portfolios-end-image" />
                <h1 className="port-h1-foot">
                    ESTAMOS PREPARADOS PARA LO QUE SU EMPRESA NECESITE
                </h1>
                <a href="#contact">
                    <button className="go-button">CONTACTO</button>
                </a>
            </div>
        </div>
    );
}
