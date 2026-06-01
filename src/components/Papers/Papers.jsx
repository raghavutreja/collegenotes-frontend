import React, { useEffect, useState } from "react";
import "./Papers.css";
import Card from "./Card";
import axios from "axios";

function Papers() {
    console.log("Papers called")
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    console.log("Req received")
    axios
      .get(`${import.meta.env.VITE_API_URL}/allnotes`)
      .then((res) => {
        console.log(res.data)
        setAllNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row rowmargin ">
        <div className="card-outer">
          <Card
            title="Maths"
            Description="MAths Sample Papers"
            Downloadlink="jkdsbjsfbhesipfhe"
          />
          {allNotes.map((material, index) => {
            return (
              <Card
                title={material.title}
                Description={material.Description}
                Downloadlink={material.DownloadLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Papers;
