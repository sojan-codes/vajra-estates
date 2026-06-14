import React from 'react'
import { assets } from '../assets/assets.js'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div id='Home' className='h-screen w-full bg-cover bg-center' style={{ backgroundImage: `url("${assets.header_img}")` }}>
      <div className="h-screen bg-black/50">
        <Navbar />
        <div className="flex flex-col p-7 h-1/2 gap-8 mt-15 justify-center items-center md:gap-10">
          <motion.h1 className='text-[#F0E5D6] text-4xl font-semibold md:font-semibold md:text-6xl md:w-200 md:text-center mt-20'
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >Where Heritage Finds a Home</motion.h1>
          <motion.div className="flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <a href='#Projects' className='text-[#F0E5D6] border py-3 px-8 rounded md:text-xl md:px-9 cursor-pointer active:scale-99'>Projects</a>
            <a href='#Contact' className='bg-[#F0E5D6] text-black border py-3 px-8 rounded md:text-xl md:px-9 cursor-pointer active:scale-99'>Contact Us</a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
// #F0E5D6

export default Header
