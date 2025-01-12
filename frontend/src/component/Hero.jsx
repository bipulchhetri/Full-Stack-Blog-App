import React from 'react';
import heroImg from "../images/hero.gif"

const Hero = () => {
  return (
    <>
      <div className="hero flex items-center justify-between px-[100px]" style={{ height: "calc(100vh - 100px)" }}>
        <div className="left w-[50%]">
          <h3 className='text-[60px]' style={{lineHeight:1}}>Unlock the Secrets to <span className='sp-text'>Masterful</span> Programming Here.</h3>
          <div className="flex mt-6 items-center gap-[15px]">
          <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Blue</button>

          </div>
        </div>
        <div className="right w-[50%]">
          <img className='rounded-[20px] w-full' src={heroImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero