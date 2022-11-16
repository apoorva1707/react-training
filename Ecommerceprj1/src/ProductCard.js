import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import AppContext from './Context/AppContext';

export default function ProductCard(props) {

  let appContext = useContext(AppContext)
  return (
  

        <div className="w-1/4 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:bg-yellow-200">
      <img src={props.item.image} className="h-64 mx-auto" />
      <Link to={`/products/${props.item.id}`}><h3 className='text-2xl font-bold text-green-500 my-4'>{props.item.title}</h3></Link>
      <p>Category : {props.item.category?props.item.category:"No Category Available"}</p>
      <div className="mt-4 flex justify-between">
        <div>
          <p>$ {props.item.price}</p>
        </div>
          
         {  /*<p className='b1 '><button className='text-sm bg-green-200' type="button"><span>Add to cart</span></button></p>  */ }
         <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
        className="w-6 h-6 cursor-pointer" 
        onClick={()=>{
          appContext.addProductToCart(props.item)
        }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
     
        </div>
        </div>

    </div>
  );
}