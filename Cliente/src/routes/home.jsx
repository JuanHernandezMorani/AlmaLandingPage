import Carrusel from '../components/carrusel/carrusel.jsx';
import Portfolio from './portfolio.jsx';
import Servicios from './servicios.jsx';
import Agencia from './agencia.jsx';
import Clientes from './clientes.jsx';
import Contacto from './contacto.jsx'; 
import '../style/home.css';
import { Divider } from '@mui/material';

export default function Home(){
    return (
        <div className='home-container'>
         <Carrusel />
         <Divider variant='middle'/>
            <div className='sections-list'>
                <section id="agency"> <Agencia /> </section>
                <section id="services"> <Servicios /> </section>
                <section id="portfolios"> <Clientes /> </section>
                <section id="clients"> <Portfolio /> </section>
                <section id="contact"> <Contacto /> </section>
            </div>
        </div>
    );
}