import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
//import ContactForm from './components/ContactForm';
import Form from './components/Form'
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
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