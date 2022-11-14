//import './index.css'
import Header from './Header.js';
import TableRow from './TableRow.js';
function App() {
  let numbers = [44,22,12,45,689,78];
   
  let users = [{
    id: 1,
    first_name: "Theodora",
    last_name: "Bevens",
    email: "tbevens0@marketwatch.com",
    gender: "Female",
    ip_address: "162.222.115.114"
  }, {
    id: 2,
    first_name: "Boigie",
    last_name: "Benit",
    email: "bbenit1@nba.com",
    gender: "Polygender",
    ip_address: "94.101.65.253"
  }, {
    id: 3,
    first_name: "Delia",
    last_name: "Beceril",
    email: "dbeceril2@constantcontact.com",
    gender: "Female",
    ip_address: "202.78.134.15"
  }, {
    id: 4,
    first_name: "Early",
    last_name: "Van Der Straaten",
    email: "evanderstraaten3@nasa.gov",
    gender: "Male",
    ip_address: "216.67.0.61"
  }, {
    id: 5,
    first_name: "Batsheva",
    last_name: "Mushart",
    email: "bmushart4@java.com",
    gender: "Genderfluid",
    ip_address: "61.161.65.183"
  }, {
    id: 6,
    first_name: "Hillel",
    last_name: "Carillo",
    email: "hcarillo5@gnu.org",
    gender: "Male",
    ip_address: "105.26.183.205"
  }, {
    id: 7,
    first_name: "Benn",
    last_name: "Laffan",
    email: "blaffan6@oakley.com",
    gender: "Male",
    ip_address: "236.184.162.12"
  }, {
    id: 8,
    first_name: "Jarrod",
    last_name: "Talby",
    email: "jtalby7@nyu.edu",
    gender: "Male",
    ip_address: "53.70.189.176"
  }, {
    id: 9,
    first_name: "Karla",
    last_name: "Monument",
    email: "kmonument8@freewebs.com",
    gender: "Female",
    ip_address: "177.148.178.41"
  }, {
    id: 10,
    first_name: "Sullivan",
    last_name: "Messer",
    email: "smesser9@prlog.org",
    gender: "Male",
    ip_address: "241.209.216.52"
  }]
  let counter = 0;
  function logClicks(){
    counter++;
    console.log(counter);
  }

let country = "India";
let age = 21;

function logSomething(){
  console.log("Function was invoked")
}
  //let newArray = numbers.map(doubleNum);
 // console.log(newArray);
  //function doubleNum(num){
   // return num*2;
  //}
  let totalCount=0;
  function tally(){
    totalCount++;
    console.log("Total Click Count", totalCount)
  }
  return (
    <div className="body-container">
      {numbers.map((num,i)=> <h1 key={i}>{num} and key is {i}</h1>)}
    
   <table>
    <thead>
      <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email </th>
      <th>Gender</th>
      <th>IP Address</th>
      </tr>
    </thead>
 
      {users.map((user, i) => {
          return (
            <TableRow user={user} logClicks={logClicks} tally={tally} key={user.id} />
   
          )
          })}
</table>
      
 </div>

  )}
//Exporting the app component
export default App;
