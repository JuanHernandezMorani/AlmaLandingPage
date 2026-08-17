import React from 'react';
import '../style/servicios.css';
import arq from '../imgs/srv/arq.png';
import btl from '../imgs/srv/Btl.png';
import mkt from '../imgs/srv/mkt.png';
import mktDigital from '../imgs/srv/mkt_dig.png';
import prod from '../imgs/srv/prod.png';
import rrhh from '../imgs/srv/rrhh.png';

const SERVICES = [
  { image: btl, title: 'BTL & EVENTOS', text: 'Acciones promocionales 100% a medida. Trabajamos de forma integral desde la concepción, priorizando canales BTL innovadores, precisos y medibles para cada negocio.' },
  { image: mkt, title: 'TRADE MKT', text: 'Posicionamos tu marca de forma estratégica y eficiente: evaluación, producción, ejecución y control para generar mejores resultados en el punto de venta.' },
  { image: arq, title: 'ARQ. Y DISEÑO', text: 'Stands, locales y espacios que materializan cada proyecto adaptándose al presupuesto y las necesidades, con diseño, modelado 3D y producción audiovisual.' },
  { image: prod, title: 'PRODUCCIÓN Y LOGÍSTICA', text: 'Una red consolidada de proveedores para responder en plazos exigentes con soluciones de merchandising, material POP y regalos empresariales.' },
  { image: mktDigital, title: 'MKT DIGITAL', text: 'Contenido de valor para redes sociales, community management y coordinación de plataformas para fortalecer presencia y posicionamiento.' },
  { image: rrhh, title: 'RRHH', text: 'Reclutamiento, preselección, selección, capacitación, seguimiento y evaluación con cobertura nacional para acciones, promociones e investigaciones de mercado.' },
];

export default function Servicios() {
  return (
    <div className="services-container section-shell">
      <h1 className="section-title">SERVICIOS</h1>
      <h2>¿QUÉ Y CÓMO LO HACEMOS?</h2>
      <h3 className="services-description">Nuestra motivación es encontrar una idea que transforme, que contagie sensaciones. Resolvemos los problemas de forma creativa y eficaz.</h3>
      <p className="services-lead">Disfrutamos vincularnos con nuestros clientes: somos el brazo ejecutor y creativo que tu empresa necesita. Todos los proyectos son bienvenidos, desde cualquier lugar del país.</p>
      <div className="services-components">
        {SERVICES.map((service) => (
          <article className="component" key={service.title}>
            <img src={service.image} alt="" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
