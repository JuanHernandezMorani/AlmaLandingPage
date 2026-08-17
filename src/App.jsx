import React from 'react';
import { ImageProvider } from './context/ImageContext.jsx';
import { PortProvider } from './context/PortContext.jsx';
import Navbar from './components/nav/nav.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './routes/home.jsx';
import './App.css';

export default function App() {
  return (
    <PortProvider>
      <ImageProvider>
        <div className="App">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </ImageProvider>
    </PortProvider>
  );
}
