import React, { useEffect } from 'react';

function Student(props)
{
  useEffect(()=>{
    console.log("Called with data State")
  },[props.data])
  return(
    <div>
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>
    </div>
  )
}

export default Student;
