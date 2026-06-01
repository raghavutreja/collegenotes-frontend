import React from "react";

import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footmain mt-5 ">
      <h1 id="foothe">Our College Notes</h1>
      <ul>
        <NavLink to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>About</li>
        </NavLink>
        <NavLink to="/">
          <li>Login</li>
        </NavLink>
        <NavLink to="/register">
          {" "}
          <li>Register</li>
        </NavLink>
         
      </ul>
      <p style={{color:"rgba(53,70,86)"}} >
        <b>&copy; 2025 Our College Notes</b>
      </p>

      <a
      style={{marginLeft:"14px"}}
        target="_blank"
        className="RegisterLink"
        rel="noopener noreferrer"
        href="https://drive.google.com/drive/folders/1rMzC7O97zSZq6_cQdB5iQRA2MDoxz7GN?usp=drive_link"
      >
        Syllabus
      </a>
    </div>
  );
}

export default Footer;
