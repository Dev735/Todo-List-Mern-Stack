import React, { useState } from 'react'
import axios from 'axios'
export default function Create() {

const [task,setTask]=useState([]);

const hanldeAdd=()=>{
axios.post('http://localhost:3001/add',{task:task})
.then(result => {
  location.reload()
})
.catch(err => console.log(err))
}

  return (
    <div className='create_form'>
      <input type="text" placeholder='Enter Text Here...'  onChange={(e)=> setTask(e.target.value)}/>
    <button type='button' onClick={hanldeAdd}>Add</button>
    </div>
  )
}
