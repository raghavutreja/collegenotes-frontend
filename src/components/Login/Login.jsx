import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [error,setError]=useState("");
  const [username, setUsernmae] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try{
    setError("");
    e.preventDefault();
   const res= await axios.post(
      `${import.meta.env.VITE_API_URL}/login`,
      {
        username,
        password,
      },
      {
        withCredentials: true,
      },
    );
    localStorage.setItem("role",res.data.role);
    navigate("/home");
  }catch(err){
    setError("Credentials Must Be Correct")
  }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleLogin} >
            <div className="inner">
              <p id="uploadhead">Login</p>
              <div className="emailid">
                <label htmlFor="username">Username:</label>
                <input
                onChange={(e)=>setUsernmae(e.target.value)}
                value={username}
                  required
                  type="text"
                  id="username"
                  placeholder=""
                />
              </div>
              <div className="emailpass">
                <label htmlFor="emailpass">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} required type="password" id="emailpass" />
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
              <input type="submit" value="Login" id="Logins" />
              <p>
                New Here! Glad To See You.{" "}
                <NavLink to="/Register" className="RegisterLink">
                  Register here
                </NavLink>
              </p>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Login;
