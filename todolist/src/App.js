import { useState } from 'react';
import './App.css';

function App() {
  //let[myPetName,setMyPetName] = useState(localStorage.getItem('MyPetName'));
  //state to store user input
   let [todoToAdd, setTodoToAdd] = useState("");
  {/*let [todos, setTodos] = useState(
    [
      {
        id: 1,
        task: "Learn HTML",
        done: false
      },
      {
        id: 2,
        task: "Learn CSS",
        done: true
      },
      {
        id: 3,
        task: "Learn J",
        done: false
      },
      {
        id: 4,
        task: "Learn React",
        done: false
      }
    ]
  )  */}
  //initial  Todos
  let [todos,setTodos] = useState(checkLSStatus())
 
  function checkLSStatus(){
    if(localStorage.getItem('todos')){
       return JSON.parse(localStorage.getItem('todos'))
    }else{
      localStorage.setItem('todos',JSON.stringify([]))
      return JSON.parse(localStorage.getItem('todos'))
    }
  }
  function saveTodoToLS(todos){
  localStorage.setItem('todos',JSON.stringify(todos));
 }
 function getTodosFromLS(){
  setTodos(JSON.parse(localStorage.getItem('todos')));
 }
  function handleTodoDelete(todo){
    if(window.confirm("Are you sure you want to delete?")){
    const finalTodo = todos.filter((t)=>{
      return t.id !== todo.id
    })
    setTodos(finalTodo);
    saveTodoToLS(finalTodo);
    getTodosFromLS()
  }else{
    window.alert("Not Deleting")
  }
  }
function handleAddTodo(){
   if(todoToAdd === ""){
    window.alert("Please add todo")
    return;
   }else{
     let newTodo = {
      id:generateRandomId(),
      task:todoToAdd,
      done:false
     }
     setTodos([...todos,newTodo])
     saveTodoToLS([...todos,newTodo])
     getTodosFromLS()
     setTodoToAdd("")
   }
   }
  console.log(generateRandomId())
  function generateRandomId(){
    return Math.floor(1000 + Math.random()*9000)
  }
    function handleTodoStatusUpdate(todo){
      //Filter the todo to be deleted
      const finalTodo = todos.filter((t) => {
        return t.id !== todo.id
      }
      )
      let updatedTodo = {
        id:todo.id,
        task:todo.task,
        done:!todo.done
      }
      setTodos([...finalTodo,updatedTodo])
      saveTodoToLS([...finalTodo,updatedTodo])
      getTodosFromLS()
    }
  return (
    <div className='body-container'>
      <div className='wrapper'>
        <div className='todo-form'>
          <input value={todoToAdd} onChange={(event)=>{
            setTodoToAdd(event.target.value)
          }} type="text" placeholder="Enter your todo" />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>

        <div className='todo-list'>
          <ul>

            {todos.map((todo,index)=>{
              return(
              <li key={index}>{todo.task}
          
              <span><svg onClick={() => {
                handleTodoDelete(todo)
               }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="delete-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              
        
                  {todo.done?(<span className='todo-done' onClick={()=>{handleTodoStatusUpdate(todo)}}>Done</span>) : (<span className='todo-notdone' onClick={()=>{handleTodoStatusUpdate(todo)}}>Not Done</span>)}
              </span>

            </li>
              
              )
            })}


            
          </ul>

      </div>

    </div>
    </div>
  )
}

//Exporting the app component
export default App;