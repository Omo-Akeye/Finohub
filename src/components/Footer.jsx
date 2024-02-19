import React from 'react'

export default function Footer() {
  return (
    <div className='absolute w-full -mt-48 text-white bg-black'>
      <main className='lg:w-[80%] w-[90%]  m-auto'>
      <section className='pt-60 md:flex '>
                <div className='mb-7' >
                    <img src="/assets/Logo Name.svg" alt="" />
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur. Pharetra sed <br />et quis vitae quam massa mattis sed vivamus.</p>
                </div>
            <ul className='flex justify-between'>
                <li>
                    <h2 className='text-xl'>About</h2>
                    <ul>
                        <li className='py-4 md:py-6'>
                            <a href="#">About</a>
                        </li>
                        <li className='py-4 md:py-6'>
                            <a href="#">Blog</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Career</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className='text-xl'>Support</h2>
                    <ul>
                        <li className='py-6'>
                            <a href="#">Contact Us</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Online Chat</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Whatsapp</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h2 className='text-xl'>FAQ</h2>
                    <ul>
                        <li className='py-6'>
                            <a href="#">Accounts</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Copyrights</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Language</a>
                        </li>
                        <li className='py-6'>
                            <a href="#">Return</a>
                        </li>
                    </ul>
                </li>
                

            </ul>
        </section>
        <section className='justify-between pb-12 m-auto md:flex md:pt-24'>
            <div>© 2024 <a href="https://github.com/Omo-Akeye">Akeye</a> All rights reserved.</div>
            <div className='flex pt-4'>
                <a href="#">
                    <img src="/assets/Social icon.svg" alt="" />
                </a>
                <a href="#" className='px-5'>
                    <img src="/assets/Social icon (1).svg" alt="" />
                </a>
                <a href="#">
                    <img src="/assets/Social icon (2).svg" alt="" />
                </a>
                <a href="#" className='px-5'>
                    <img src="/assets/ball-socials.svg" alt="" />
                </a>
                <a href="#">
                    <img src="/assets/github.svg" alt="" />
                </a>
                <a href="#" className='pl-5'>
                    <img src="/assets/thumbs-socials.svg" alt="" />
                </a>
            </div>
        </section>
      </main>
    </div>
  )
}
