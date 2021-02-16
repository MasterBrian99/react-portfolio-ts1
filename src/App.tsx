import React from 'react';
import NavbarMain from './components/Navbar/NavbarMain';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
// import axios from "axios";
function App() {




    return (
    <>
      <NavbarMain />
      <Home />
      <About />

      <Projects />
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;
