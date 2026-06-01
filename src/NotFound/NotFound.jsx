import React from 'react'

function NotFound() {
  return (
    <div style={{marginTop:"10%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}} >
        <div style={{border:"1px solid red",padding:"30px",borderRadius:"20px",backgroundColor:"rgb(255,174,174)"}} > 
             <h1>404-Page Not Found</h1>
     <b> <p style={{marginLeft:"22px",color:"yellow"}} >The Page You Are Looking For Doesnot Exists</p>
 </b>
        </div>
     
    </div>
  )
}

export default NotFound
