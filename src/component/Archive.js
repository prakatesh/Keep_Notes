import React from 'react'
import {MdDelete} from "react-icons/md"
import { useNavigate } from 'react-router-dom'

function Archive({value,onDelete}) {
    const navigate=useNavigate()
    return(
        <div>
            {value.map((value1,index)=>{
        return(
        <div className='note' key={index} >
            <h1>{value1.title}</h1>
            <p>{value1.content}</p>
            {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
            <button onClick={() => onDelete(value1.id)}><MdDelete size={25}/></button>
        </div>
        )
      })}
      <button onClick={()=>navigate('/')}>home</button>
        </div>
    )
}

export default Archive
