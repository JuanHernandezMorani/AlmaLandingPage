import React, { useContext } from 'react';
import { PortContext } from '../context/PortContext.js';
import '../style/portfolio.css';
import link from '../imgs/others/separador.png';
import { Bolder } from '../components/helper/helper.jsx';
import btl1 from '../imgs/btl/btl_1.jpg';
import btl2 from '../imgs/btl/btl_2.jpg';
import btl3 from '../imgs/btl/btl_3.jpg';
import trade1 from '../imgs/trade/trade_1.jpg';
import trade2 from '../imgs/trade/trade_3.jpg';
import trade3 from '../imgs/trade/trade_2.jpg';
import trade4 from '../imgs/trade/trade_4.jpg';
import trade5 from '../imgs/trade/trade_5.jpg';
import diseno1 from '../imgs/arq/diseno_1.jpg';
import diseno2 from '../imgs/arq/diseno_2.jpg';
import diseno3 from '../imgs/arq/diseno_3.jpg';
import prod1 from '../imgs/prod/prod_1.jpg';
import prod2 from '../imgs/prod/prod_2.jpg';
import prod3 from '../imgs/prod/prod_3.jpg';
import prod4 from '../imgs/prod/prod_4.jpg';
import rh1 from '../imgs/rrhh/rh1.jpg';
import rh2 from '../imgs/rrhh/rh2.jpg';
import mkt1 from '../imgs/mkt/mkt_1.jpg';
import mkt2 from '../imgs/mkt/mkt_2.jpg';
import mkt3 from '../imgs/mkt/mkt_3.jpg';

const CATEGORIES = [
  { id: 1, label: 'TODOS' },
  { id: 2, label: 'BTL & EVENTOS', images: [btl1, btl2, btl3] },
  { id: 3, label: 'TRADE MKT', images: [trade1, trade2, trade3, trade4, trade5] },
  { id: 4, label: 'ARQ Y DISEÑO', images: [diseno1, diseno2, diseno3] },
  { id: 5, label: 'PRODUCCIÓN Y LOGÍSTICA', images: [prod1, prod2, prod3, prod4] },
  { id: 6, label: 'RECURSOS HUMANOS', images: [rh1, rh2] },
  { id: 7, label: 'MKT DIGITAL', images: [mkt1, mkt2, mkt3] },
];

const ALL_IMAGES = CATEGORIES.flatMap((category) => category.images ?? []);

export default function Portfolio() {
  const { portID, setPortID } = useContext(PortContext);
  const selected = CATEGORIES.find((category) => category.id === portID) ?? CATEGORIES[0];
  const images = selected.id === 1 ? ALL_IMAGES : selected.images;

  return (
    <div className="portfolios-container section-shell">
      <h1 className="section-title">PORTFOLIO</h1>
      <div className="portfolios-inner">
        <div className="portfolio-tabs" role="tablist" aria-label="Categorías de portfolio">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected.id === category.id}
              onClick={() => setPortID(category.id)}
              className={`port-button ${selected.id === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="inner-port-component">
          {images.map((image, index) => (
            <img key={`${selected.id}-${index}`} src={image} alt={`Trabajo de ${selected.label.toLowerCase()} ${index + 1}`} loading="lazy" />
          ))}
        </div>
      </div>
      <div className="portfolio-foot">
        <img src={link} alt="" />
        <h2 className="port-h1-foot"><Bolder text={'ESTAMOS PREPARADOS PARA LO QUE\nSU EMPRESA NECESITE'} toBold={['ESTAMOS', 'PREPARADOS', 'EMPRESA', 'NECESITE']} /></h2>
        <a className="go-button" href="#contact">CONTACTO</a>
      </div>
    </div>
  );
}
