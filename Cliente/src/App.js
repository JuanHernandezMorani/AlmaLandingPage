import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ImageProvider } from './context/ImageContext';
import Navbar from './components/nav/nav.jsx';
import Footer from './components/footer/footer.jsx';
import Agencia from './routes/agencia.jsx';
import Clientes from './routes/clientes.jsx';
import Contacto from './routes/contacto.jsx';
import Home from './routes/home.jsx';
import Portfolio from './routes/portfolio.jsx';
import Servicios from './routes/servicios.jsx';

function App() {
  return (
    <BrowserRouter>
    <ImageProvider>
      <div className="App">
        <Navbar />
         <Switch>
            <Route exact path="/" component={Home}/>
            {/*
            <Route path="/Agencia" component={Agencia}/>
            <Route path="/Clientes" component={Clientes}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/Servicios" component={Servicios}/>
            */}
        </Switch>
        <Footer />
      </div>
      </ImageProvider>
    </BrowserRouter>
  );
}

export default App;
