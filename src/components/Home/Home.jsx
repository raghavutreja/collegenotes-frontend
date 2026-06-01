import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import Latest from '../Latest/Latest'

function Home() {
  return (
    <div className='container' >
        <div className="row">
            <div className="homepage">
            <h1 className='homepageh' >
                Our College Notes
            </h1>
            <div className="homekapara">
         <p className='homekap'> 
            Find daily notes and important questions for your 
          </p> 
           <p style={{marginTop:"-20px"}} >college courses.
        </p>
            
        </div>
        <NavLink to='/daily' >
            <button className='view'>
            View Notes
        </button>
        </NavLink>
            </div>
            <h2 className='aligncenter' >
                LATEST NOTES
            </h2>
            <Latest/>
        </div>
    </div>
  )
}

export default Home
