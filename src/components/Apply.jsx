import React, { useEffect } from 'react';
import { initAOS } from '/src/AOS/aos.js';

export default function Apply() {
    useEffect(() => {
        initAOS(); 
      }, []);
  return (
    <div className='grid md:grid-cols-2 xl:gap-28 gap-14 lg:mt-[10rem] relative mt-20 xl:w-[90%] p-5 m-auto w-full'>
        <section>
            <h1 className='lg:text-5xl text-4xl font-bold mb-14' data-aos="fade-up">Apply in minutes,Money drop with days</h1>
            <ul className='line relative' data-aos="fade-up">
                <li className='flex'>
                    <div className='rounded-full bg-primary font-semibold text-2xl lg:w-16 lg:h-14 h-12 w-16 px-3 sm:w-12  text-center pt-3 z-10'>1</div>
                    <div className='bg-[#F8F8F8] rounded-lg lg:py-6 md:px-8 p-3 md:ml-6 ml-3'>
                        <h2 className='text-xl font-semibold lg:pb-6 pb-3'>Login or Register</h2>
                        <p>Register and fill your personal information just less than 5 minutes</p>
                    </div>
                </li>
                <li className='flex my-6'>
                    <div className='rounded-full bg-[#F8F8F8] font-semibold text-2xl lg:w-16 lg:h-14  h-12 w-16 sm:w-12 sm:h-14  px-3 text-center pt-3 z-10'>2</div>
                    <div className='rounded-lg lg:py-6 md:px-8 p-3 ml-6'>
                        <h2 className='text-xl font-semibold lg:pb-6 pb-3'>Fill in the form provided</h2>
                        <p>Register and fill your personal information just less than 5 minutes</p>
                    </div>
                </li>
                <li className='flex'>
                    <div className='rounded-full bg-[#F8F8F8] font-semibold text-2xl lg:w-16 lg:h-14  h-12 w-16 sm:w-12  px-3 text-center pt-3 z-10'>3</div>
                    <div className='rounded-lg lg:py-6 md:px-8 p-3 ml-6'>
                        <h2 className='text-xl font-semibold lg:pb-6 pb-3'>Enjoy your stable finances</h2>
                        <p>Register and fill your personal information just less than 5 minutes</p>
                    </div>
                </li>
                
            </ul>
        </section>
{/* <section>
    <h1 className='lg:text-5xl text-4xl font-bold mb-14' data-aos="fade-up">Apply in minutes, Money drop with days</h1>
    <ul className='relative z-10' data-aos="fade-up">
        <li className='flex '>
            <div className='rounded-full bg-primary font-semibold text-2xl lg:w-16 lg:h-14 h-12 w-16 px-3 text-center pt-3 z-10'>1</div>
            <div className='bg-gray-200 rounded-lg lg:py-6 md:px-8 p-3 md:ml-6 ml-3'>
                <h2 className='text-xl font-semibold lg:pb-6 pb-3'>Login or Register</h2>
                <p>Register and fill your personal information in just less than 5 minutes</p>
            </div>
        </li>
        <li className='flex my-6'>
            <div className='rounded-full bg-gray-200 font-semibold text-2xl lg:w-16 lg:h-14 h-12 w-16 px-3 text-center pt-3 z-10'>2</div>
            <div className='rounded-lg lg:py-6 md:px-8 p-3 ml-6'>
                <h2 className='text-xl font-semibold lg:pb-6 pb-3'>Fill in the provided form</h2>
                <p>Register and fill your personal information in just less than 5 minutes</p>
            </div>
        </li>
        <li className='flex '>
            <div className='rounded-full bg-gray-200 font-semibold text-2xl lg:w-16 lg:h-14 h-12 w-16 px-3 text-center pt-3 z-10'>3</div>
            <div className='rounded-lg lg:py-6 md:px-8 p-3 ml-6'>
                <h2 className='text-xl font-semibold lg:pb-6 pb-3'>Enjoy your stable finances</h2>
                <p>Register and fill your personal information in just less than 5 minutes</p>
            </div>
        </li>
    </ul>
    <div className="absolute left-[9%] top-[12%] bg-yellow-400 w-[2px] h-[18%]"></div>
</section> */}
    


        <section className=''>
          <div >
          <img src="/assets/iPhone 14 Pro Space Black Mockup.jpg" alt="" className='lg:w-[60%] md:w-[75%] m-auto'/>
          </div>
        </section>
    </div>
  )
}
