import React, { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate=useNavigate();
  const [error,setError]=useState("")
  const [username,setUsername]=useState("");
  const [rollno,setRollno]=useState(1);
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      setError("");
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`,{
        username,
        rollno,
        email,
        pass
      },{
        withCredentials:true
      });
      localStorage.setItem("role","user")
      navigate("/home");
    }catch(err){
      setError(`Try Changing Username & Email ,Also make sure your RollNo is not used before     " ${err.response.data.message}"`)
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleSubmit} >
            <div className="inner">
              <p id="uploadhead">Register Here</p>
              <div className="fullname">
                <label htmlFor="Name">Full Name:</label>
                <input onChange={(e)=>setUsername(e.target.value)} value={username} required type="text" />
              </div>
              <div className="roll">
                <label htmlFor="Rollno">Class Roll Number:</label>
                <input onChange={(e)=>setRollno(e.target.value)} value={rollno} required type="number" placeholder="ex.5163" />
              </div>
              <div className="emailid">
                <label htmlFor="emailid">Email:</label>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                  required
                  type="email"
                  id="emailid"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="emailpass">
                <label htmlFor="emailpass">Password:</label>
                <input onChange={(e)=>setPass(e.target.value)} value={pass} required type="password" id="emailpass" />
              </div>
              {error && (
                <p
                  style={{
                    color: "red",
                    marginTop: "10px",
                  }}
                >
                  {error}
                </p>
              )}
              <input type="submit" value="Register" id="Regis" />
              <p>
                Already have an account,&nbsp;{" "}
                <NavLink to="/" className="RegisterLink" >Login Here</NavLink>{" "}
              </p>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Register;
