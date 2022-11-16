import {useContext,useState} from "react";
import AppContext from "./Context/AppContext";

function App(){
  let appContext = useContext(AppContext);

  return(
    <div className="body-wrapper">
      {appContext.loading?("fetching Joke"):(<Joke joke={appContext.joke}/>)}
      <button onClick={()=>{
        appContext.getJoke();
      }}>Click here</button>
    </div>
  );
}
export default App;

function Joke(props){
  return(
    <>
    <h1>{props.joke.setup}</h1>
    <h3>{props.joke.punchline}</h3>
    </>
  )
}