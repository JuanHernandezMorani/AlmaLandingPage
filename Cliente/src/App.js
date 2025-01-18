import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ImageProvider } from './context/ImageContext';
import { PortProvider } from './context/PortContext.js';
import Navbar from './components/nav/nav.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './routes/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <PortProvider>
        <ImageProvider>
          <div className="App">
            <Navbar />
             <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer />
          </div>
        </ImageProvider>
      </PortProvider>
    </BrowserRouter>
  );
}

export default App;