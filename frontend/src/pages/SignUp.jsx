import React, { useState } from 'react'
import logo from '../images/logo.png'
import'../App.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("");

    const submit=(e)=>{
        
e.preventDefault();
    }
  return (
  <>
  <div className='container flex flex-col items-center justify-center h-screen bg-[#131313} text-white'>
<form onSubmit={submit} className='w-[45w] min-h-[40vh] bg-[#0000] rounded-2xl p-5 flex flex-col items-center'>
<img className=" w-[240px] h-[80px] object-cover  "src={logo} alt="" />
<div className='w-full'>
    <p className='text-[gray] '>Username</p>
    <div className="input-box">
        <input onChange={(e) => { setUsername(e.target.value) }} value={username}  type="text" name="username" id="name" placeholder='Usesrname' required />
    </div>
    <p className='text-[gray]'>Name</p>
    <div className="input-box">
        <input onChange={(e) => { setName(e.target.value) }} value={name}  type="text" name="name" id="username" placeholder='Name' required />
    </div>
    <p className='text-[gray] '>Email</p>
    <div className="input-box">
        <input onChange={(e) => { setEmail(e.target.value) }} value={email}  type="email" name="email" id="email" placeholder='Email' required />
    </div>
    <p className='text-[gray]'>Password</p>
    <div className="input-box">
        <input onChange={(e) => { setPwd(e.target.value) }} value={pwd}  type="password" name="password" id="password" placeholder='Password' required />
    </div>
    <p className='mt-5'>Already have and account? <Link to="/login"><span className='text-purple-400 font-bold underline'>Login</span></Link></p>
    <p className='text-[14px] text-red-500 mt-1 mb-3'>{error}</p>

<button className='mt-5 bg-purple-700 p-3 pl-10 pr-10 rounded-md w-full'>Singup</button>
</div>
</form>
  </div>
 
  </>
  )
}

export default SignUp