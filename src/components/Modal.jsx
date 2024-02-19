import React from 'react'

export default function Modal({isModalOpen,setIsModalOpen}) {
  return (
    <div className='fixed top-0 bottom-0 z-30 w-full text-white transition-all duration-500 ease-in -right-full"'>
        <div className="w-[80%] m-auto relative">
        <i className="absolute right-0 mt-10 text-2xl cursor-pointer fa-solid fa-xmark" onClick={(e)=>setIsModalOpen(!isModalOpen)}></i>
        </div>
       <nav className='flex items-center justify-center w-full h-full min-h-screen bg-black'>
        <ul className='text-center'>
          <li className='mb-5 text-2xl hover:text-primary'><a href="/">Home</a></li>
          <li className='mb-5 text-2xl  hover:text-primary'><a href="#">Features</a></li>
          <li className='mb-5 text-2xl  hover:text-primary'><a href="#" className=''>Community</a></li>
          <li className='mb-5 text-2xl  hover:text-primary'><a href="#">Help</a></li>
          <li><div className='bg-primary rounded-[8px] text-black md:px-8 py-4  text-center hover:bg-[#BBCF17]'>Join FinoHub</div></li>
      </ul>
       </nav>
    </div>
  )
}
