import {useEffect,useState} from "react";
import AppContext from "./AppContext";

export default function AppState(props){
    let url="https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke] = useState();
    let [loading,setLoading] = useState(true);

    async function getJoke(){
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setJoke(result);
        setLoading(false);
    }

    //for the first joke
    useEffect(()=>{
        getJoke()
    },[])

    return(
        <AppContext.Provider value={{
            joke,loading,getJoke
        }}>
            {props.children}
        </AppContext.Provider>
    )

}