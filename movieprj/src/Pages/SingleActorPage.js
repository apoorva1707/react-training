import React,{useState,useEffect} from 'react'
import loadingGif from '../Images/loading.gif';
import { useParams } from 'react-router-dom'


export default function SingleActorPage(props) {
    

        let {id} = useParams();
    
        let [loading,setLoading]=useState(true)
    
        let [movie,setMovie] = useState([])
    
        let url=`https://api.themoviedb.org/3/person/${id}?api_key=0e97b8e9a1ede424ddb7a5b3ee9870d0&language=en-US`
    
    
        async function getActor(){
    
            let response=await fetch(url);
    
            let result=await response.json();
    
            console.log("from single Actor page",result);
            setMovie(result);
    
            setLoading(false);
    
        }
    
    
    
        useEffect(()=>{
    
            getActor();
    
        },[])
    
        return (
    
            <div className="max-w-7xl mx-auto mt-12">
        
                {loading? (<Loader/>):(
        
                    <div className="flex  mr-2 ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-2">
        
                        <div className="w-1/2 ">
                        <img src={"https://image.tmdb.org/t/p/w500/"+movie.profile_path} alt={movie.title} className=" h-72 mx-auto rounded-2xl "/>
                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-3xl">{movie.name}</h1>
                          
                            
                            <br></br>
                            <p className="text-yellow-900 font-semibold"> {movie.known_for_department}</p>
                            <br/>
                             <p>Birthday:{movie.birthday}</p>
                         <br/>
                
                            <h2 className="text-green-900 font-bold">{movie.biography} </h2>
    
                            <br/>
                           
                            
                
                           
        
                        </div>
        
                    </div>
        
            
                   
        
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
          
