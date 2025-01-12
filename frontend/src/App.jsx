import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import SingleBlog from './pages/SingleBlog';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blogs" element={<SingleBlog/>} />
        <Route path="/singup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>

          <Route path="*" element={<Nopage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App