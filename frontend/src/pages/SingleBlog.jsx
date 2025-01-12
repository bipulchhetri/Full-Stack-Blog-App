import React from 'react'
import Navbar from '../component/Navbar'

const SingleBlog = () => {
  return (
    <>
    <Navbar/>
    <div className='single-blog px-[100px] mt-4'>
<div className="flex w-full min-h-[400px] bg-red">
    <div className='left w-[40%] h-full pt-5'>
        <img className='w-full rounded-lg' src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png" alt="" />
    </div>
    <div className='ml-4 '>
        <h2 className='text-3xl font-[500]'>Learn English</h2>
        <p className='text-[gray] text-[14px] mt-3'>created:12-01-25</p>
        <p className='font-bold'>Description</p>
        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe illo provident perspiciatis temporibus id minima culpa fuga possimus est.</p>
    </div>
</div>
    </div>
    </>
  )
}

export default SingleBlog