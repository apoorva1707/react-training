import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect,useContext } from 'react'
import { useState } from 'react';
import Logo from '../Images/logo.PNG'
import AppContext from '../Context/AppContext';
export default function Header(props){
    let [categoryList,setCategoryList] = useState([]);
    let [loading,setLoading] = useState(true);
    const url="https://fakestoreapi.com/products/categories";
    let appContext = useContext(AppContext)
    
    async function getAllCategories(){
        let response =  await fetch(url);
        let data= await response.json();
        setCategoryList(data);
        console.log(data)
        setLoading(false);
    }
    useEffect(()=>{
        getAllCategories()
    },[]);

    return(
    <div className="body-wrapper">
      <header>
        <div className="nav">
          <div className="leftnav">
           <img src={Logo} className='w-24' alt="logo image"  />
          </div>
         <div className="rightnav h-14 flex justify-between items-center space-x-5">
        
       
         <Link to="/" className="font-bold">Home</Link> 
           
        
            {categoryList.map((category)=>{
            return(
            <Link key={category} to={`category/${category}`}><p className="font-bold capitalize">{category}</p></Link> 
        
            )
            })}
            <p className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
            className="w-6 h-6"
            onClick={()=>{
                props.setOpen(true)
            }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<span className="bg-white rounded-full w-6 text-center text-green-500"> {appContext.cartItems.length} </span>
        </p>
       </div>
        </div>
        </header>
        </div>

    
    );
}
