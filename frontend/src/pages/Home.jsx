import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Blogs from '../component/Blogs'
import Footer from '../component/Footer'
import SignUp from './SignUp'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Blogs/>
      
      <Footer/>
    </div>
  )
}

export default Home