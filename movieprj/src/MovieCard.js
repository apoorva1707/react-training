import React,{useContext} from 'react'
import {Link} from 'react-router-dom';


export default function MovieCard(props) {

 const api_img="https://image.tmdb.org/t/p/w500/";
  return (
     
        <div className="w-1/6  bg-blue-50 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl">
      <img src={api_img+props.result.poster_path} className="h-64 mx-auto rounded-md" />
      <Link to={`/movie/${props.result.id}`}><h3 className='text-2xl font-bold text-blue-700 hover:text-black my-4'>{props.result.title}</h3></Link>
        <p>{props.result.release_date}</p>
      
     
       
</div>
   
  );
}