import React from 'react';
import NavbarMain from './components/Navbar/NavbarMain';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {
  return (
    <>
      <NavbarMain />
      <Home />
      <About />

      <Projects />
    </>
  );
}

export default App;
