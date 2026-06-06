import React from 'react'
import { assets } from '../assets/assets.js'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='Header' className='h-screen w-full bg-cover bg-center' style={{ backgroundImage: `url("${assets.header_img}")` }}>
      <div className="h-screen bg-black/50">
        <Navbar />
        <div className="flex flex-col p-7 h-1/2 gap-8 mt-15 justify-center items-center md:gap-10">
          <h1 className='text-[#F0E5D6] text-4xl font-semibold md:font-semibold md:text-6xl md:w-200 md:text-center mt-20'>Where Heritage Finds a Home</h1>
          <div className="flex gap-5">
            <a href='#Project' className='text-[#F0E5D6] border py-3 px-8 rounded md:text-xl md:px-9 cursor-pointer active:scale-99'>Projects</a>
            <a href='#Contact' className='bg-[#F0E5D6] text-black border py-3 px-8 rounded md:text-xl md:px-9 cursor-pointer active:scale-99'>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
// #F0E5D6

export default Header
