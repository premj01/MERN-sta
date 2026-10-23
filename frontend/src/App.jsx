import { useState } from 'react'
import axios from "axios";

function App() {
  const [data, setData] = useState("Hi i am Prem Jadhav")

  function handleClick(){
    axios.get("https://mern-sta.onrender.com/api")
          .then((res)=>{
            setData(res.data.message);
            
          }).catch((err)=>{
            console.log(err);
            
          })
  }

  return (
    <div>
        <h1>{data}</h1>
        <button onClick={handleClick} >Change</button>
    
    </div>
  )
}

export default App
