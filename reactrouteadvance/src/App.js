///import {Routes,Route,Link} from "react-router-dom";
//import './App.css';
//import Error404 from "./pages/404";
//import HomePage from "./pages/HomePage";
//import UserPage from "./pages/UserPage";
//import ProfilePage from './pages/ProfilePage';
//import AccountPage from './pages/AccountPage';
//function App(){

 /* function handleUserAuth(){
    setUserAuth(!userAuth)
  }
  return(
    <div className="body-wrapper">
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            {/*<li><Link to="/user">User</Link></li> */
           
    //  <Routes>
        /*<Route index element={<HomePage/>}/>
        <Route path="home" element={<HomePage/>}/>
        <Route path="user" element={<UserPage/>}>
          <Route index element={<ProfilePage/>}/>
         <Route path="profile" element={<ProfilePage/>}/>
         <Route path="account" element={<AccountPage/>}/>
         <Route path="*" element={<Error404/>}/>
         </Route>
  <Route path="*" element={<Error404/>}/> */
     
    //  </Routes>

   // </div>
 // );
//}  */

//export default App; 
import { useState } from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import UserFeed from "./pages/UserFeed";


function App() {

  let [userAuth, setUserAuth] = useState(true)

  function handleUserAuth(){
    setUserAuth(!userAuth)
  }

  return (
    <div className="body-wrapper">
    


      <header>
        <nav>
          <ul>
             <li> <Link to="/">Home</Link></li>
             {userAuth?<Link to="/settings"><li >Settings</li></Link> :<Link to="/signup"><li>Signup </li></Link>}
             {userAuth? <li onClick={handleUserAuth}>Logout User</li>:<li onClick={handleUserAuth}>Login User</li>}
          </ul>
        </nav>
      </header>
      <Routes>
        {userAuth && 
        (
          <>
          <Route path="/" element={<UserFeed/>}/>
          <Route path="/settings" element={<Settings/>}/>
          </>
        )

        }

        {!userAuth && 

        (
          <>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>

          </>
        )}

        <Route path="*" element={<Navigate to={"/"}/>}/>

      </Routes>


    </div>
  );
}
export default App;