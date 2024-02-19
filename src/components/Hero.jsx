import React, { useState } from 'react'
import Header from './Header'
import Nav from './Nav'


export default function Hero({isModalOpen,setIsModalOpen}) {

  return (
  <>
   <div className='p-5 py-5 bg-black'>
    <Nav isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    <Header/>
   
   </div>
   
  </>
  
  )
}
