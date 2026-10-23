import { useState } from 'react'
import axios from "axios";

function App() {
  const [data, setData] = useState("Hi i am Prem Jadhav")

  function handleClick(){
    axios.get("http://localhost:3000/api")
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
