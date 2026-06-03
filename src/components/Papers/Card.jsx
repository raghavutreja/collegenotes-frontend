import React from 'react'
import './Papers.css'
import axios from 'axios'

function Card({title, Description ,Downloadlink}) {
   const role=localStorage.getItem("role");
  const handleDelete=()=>{
    try{
    console.log("Delete clicked")
    alert("Delete Done Please Refresh the Page")
    axios.delete(`${import.meta.env.VITE_API_URL}/delpaper/${title}`).then(()=>{
      console.log("Deleted Successfully");
      
    })}catch(err){
      console.log(err);
    }
   
  }
  return (
    <div className='CardOuterBorder' >
      <h6>{title}</h6>
      <p>{Description}</p>
      <a href={Downloadlink} target='_blank' > Download </a>
      {
        role==="admin"?
             <button onClick={handleDelete} style={{marginLeft:"30px",textDecoration:"none",borderRadius:"10px",border:"0.5px solid black",color:"white",backgroundColor:"rgb(53,70,86)"}} >Delete</button>
 :<p></p>
      }
      </div>
  )
}

export default Card
