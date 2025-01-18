import Carrusel from '../components/carrusel/carrusel.jsx';
import Portfolio from './portfolio.jsx';
import Servicios from './servicios.jsx';
import Agencia from './agencia.jsx';
import Clientes from './clientes.jsx';
import Contacto from './contacto.jsx'; 
import '../style/home.css';

export default function Home(){
    return (
        <div className='home-container'>
         <Carrusel />
            <div className='sections-list'>
                <section id="agency"> <Agencia /> </section>
                <section id="services"> <Servicios /> </section>
                <section id="portfolios"> <Portfolio /> </section>
                <section id="clients"> <Clientes /> </section>
                <section id="contact"> <Contacto /> </section>
            </div>
        </div>
    );
}