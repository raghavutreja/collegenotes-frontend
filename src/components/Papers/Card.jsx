import React from 'react'
import './Papers.css'

function Card({title, Description ,Downloadlink}) {
  return (
    <div className='CardOuterBorder' >
      <h6>{title}</h6>
      <p>{Description}</p>
      <a href={Downloadlink} target='_blank' > Download </a>
    </div>
  )
}

export default Card
