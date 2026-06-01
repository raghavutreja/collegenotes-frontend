import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import './Posts.css'
import axios from 'axios';

function Posts() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/allposts`).then((res)=>{
            setPosts(res.data);
        })
    },[])
  
  return (
    <div className="container">
        <div className="row" style={{marginTop:"50px"}} >
            <div className="col-3"></div>
            <div className="col-6 PostStyleOuter" >
                {posts.map((material,index)=>{
                    return(
                        <PostCard title={material.title} Description={material.Description} ImageLink={material.ImageLink}/>
                    );
                })}
                <PostCard title="Maths Notes" Description="Date:23/02/26" ImageLink="https://wallpaperaccess.com/full/36372.jpg" />
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Posts
