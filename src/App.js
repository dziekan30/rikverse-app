import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Navbarr from './components/Navbarr'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbarr />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
