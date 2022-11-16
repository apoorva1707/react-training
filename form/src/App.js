import React,{useEffect,useState} from 'react'
import toast from 'react-hot-toast';
import './App.css'
export default function App(){

//useState
//useEffect

//useEffect(function , dependencies)

{/*const { useEffect } = require("react");

let [count,setCount] = useState(0);
let age = 10;

//useEffect(()=>{
  //  setTimeout(()=> {
    // setCount((c)=>c+1)
    // },1000)
    //})
    //this will run only once
    useEffect(()=>{
      setTimeout(()=>{
        setCount((c)=>c+1)
      },5000)
    },[])

    //this will run when count i changed
    useEffect(()=>{
      console.log("count value has changed")
    },[count,age])

    return (
      <div>
        I have rendered {count} times!
        <button onClick={()=>{
          setCount((c)=>c+1)
        }}>Change Count</button>
        
      </div> */}
      let [newUser,setNewUser] = useState({
        id:generateRandomId(),
        firstName:"",
        lastName:"",
        age:"",
        location:"",
        pinCode:"",
        password:"",
        option:""
      })
      let [allUsers,setAllUsers] = useState(getLSStatus());      
       
       function getLSStatus(){
        if(localStorage.getItem('users')){
          return JSON.parse(localStorage.getItem('users'))
        }else{
          localStorage.setItem('users',JSON.stringify([]));
          return JSON.parse(localStorage.getItem('users'))
        }
       }
        function saveUserToLS(users){
          localStorage.setItem('users',JSON.stringify(users));
        }
        function getUsersFromLS(){
          setAllUsers(JSON.parse(localStorage.getItem('users')))
        }
        useEffect(()=>{
        console.log(newUser)
      },[newUser])
       
      console.log(generateRandomId())
  function generateRandomId(){
    return Math.floor(1000 + Math.random()*9000)
  }

      function handleDelete(user){
        if(window.confirm("Are you sure you want to delete?")){
        const finalUser = allUsers.filter((u)=>{
          return u.id !== user.id
        })
        setAllUsers(finalUser);
        saveUserToLS(finalUser);
        getUsersFromLS()
      }else{
        window.alert("Selected item not deleted!!")
      }
      }
    
      
      function handleSubmit(event){
          event.preventDefault();
          console.log(newUser)
          //Update the local array for all users
          setAllUsers([...allUsers,newUser]);
          //Upload the local storage with the updated user
          saveUserToLS([...allUsers,newUser]);
          //Get all the updated users from local storage
          getUsersFromLS();
          toast.success("User added successfully")
          //clear the form

          setNewUser({
            id:generateRandomId(),
            firstName:"",
            lastName:"",
            age:"",
            location:"",
            pinCode:"",
            password:"",
            option:""
          })
          
        
        }
  
      return(
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <input type="text" required value={newUser.firstName} onChange={(event) =>{
              setNewUser({...newUser,firstName:event.target.value})
            }}placeholder="Enter your first name" />
            <input type="text" required value={newUser.lastName} onChange={(event) =>{
              setNewUser({...newUser,lastName:event.target.value})
            }}placeholder="Enter your last name" />
            <input type="text" required value={newUser.age} onChange={(event) =>{
              setNewUser({...newUser,age:event.target.value})
            }} placeholder="Enter your age" />
            <input type="text" required value={newUser.location} onChange={(event) =>{
              setNewUser({...newUser,location:event.target.value})
            }} placeholder="Enter your location" />
            <input type="text" required value={newUser.pinCode} onChange={(event) =>{
              setNewUser({...newUser,pinCode:event.target.value})
            }} placeholder="Enter your pincode" />
            <input type="password"  required value={newUser.password} onChange={(event) =>{
              setNewUser({...newUser,password:event.target.value})
            }}placeholder="Enter your password" />
            <select value={newUser.option} onChange={(event)=>{
              setNewUser({...newUser,option:event.target.value})
            }}>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
              <option value="Option4">Option 4</option>
              <option value="Option5">Option 5</option>
            </select>
            
            <button type='submit'>Save Details</button>
          </form>
          <div>
          <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Location</th>
              <th>Pincode</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
           
            {allUsers.map((user)=>{
                return(
                  <tr>
                  <td> {user.firstName}</td>
                  <td> {user.lastName}</td>
                  <td> {user.age}</td>
                  <td> {user.location}</td>
                  <td> {user.pinCode}</td>
                  <td> <button type='button' onClick={() => {
                handleDelete(user)
               }}>Delete</button></td>
                  </tr>
                )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}