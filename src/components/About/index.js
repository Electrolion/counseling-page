import React from 'react';
import Me from '../../assets/me.jpg';
import Fade from 'react-reveal/Fade';
import './style.css';

function About() {
  
  return (
    <section id="about">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className='row d-flex mx-auto'>
      <div className='about-box col-md-5'>
        <h2 className='about-title'>A Little About Me..</h2>
        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.</p>
      </div>
    <Fade bottom cascade>
      <div className='me-box col-md-5'>
        <img className="me" src={Me}/>
      </div>
    </Fade>
    </div>
    </section>
  );
}

export default About;