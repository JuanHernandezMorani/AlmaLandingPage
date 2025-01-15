import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ImageProvider } from './context/ImageContext';
import Navbar from './components/nav/nav.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './routes/home.jsx';

function App() {
  return (
    <BrowserRouter>
    <ImageProvider>
      <div className="App">
        <Navbar />
         <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
      </ImageProvider>
    </BrowserRouter>
  );
}

export default App;
