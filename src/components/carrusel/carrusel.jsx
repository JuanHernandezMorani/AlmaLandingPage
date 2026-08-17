import React, { useContext, useEffect, useMemo, useState } from 'react';
import '../../style/carrusel.css';
import { ImageContext } from '../../context/ImageContext.jsx';
import { PortContext } from '../../context/PortContext.jsx';
import portada from '../../imgs/port/PORTADA_PRINCIPAL.jpg';
import eventos from '../../imgs/port/EVENTOS_CORPORATIVOS.jpg';
import mkt from '../../imgs/port/TRADE_MKT.jpg';
import ferias from '../../imgs/port/FERIAS_&_CONGRESOS.jpg';
import family from '../../imgs/port/FAMILY_DAY.jpg';
import merchan from '../../imgs/port/MERCHAN.jpg';
import film from '../../imgs/port/FOTO_Y_FILMMAKER.jpg';

const SLIDES = [
  { id: 1, image: portada, title: null, portId: 1 },
  { id: 2, image: eventos, title: 'EVENTOS\nCORPORATIVOS', portId: 2 },
  { id: 3, image: ferias, title: 'FERIAS &\nCONGRESOS', portId: 4 },
  { id: 4, image: family, title: 'FAMILY\nDAY', portId: 6 },
  { id: 5, image: merchan, title: 'MERCHANDISING &\nREGALOS EMPRESARIALES', portId: 5 },
  { id: 6, image: film, title: 'FOTOGRAFÍA &\nFILMMAKERS', portId: 7 },
  { id: 7, image: mkt, title: 'TRADE MKT &\nLOGÍSTICA', portId: 3 },
];

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setImageID } = useContext(ImageContext);
  const { setPortID } = useContext(PortContext);
  const slide = useMemo(() => SLIDES[currentIndex], [currentIndex]);

  useEffect(() => {
    setImageID(slide.id);
  }, [slide.id, setImageID]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const chooseSlide = (index) => setCurrentIndex(index);

  const openProject = () => {
    setPortID(slide.portId);
    window.requestAnimationFrame(() => {
      document.getElementById('portfolios')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section id="top" className={`carrusel-container slide-${slide.id}`} aria-label="Presentación de ALMA BTL">
      <img className="carrusel-background" src={slide.image} alt="" fetchPriority="high" />
      <div className="carrusel-shade" aria-hidden="true" />

      {slide.id === 1 ? (
        <div className="carrusel-main-img">
          <p>somos<br />profesionales</p>
          <h1>al servicio de profesionales.</h1>
        </div>
      ) : (
        <div className="carrusel-project">
          <h1>{slide.title}</h1>
          <button type="button" className="project_button" onClick={openProject}>VER PROYECTO</button>
        </div>
      )}

      <div className="navigation" role="tablist" aria-label="Diapositivas">
        {SLIDES.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`nav-dot ${currentIndex === index ? 'active' : ''}`}
            aria-label={`Mostrar diapositiva ${index + 1}`}
            aria-selected={currentIndex === index}
            onClick={() => chooseSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
