import React from 'react';
import './App.css'
import About from './Components/About/About';
import CallToAction from './Components/CallToAction/CallToAction';
import Clients from './Components/Clients/Clients';
import Counter from './Components/Counter/Counter';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';


const App = () => {
  return (
    <div className="App">

      <header id="header" className="fixed-top header-transparent">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo"><a href="index.html">Baker</a></h1>
          <NavBar></NavBar>
        </div>
      </header>

      <section id="hero" className="d-flex align-items-center justify-content-center">
        <Header></Header>
      </section>

      <main id="main">
        <Clients></Clients>
        <About></About>
        <Counter></Counter>
        <Services></Services>
        <CallToAction></CallToAction>
        <Testimonial></Testimonial>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
};

export default App;