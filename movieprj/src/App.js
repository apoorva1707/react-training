import React,{useState,useContext} from "react";
import {Routes,Route,Link,Navigate} from "react-router-dom";
import './App.css';
import Header from './Pages/Header';
import HomePage from "./Pages/HomePage";
import Error404 from "./Pages/Error404";
import SingleMoviePage from "./Pages/SingleMoviePage";
import CastPage from "./Pages/CastPage";
import RecommendationPage from "./Pages/RecommendationPage";
import SingleActorPage from "./Pages/SingleActorPage";
import RecommSingle from "./Pages/RecommSingle";

function App(){


  return(
    <div className=''>

    <Header/>
    
    <div className='pt-16'>
    
      <Routes>
        <Route index element={<HomePage/>}/>
      
        <Route path="movie/:id" element={<SingleMoviePage/>}/>
      {/*  <Route path="movie/:id" element={<RecommendationPage/>}/>
        <Route path="movie/:id" element={<CastPage/>}/> */}
       
        <Route path="person/:id" element={<SingleActorPage/>} />
     
        <Route path="*" element={<Error404/>}/>

     
      </Routes>
     </div>
    </div>
  );
}

export default App;
