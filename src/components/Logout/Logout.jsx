import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Logout() {
    const navigate=useNavigate();
     const handleLogout=async()=>{
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/logout`,{
                withCredentials:true,
            })
            localStorage.removeItem("role");
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    }
  return (
   <>
    handleLogout()
   </>
  )
}

export default Logout
