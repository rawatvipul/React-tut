import React, { useState } from 'react';
import './App.css';
import Student from './Student';
function App()
{
  const [data, setData] = useState(10)
  const [count, setCount] = useState(100)
  
  return(
    <div>
      
      <Student count = {count} data={data}/>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}

export default App;
