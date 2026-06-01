import React from 'react'
import upload from "../../assets/cloud-computing.png";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import shake from "../../assets/handshake.png";
import './About.css';

function About() {
  return (
    <div className="aboutkiheight">
      <div className="titleab">
        <h2 className='Abouth2' >About Us</h2>
      </div>
      <div className="parab1">
        <p>Welcome To Our College Notes</p>
      </div>
      <div className="parab">
        <p>A student-centric platform built to excel in your studies.</p>
        <p style={{marginTop:"-13px"}} >Here's what we offer:</p>
      </div>
      <div className="parts">
        <div className="partition">
          <div className="part1">
            <div className="part1img">
              <img src={upload} alt="" />
            </div>
            <div className="part1par">
              <p id="par1">Upload Notes</p>
              <p id="par2">Share your class notes with others</p>
            </div>
          </div>
          <div className="part1">
            <div className="part1img">
              <img src={search} alt="" />
            </div>
            <div className="part1par">
              <p id="par1">Find Resources</p>
              <p id="par2"> Access notes from classmates and seniors</p>
            </div>
          </div>
          <div className="part1">
            <div className="part1img">
              <img src={sort} alt="" />
            </div>
            <div className="part1par">
              <p id="par1">Organize Smartly</p>
              <p id="par2">Sort notes by subject,unit or topic</p>
            </div>
          </div>
          <div className="part1">
            <div className="part1img">
              <img src={shake} alt="" />
            </div>
            <div className="part1par">
              <p id="par1">Collaborate</p>
              <p id="par2">
                Connect with peers and work together to achieve your academic
                goals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ending">
        <h5>Why Choose Us?</h5>
        <ul>
          <li>Simple to use, with a clean interface.</li>
          <li>
            Save time during exam prep by accessing all resources in one place.
          </li>
          <li>Encourages sharing and mutual learning.</li>
        </ul>
      </div>
      <p id="endpara">
        Start your journey with us today and make studying smarter!
      </p>
    </div>
  )
}

export default About
