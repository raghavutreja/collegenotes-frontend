import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("role");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const role = localStorage.getItem("role");
  console.log("role from localstorage", role);
  console.log("Type", typeof role);
  return (
    <div className="container-fluid">
      <div className="row ">
        <nav className="navbar bg-body-tertiary">
          <div className=" mt-3 container-fluid">
            <NavLink to="/home">
              {" "}
              <b className="navbar-brand LogoEdit "> OUR COLLEGE NOTES </b>{" "}
            </NavLink>
            <ul className="Desktop">
              {role === "admin" && (
                <>
                  <NavLink to="/uploadnotes">
                    <li>Pdfs</li>
                  </NavLink>
                  <NavLink to="/uploaddailyposts">
                    {" "}
                    <li>Posts</li>
                  </NavLink>
                </>
              )}
              <NavLink to="/home">
                <li>Home</li>
              </NavLink>
              <NavLink to="/papers">
                {" "}
                <li>Papers</li>
              </NavLink>
              <NavLink to="/daily">
                <li>Daily</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              {!role ? (
                <>
                  <NavLink to="/">
                    {" "}
                    <li>Login</li>{" "}
                  </NavLink>
                </>
              ) : (
                <button id="handleLogout" onClick={handleLogout}>
                  {" "}
                  <li>Logout</li>{" "}
                </button>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
