import {Routes,Route,Link} from 'react-router-dom';
import HomePage from'./pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';

import './App.css';

import Error404 from './pages/404.js';

export default function App() {
  return (
   <div className="body-wrapper">
   
   <div className="w3-top">
    <div className="w3-bar w3-white w3-padding w3-card" >
    <Link to="/" className="w3-bar-item w3-button">Gourmet au Catering</Link>
    
    <div className="w3-right w3-hide-small">
      <Link to="about" className="w3-bar-item w3-button">About</Link>
      <Link to="menu" className="w3-bar-item w3-button">Menu</Link>
      <Link to="contact" class="w3-bar-item w3-button">Contact</Link>
    </div>
  </div>
</div>

       
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/about' element={<AboutPage/>}/>
       <Route path='/contact' element={<ContactPage/>}/>
       <Route path='/menu' element={<MenuPage/>}/>
       
       <Route path="*" element={<Error404/>}/>
    </Routes>

    


<footer className="w3-center w3-light-grey w3-padding-32">
<p>Powered by <Link to="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</Link></p>
</footer>
</div>
  );
}


