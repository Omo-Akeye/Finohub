import React, { useEffect } from 'react';
import { initAOS } from '/src/AOS/aos.js';

export default function Experience() {
    useEffect(() => {
        initAOS(); 
      }, []);
  return (
    <div className='xl:w-[90%] p-5 m-auto md:mt-10 lg:mt-20 w-full'> 
    
    <section className='grid gap-6 md:grid-cols-2'  data-aos="fade-up">     
    <h2 className='text-[#151515] md:text-4xl font-semibold lg:text-5xl lg:leading-[60px] text-3xl text-center md:text-left'>
          Financial Experience built to help small businesses stay in business
          </h2>
          
          <p className='text-[#515151] md:text-xl text-balance'>Finohub was built from scratch to inspire new embedded finances experiences. We provide the products and tools you need to grow your revenue and build your brand</p>
    </section>

    <main className='grid items-center mt-10 md:grid-cols-2 lg:gap-24 'data-aos="fade-up">
        <article className='grid grid-cols-2 text-white '>
            
            <div className='box1 lg:w-[270px]  rounded-[30px] mb-8 lg:h-[152px] md:w-full sm:w-[80%] bg-black text-left px-8'>
             <div>
               <h3 className='mt-4 text-5xl font-bold'>10X</h3>
                <p className='md:text-xl '>Increases in productivity</p>
             </div>
            </div>
            <div className='box1 lg:w-[270px] rounded-[30px] mb-8 lg:h-[152px] w-full bg-black text-left px-8'>
               <div className='my-4'>
               <h3 className='mt-4 text-5xl font-bold'>250K</h3>
                <p className='md:text-xl'>Registered <br />Business</p>
               </div>
            </div>
            <div className='box1 lg:w-[270px] rounded-[30px] mb-8 lg:h-[152px] w-full bg-black text-left px-8'>
                <div>
                <h3 className='mt-4 text-5xl font-bold '>85%</h3>
                <p className='md:text-xl '>Revenue <br />Growth</p>
                </div>
            </div>
            <div className='box1 lg:w-[270px] rounded-[30px] mb-8 lg:h-[152px] w-full bg-black text-left px-8'>
      <div className='mb-3'>
      <h3 className='mt-4 text-5xl font-bold '>600+</h3>
                <p className='md:text-xl '>Billion loan <br /> per month</p>
      </div>
            </div>
            
        </article>


        <div className='grid grid-cols-2 gap-3 lg:gap-5' data-aos="fade-up">
            <section>
                <img src="/assets/Vectorr.svg" alt="" />
                <h3 className='my-2 text-xl font-semibold lg:my-4 lg:text-2xl'>Streamlined Launch</h3>
                <p >We make designing your workflow easy. The simple, customizable interactive board is user friendly, and super flexible.</p>
            </section>
            <section>
                <img src="/assets/Vector (1).svg" alt="" />
                <h3 className='my-2 text-xl font-semibold lg:my-4 lg:text-2xl'>Built for Growth</h3>
                <p >We make designing your workflow easy. The simple, customizable interactive board is user friendly, and super flexible.</p>
            </section>
            <section className='lg:mt-12'>
                <img src="/assets/Vector (2).svg" alt="" />
                <h3 className='my-2 text-xl font-semibold lg:my-4 lg:text-2xl'>Constant Workflow</h3>
                <p >We make designing your workflow easy. The simple, customizable interactive board is user friendly, and super flexible.</p>
            </section>
            <section className='lg:mt-12'>
                <img src="/assets/Vector (3).svg" alt="" />
                <h3 className='my-2 text-xl font-semibold lg:my-4 lg:text-2xl'>Seamless Integration</h3>
                <p >We make designing your workflow easy. The simple, customizable interactive board is user friendly, and super flexible.</p>
            </section>
           
        </div>
    </main>
    </div>
  )
}
