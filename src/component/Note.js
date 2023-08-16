import React, {  useEffect, useState } from "react"
import "./style.css"
import {MdDelete} from "react-icons/md"
import { useNavigate } from "react-router-dom"
function Note({value,onDelete}) {

  const nviagte=useNavigate()

  useEffect(()=>{
    setvalue(value)
  },[value])

  const [value1,setvalue]=useState([])

  const [dragItem,setdragItem]=useState(null)
  const [dragOverItem,setdragOverItem]=useState(null)

  const handleSort = () => {
    //duplicate items
    let _value = [...value1];

    //remove and save the dragged item content
    const draggedItemContent = _value.splice(dragItem, 1)[0];

    //switch the position
    _value.splice(dragOverItem, 0, draggedItemContent);

    //reset the position ref
    setdragItem(null)
    setdragOverItem(null)

    //update the actual array
    setvalue(_value);

  };


  //serach
  const [search,setsearch]=useState("");
  const [list,setlist]=useState([])

  // console.log(value1)
  function handlesearch(e){

    setsearch(e.target.value)
    setlist(value1.filter(item=>item.title.includes(e.target.value)||item.content.includes(e.target.value)))

  }

  //deletefilter
  function deleteNote(id){
    setlist(list => {
      return [...list.filter((value1)=>
        value1.id !== id)]
    })
    onDelete(id)
  }

  return(
    <div>
      <input type="text" placeholder="search" onChange={handlesearch} />
      {search===""?
      value1.map((value1,index)=>{
    return(
      <div className='note' key={index} draggable
            onDragStart={(e) =>setdragItem(index)}
            onDragEnter={(e) => setdragOverItem(index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
        <h1>{value1.title}</h1>
        <p>{value1.content}</p>
        {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
        <button onClick={() => onDelete(value1.id)}><MdDelete size={25}/></button>
      </div>
    )
  }):

  list.map((value1,index)=>{
    return(
      <div className='note' key={index} draggable
            onDragStart={(e) =>setdragItem(index)}
            onDragEnter={(e) => setdragOverItem(index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
        <h1>{value1.title}</h1>
        <p>{value1.content}</p>
        {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
        <button onClick={() => deleteNote(value1.id)}><MdDelete size={25}/></button>
      </div>
    )
  })

  }

  <button onClick={()=>nviagte('/archive')}>ARCHIVE</button>
  </div>
  )
}

export default Note
