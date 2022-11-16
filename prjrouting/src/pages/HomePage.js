import React from 'react';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';

import Hamburger from './hamburger.jpeg';
export default function HomePage() {
  return (
    <div>
        
       
       

    <header className="w3-display-container w3-content w3-wide" style={{maxWidth:"1600px",minWidth:"500px" }} id="home">
  <img className="w3-image" src={Hamburger} alt="Hamburger Catering" width="1600" height="800" />
  <div className="w3-display-bottomleft w3-padding-large w3-opacity">
    <h1 className="w3-xxlarge">Le Catering</h1>
  </div>
</header>

  <AboutPage/>
  <MenuPage/>
  <ContactPage/>
    </div>
  )
}
