import React from 'react'
import './Posts.css'

function PostCard({title,Description,ImageLink}) {
  return (
    <div className='PostStyle' >
      <h3>{title}</h3>
      <p>{Description}</p>
      <img style={{width:"100%"}} src={ImageLink} alt="Image Not Loaded Properly PLease Try Again Later" />
    </div>
  )
}

export default PostCard
