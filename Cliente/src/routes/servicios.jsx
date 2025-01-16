import React from "react";
import '../style/servicios.css';
import arq from '../imgs/srv/arq.png';
import Btl from '../imgs/srv/Btl.png';
import mkt from '../imgs/srv/mkt.png';
import mkt_dig from '../imgs/srv/mkt_dig.png';
import prod from '../imgs/srv/prod.png';
import rrhh from '../imgs/srv/rrhh.png';

export default function Servicios(){
return (
        <div className="services-container">
            <h1 className="services-title">Servicios</h1>

            <h2>¿Qué y como lo hacemos?</h2>

            <h3 className="services-description">Nuestra motivación es encontrar una idea que transforme, que contagie sensaciones. Resolvemos 
            todos los problemas de forma creativa y eficaz.</h3>

            <p> Disfrutamos de vincularnos con nuestros clientes: somos el brazo ejecutor y creativo que tu empresa necesita.
            Todos los proyectos son bienvenidos: chicos, medianos, grandes, y ¡desde cualquier lugar del país!</p>

            <div className="services-components">
                <div className="component-container">
                    <div className="component">
                        <img src={Btl} alt="Btl" ></img>
                        <h3>BTL & EVENTOS</h3>
                        <h4> Acciones promocionales 100% a medida. 360 grados desde 
                        su concepción, priorizando los canales más precisos y aptos 
                        para tu negocio que 
                        priorizan los canales de comunicación BTL los cuales 
                        consideramos más innovadores, precisos, económicos y que 
                        nos permiten medir mejor los resultados.</h4>
                    </div>
                    <div className="component">
                        <img src={mkt} alt="trade_marketing" ></img>
                        <h3>TRADE MKT</h3>
                        <h4>Posicionamos tu marca de forma estratégica y eficiente 
                        empleando la creatividad en su máxima expresión. Nos 
                        encargamos de TODO: evaluación, 
                        producción, ejecución y control. Brindamos las soluciones a los 
                        desafíos que plantea el Trade, generando excelentes resultados 
                        para la venta del portafolio de productos y/o servicios de 
                        nuestros clientes.</h4>
                    </div>
                    <div className="component">
                        <img src={arq} alt="Arq" ></img>
                        <h3>ARQ. y DISEÑO</h3>
                        <h4>Stands, locales y otros que materializan sus proyectos 
                        adaptándose a su presupuesto y necesidades. Contamos con 
                        un excelente grupo de diseñadores, modeladores 3D, 
                        editores de audio y video capacitados para brindarle 
                        soluciones concretas, eficaces y creativas.</h4>
                    </div>
                </div>

                <div className="component-container">
                    <div className="component">
                        <img src={prod} alt="prod" ></img>
                        <h3>PRODUCCIÓN Y LOGÍSTICA</h3>
                        <h4>Contamos con una vasta red de proveedores con extensa 
                        trayectoria con los cuales trabajamos en conjunto desde hace 
                        ya varios años. 
                        Sabemos satisfacer las más exigentes demandas en corto 
                        plazo y con los mejores presupuestos. 
                        Algunos ejemplos: merchandising, material pop, regalos 
                        empresariales.</h4>
                    </div>
                    <div className="component">
                        <img src={mkt_dig} alt="marketing_digital" ></img>
                        <h3>MKT DIGITAL</h3>
                        <h4>Creamos contenido de valor para tus redes sociales, Servicio 
                        de Community Manager para Fidelización de Clientes, 
                        Conectamos todas tus 
                        plataformas en post del mejor posicionamiento.</h4>
                    </div>
                    <div className="component">
                        <img src={rrhh} alt="rrhh" ></img>
                        <h3>RRHH</h3>
                        <h4>Reclutamiento, Pre-selección y selección, Capacitación, 
                        Seguimiento y evaluación para todo el país. 
                        Base de datos con cobertura nacional: Promotoras, 
                        Promo actores/actrices, Servicios de supervisión 
                        Investigaciones de mercado & mystery shoper.</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}