import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-cover bg-center flex flex-col gap-3' style={{ backgroundImage: `url(${assets.red_bg})` }}>
            <div className='px-5 py-3 flex flex-col gap-3 lg:flex-row md:px-15 md:py-5'>
                <div className="text-[#EDD9B8] flex flex-col gap-2 lg:w-1/2">
                    <img src={assets.logo_img} className="h-18 self-start" />
                    <p className='font-light'>Building more than homes — creating places where life unfolds, memories are made, and futures begin.</p>
                </div>
                <div className="text-[#EDD9B8] lg:w-1/3">
                    <h1 className='font-semibold lg:text-xl'>Company</h1>
                    <ul className='flex flex-col lg:gap-2 lg:mt-2'>
                        <span><a href="#Header" className='font-light'>Home</a></span>
                        <span><a href="#About" className='font-light'>About</a></span>
                        <span><a href="#Contact" className='font-light'>Contact</a></span>
                    </ul>
                </div>
                <div className="text-[#EDD9B8] flex flex-col gap-1 lg:w-1/2">
                    <h1 className='font-semibold lg:text-xl'>Subscribe to our newsletter</h1>
                    <p className='font-light'>Be the first to discover new projects, exclusive offers, and industry insights.</p>
                    <form className="mt-1 md:w-3/4 flex">
                        <input name='Email' type="email" placeholder='Enter your Email' className='border px-3 py-2 rounded outline-none bg-[#F0E5D6] md:py-2 text-black md:w-full' required/>
                        <button className='bg-cover bg-center text-[#F0E5D6] border py-2 px-5 rounded md:px-4 cursor-pointer active:scale-99'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="border-t border-[#F0E5D6] text-[#F0E5D6] font-light text-sm px-10 text-center py-2">© 2026 Sojan Buddhacharya. All Rights Reserved.</div>
        </div>
    )
}

export default Footer
