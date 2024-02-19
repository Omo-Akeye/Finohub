


export default function Header() {
 
  return (
    <div className='grid lg:grid-cols-[1.2fr,1fr] sm:grid-cols-[1.2fr,1fr] items-center text-white xl:w-[90%] w-full m-auto lg:mt-24 md:mt-16 mt-12 md:gap-6 lg:gap-16 gap-10 '>
    <div > 
        <h1   className='text-4xl font-semibold text-left md:text-5xl xl:text-7xl lg:text-6xl'>
        There's no <span  className='line-through'>peace</span> <span className='text-primary '>wellness </span>without <span className='underline'>financial <br className="none"/> wellness </span>
        </h1>
        <p className='py-5 text-xl lg:py-10 md:text-2xl'>A simple, easy to use app that can get you a loan with just few taps. lets make your dream real.</p>
        <div className='bg-primary rounded-[8px] text-black md:px-8 py-4 md:w-3/6 w-[40%]  text-center hover:bg-[#BBCF17]'>Join FinoHub</div>
    </div>

   <div className="w-full h-full ">
    <main className="text-right">
      <img src="/assets/Group 1686.png" alt="" className='lg:w-[85%] inline-block'/>
    </main>
   </div>
</div>
  )
}
