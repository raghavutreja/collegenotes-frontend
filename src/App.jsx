import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Papers from './components/Papers/Papers';
import Posts from './components/DailyPosts/Posts';
import UploadPapers from './components/UplosdNotes/UploadPapers';
import UploadDaily from './components/UploadPosts/UploadDaily';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/uploaddailyposts' element={<UploadDaily/> }/>
        <Route path='/uploadnotes' element={<UploadPapers/> }/>
        <Route path='/' element={<Login/> }/>
        <Route path='/register' element={<Register/> }/>
        <Route path='/home' element={<Home/> }/>
        <Route path='/daily' element={<Posts/> }/>
        <Route path='/about' element={<About/> }/>
        <Route path='/papers' element={<Papers/> }/>
        <Route path='*' element={<NotFound/> }  />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
