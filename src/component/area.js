import React, { useEffect, useState } from 'react'
import "./style.css"
import { IoIosAdd } from 'react-icons/io';

export default function Area({onAdd,onArchiveAdd}) {


    const [isExpanded, setExpanded] = useState(false)
    const [imgfile, uploading] = useState("")


    useEffect(()=>{
        setNote(preValue => {
            return {
                ...preValue,
                imgfile: imgfile,
            }
        })
    },[imgfile])


    function imgfilehandler(e){
        if(e.target.files.length !== 0){
        uploading(URL.createObjectURL(e.target.files[0]))
    }
}

    const [note, setNote] = useState({
        title: "",
        content: "",
        imgfile:"",
        id:0
    })

    function handleChange(e){
        const{name, value} = e.target
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    function submitButton(i){
        onAdd(note)
        setNote({
            title: "",
            content: "",
            imgfile:""
        })
        i.preventDefault()
    }

    function handedExpanded(){
        setExpanded(true)
    }

    //archiveadd
    function submitButtonArchive(i){
        onArchiveAdd(note)
        setNote({
            title: "",
            content: "",
            imgfile:""
        })
        i.preventDefault()
    }

  return (
    <div>
        <form>
            {isExpanded && (<input value={note.title} type='text' placeholder='Title' name="title" onChange={handleChange}/>)}
            <p>
                <textarea onClick={handedExpanded} value={note.content} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded ? 2: 1}></textarea>
            </p>
            <button className='button1' onClick={submitButton}><IoIosAdd size={35}/></button>
            <input className='button2' type='file' onChange={imgfilehandler} />
            <button className='button3' onClick={submitButtonArchive}>A</button>
        </form>
    </div>
  );
}