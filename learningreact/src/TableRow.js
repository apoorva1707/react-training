export default function TableRow(props){
    let {user,logClicks,tally} = props;
    //let user = props.user;
    //let logClicks = prop.logClicks;
    let counter = 0;
    function logUser(user){
        console.log("loggin user")
       // console.log(user)
        counter++;
        console.log(`Row with the id : ${user.id} is clicked:`,counter,"times")
    }
    
  return(

<tr onClick={()=>{
    logClicks()
    logUser(user)
    tally()
}}>
  <td> {user.first_name}</td>
  <td> {user.last_name}</td>
  <td> {user.email}</td>
  <td> {user.gender}</td>
  <td> {user.ip_address}</td>
  </tr>
    )
}