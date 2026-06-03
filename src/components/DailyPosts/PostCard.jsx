import React from "react";
import "./Posts.css";
import axios from "axios";

function PostCard({ title, Description, ImageLink }) {
   const role=localStorage.getItem("role");
  const handleDeletePost=async()=>{
    alert("Delete Done Successfully Please Refresh the Page!")
    await axios.delete(`${import.meta.env.VITE_API_URL}/deletepost/${title}`).then(()=>{
      console.log("deleted Successfully")
    })
  }
  return (
    <div className="PostStyle">
      <h3>{title}</h3>
      <p>{Description} {
          role==="admin"?
            <button
        onClick={handleDeletePost}
        style={{
          marginLeft:"10%",
          textDecoration: "none",
          borderRadius: "10px",
          border: "0.5px solid black",
          color: "white",
          backgroundColor: "rgb(53,70,86)",
        }}
      >
        Delete
      </button>: <p></p>
        } </p>{" "}
     
      <img
        style={{ width: "100%" }}
        src={ImageLink}
        alt="Image Not Loaded Properly PLease Try Again Later"
      />
    </div>
  );
}

export default PostCard;
