import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function UploadPapers() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/addnotes`,
        {
          title: title,
          Description: Description,
          DownloadLink: link,
        },
      );
      console.log(res.data);
      setTitle("");
      setDescription("");
      setLink("");
      navigate("/papers");
    } catch (err) {
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
              <p id="uploadhead">Upload New Notes</p>
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
                <label htmlFor="LinkNotes">NotesLink:</label>
                <input
                  onChange={(e) => setLink(e.target.value)}
                  value={link}
                  required
                  type="text"
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

export default UploadPapers;
