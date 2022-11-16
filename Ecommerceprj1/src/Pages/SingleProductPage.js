import React, { useContext,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import loadingGif from '../Images/loading.gif';
import AppContext from '../Context/AppContext';

export default function SingleProductPage() {

  let {id} = useParams();
  let [item,setItem] = useState({});
  let [loading,setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products/"


  async function getProductData(){
    let response = await fetch(url+id);
    let data = await response.json()
    // console.log(data);
    setItem(data);
    setLoading(false)
  }

  useEffect(()=>{
    getProductData()
  },[])

  return (
    <div className='max-w-7xl mx-auto mt-12'>
    {loading? (<Loader/>):(
      <ProductDetails item={item}/>
    )}
    </div>
  )
}


function ProductDetails(props){
  let appContext = useContext(AppContext);
  return(
    <>
    <h1 className=' text-3xl text-green-500 text-center'>{props.item.title}</h1>
    <div className='flex'>
      <div className='w-1/2'>
        <img src={props.item.image} className="h-96"/>
      </div>

      <div className='w-1/2'>
       
        <p className='my-12'>{props.item.description}</p>
        <span className='capitalize'>Category : {props.item.category}</span>
        <div className='flex justify-between'>
          <h3 className='text-lg mt-4'>Rating: {props.item.rating.rate}</h3> 
          <button className='bg-green-500 text-white px-4 py-2 w-1/3 rounded-sm'onClick={()=>{
            appContext.addProductToCart(props.item)
          }}>Add To Cart</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

function Loader() {
    return (
      <>
        <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
      </>
    );
  }
  