import {useState} from 'react';

function App() {
  //Hooks
  //useState;
  //let [variableName,setVariableName] = useState(initialValue);
  let [num1,setNum1] = useState(15);
  let [fullName,setFullName] = useState("Rahul Singh");

  //let num1 = 15;
 // function handleChangeValue (){
    //num1 = 15;
   // setNum1(25);
  //}
  return (
    <>
     <h1>{num1}</h1>
     <h1>{fullName}</h1>
    { /*<button onClick = {handleChangeValue}>Change Value</button>
*/}
<button onClick={()=>{
  setNum1(30)
  setFullName("Mrunal Thakur")
}}>Change Value</button>
    </>
  )
}


export default App;
