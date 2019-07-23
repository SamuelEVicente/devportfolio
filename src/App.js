import React from 'react'
import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
//import ContactForm from './components/ContactForm';
import Form from './components/Form'
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AppBarResponsive from './components/AppBarResponsive';

function App() {
  return (
    <div className="App">
      <AppBarResponsive />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;