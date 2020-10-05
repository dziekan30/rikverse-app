import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Main from './components/Main'
import Navbarr from './components/Navbarr'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (

    <BrowserRouter>
      <div>
        <Navbarr />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/main" component={Main} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
