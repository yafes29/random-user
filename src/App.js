

import axios from 'axios';
import Card from './components/Card';
import {useState, useEffect} from "react";
import "./App.css"

function App() {
const [user, setUser] = useState()

const url = "https://randomuser.me/api/";



const getData = async()=>{
  const {data} = await axios.get(url)
  setUser(data.results[0])
}

useEffect(() => {
getData();
  
}, [])

console.log(user);

  return (
    <div className="">
      <Card user = {user}/>
      <div>

        <button className='text-center rounded d-flex mx-auto bg-danger mt-3 p-2' onClick={()=>getData()}>Random Change</button>
      </div>
    </div>
  );
}

export default App;
