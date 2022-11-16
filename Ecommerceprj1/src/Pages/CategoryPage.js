import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import ProductCard from '../ProductCard'
import loadingGif from '../Images/loading.gif';

export default function CategoryPage() {
  let {id} = useParams();
  let [items,setItems] =useState([]);
  let [loading,setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products/category/"

  async function getAllProducts(){
    setLoading(true);
    let response =await fetch(url+id);
    let data = await response.json();
    console.log(data);
    setItems(data)
    setLoading(false);
  }

  useEffect(()=>{
    getAllProducts();
  },[id])

  return(

    <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
        {loading? (<Loader/>):(
            items.map((item)=>{
                return(
                    <ProductCard key={item.id} item={item}/>
                )
            })
        )}
    </div>
  )
}
function Loader() {
    return (
      <>
        <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
      </>
    );
  }