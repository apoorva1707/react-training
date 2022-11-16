import {Routes,Route,Link} from 'react-router-dom';
import Home from'./pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import Teams from './pages/Teams';
import TeamComponent from './pages/TeamComponent';
import Error404 from './pages/404.js';

export default function App() {
  return (
   <div className="body-wrapper">
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="signup">SignUp</Link></li>
          <li><Link to="team">See Teams</Link></li>
        </ul>
      </nav>
    </header>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path="/team" element={<Teams/>}>
        <Route path=":teamId" element={<TeamComponent/>}/>
       </Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path="*" element={<Error404/>}/>
    </Routes>

    <footer>
      Hello I am footer and i will be on all pages!
    </footer>
   </div>
  );
}


