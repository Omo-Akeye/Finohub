import React from 'react'

export default function Nav({isModalOpen,setIsModalOpen}) {
  return (
    <>
    <div className='flex justify-between xl:w-[90%] m-auto text-[#F8F8F8] items-center'>
      <div>
          <a href="#"><img src="/assets/Logo Name.svg" alt="" /></a>
      </div>
      <ul className='hidden md:flex'>
          <li className='border-b border-transparent hover:border-primary'><a href="#">Features</a></li>
          <li className='px-16'><a href="#" className='border-b border-transparent hover:border-primary'>Community</a></li>
          <li className='border-b border-transparent hover:border-primary'><a href="#">Help</a></li>
      </ul>
      <div className='bg-primary rounded-[8px] text-black px-8 py-4 hidden md:flex cursor-pointer hover:bg-primary'>Join FinoHub</div>
      <div className='md:hidden'>
      <i className="text-3xl text-white cursor-pointer fa-solid fa-bars" onClick={(e)=>setIsModalOpen(!isModalOpen)}></i>
      </div>
  </div>
  </>
  )
}
