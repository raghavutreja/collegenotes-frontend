import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function UploadDaily() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [link, setLink] = useState(null);
    const navigate=useNavigate();
    

  const handlePost = async(e) => {
    e.preventDefault()
    try{
        const formData= new FormData()
        formData.append("title", title);
    formData.append("Description", Description);
    formData.append("image", link);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/addpost`, 
      formData,
    );
    console.log(res.data)
    setTitle("");
    setDescription("");
    setLink(null);
    navigate("/daily")
}catch(err){
    console.log(err.msg);
}
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handlePost}>
            <div className="inner">
              <p id="uploadhead">Upload Post</p>
              <div className="emailid">
                <label htmlFor="titleNotes">Title:</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                  type="text"
                  id="titleNotes"
                  placeholder=""
                />
              </div>
              <div className="emailpass">
                <label htmlFor="DescriptionNotes">Description:</label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={Description}
                  required
                  type="text"
                  id="DescriptionNotes"
                />
              </div>
              <div className="noteslink">
                <label htmlFor="LinkNotes">Image:</label>
                <input
                  onChange={(e) => setLink(e.target.files[0])}
                  required
                  type="file"
                  id="LinkNotes"
                />
              </div>
              <button
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
                id="Logins"
              >
                {" "}
                Upload
              </button>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default UploadDaily;
