import React, { useEffect, useState } from 'react'
import Card from '../Papers/Card';
import '../Papers/Papers.css'
import axios from 'axios';

function Latest() {
    const [notes,setNotes]=useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/latestnotes`).then((res)=>{
            setNotes(res.data);
            console.log(res.data);
        })
    },[])
  return (
    <div className='card-outer gapclass' >
        {notes.map((material,index)=>{
            return(
            <Card title={material.title} Description={material.Description} Downloadlink={material.DownloadLink} />
            )
        })}
    </div>
  )
}

export default Latest
