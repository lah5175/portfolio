import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ETR from './components/ETR';
import ShadyGlen from './components/shadyGlen';
import WTD from './components/WTD';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/ETR" component={ETR} />
      <Route path="/portfolio/ShadyGlen" component={ShadyGlen} />
      <Route path="/portfolio/WTD" component={WTD} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
