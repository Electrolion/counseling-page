import React from 'react';
import About from './components/About';
import Services from './components/Services';
// import ContactForm from './components/Contact';
import Home from './components/Home';
// import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Home ></Home>
        <About></About>
        <Services></Services>
        {/* <ContactForm></ContactForm>
        <Footer></Footer> */}
      </main>
    </div>
  );
}

export default App;
