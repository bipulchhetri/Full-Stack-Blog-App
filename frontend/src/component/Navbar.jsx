import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
   <>
   <div className="navbar flex justify-between items-center bg-[#ocococ] overflow-hidden">
     <div className='logo'>
        <img className='w-[240px]' src={logo} alt=""/>
    </div>
    <div className="links flex items-center gap-[20px] mr-20">
        <Link to="/" className='navlink active'>Home</Link>
        <Link to="/blogs" className='navlink hover'>Blogs</Link>
        <Link className='navlink'>Service</Link>
        <Link className='navlink'>About</Link>
        <Link className='navlink'>Contact</Link>

    </div>
   </div>
   </>
  )
}

export default Navbar