import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Main from './components/Main'
import Navbarr from './components/Navbarr'
import Footer from './components/Footer'
import About from './components/About'
import ContactUs from './components/ContactUs'


function App() {
  return (

    <BrowserRouter basename="/the-app">
      <div>
        <Navbarr />
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route exact path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/" component={Main} />
          <Route component={Error} />
          <Route path="/" >
            <Redirect to="/main" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
