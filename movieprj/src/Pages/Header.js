import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect,useContext } from 'react'
import { useState } from 'react';
import Logo from '../Images/logo.png'


export default function Header(){
   
    let [loading,setLoading] = useState(true)

    return(
        <div className=" h-14 bg1 fixed w-full shadow-lg">
        <header className="flex h-14 max-w-7xl mx-auto justify-between items-center">
            
         
            <div>
            <img src={Logo} className="w-8"/>
          </div>
             
          <div className="space-x-5">
            <Link to="/">
            Home
            </Link>
            <Link to="/">
           Movies
            </Link>
            </div>
          

        </header>
      </div>
    );
  }