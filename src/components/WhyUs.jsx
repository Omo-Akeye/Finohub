import React, { useEffect } from 'react';
import { initAOS } from '/src/AOS/aos.js';

export default function WhyUs() {
    useEffect(() => {
        initAOS(); 
      }, []);
  return (
    <div className='xl:w-[90%] p-5 m-auto  mt-20 relative'>
        <main className='grid items-center md:grid-cols-2 xl:gap-28 gap-14'>
            <section className='m-auto'>
              
                <img src="/assets/Image.jpg" alt="" />
            </section>
            <section  data-aos="fade-up">
                <h1 className='mb-10 text-3xl font-bold md:text-5xl'>We are here to help you for every of your needs.</h1>
                <p >Finohub was built from scratch to inspire new embedded finances experiences. We provide the products and tools you need to grow your revenue and build your brandd </p>
            </section>

            <section  data-aos="fade-up">
                <h1 className='mb-10 text-3xl font-bold md:text-5xl'>With us, you get the best loan experience possible</h1>
                <p >Finohub was built from scratch to inspire new embedded finances experiences. We provide the products and tools you need to grow your revenue and build your brandd  </p>
            </section>
            <section className=' m-auto'>
            
                <img src="/assets/Images 2.png" alt="" />
            </section>
            
        </main>
               <div className='absolute top-[45%] left-[33%] hidden lg:block'>
                <img src="/assets/Vector.svg" alt="" className='w-[80%]' />
               </div>
    </div>
  )
}
