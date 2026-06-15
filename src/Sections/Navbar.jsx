import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'
import { motion } from "motion/react"
import { a } from 'framer-motion/client';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [showMenu])
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <motion.nav className='flex justify-between items-center px-4 py-2 md:px-15 md:py-3 w-full'
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                exit={{duration: 0.01}}
                viewport={{ once: true }}
                >
                <img src={assets.logo_img} className="h-18 md:h-20 w-auto" loading="lazy"/>
                <ul className='hidden md:flex gap-6 text-xl font-sm text-[#F8F4E9]'>
                    <a href="#Home" className=''>Home</a>
                    <a href="#About" className=''>About</a>
                    <a href="#Projects" className=''>Projects</a>
                    <a href="#Testimonials" className=''>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-[#410D07] text-white px-6 py-2 border border-yellow-700 rounded font-small shadow-md cursor-pointer active:scale-99'>Sign Up</button>
                <img src={assets.menu_icon} className="md:hidden h-6 w-auto" onClick={() => {
                    setShowMenu(true)
                }} loading="lazy"/>
                <div className={`bg-[#F0E5D6] fixed right-0 top-0 bottom-0 transition-transform duration-300 z-111 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-9 flex justify-end">
                        <img src={assets.cross_icon} className="h-6" onClick={() => {
                            setShowMenu(false)
                        }} />
                    </div>
                    <ul className='flex flex-col gap-8 text-2xl px-9 py-4 font-light mt-15'>
                        {
                            ['Home','About','Projects','Testimonials'].map((value, idx) => {
                                return <motion.a key={idx} href={`#${value}`} onClick={() => {setShowMenu(false)}}
                                initial={{opacity:0, x:40}}
                                whileInView={{opacity:1, x:0}}
                                transition={{duration:0.4, delay: idx * 0.15}}
                                >{value}</motion.a>
                            }) 
                        }
                    </ul>
                    <button className='bg-[#410D07] text-white px-5 py-2 border border-yellow-700 rounded font-small shadow-md cursor-pointer active:scale-99 fixed bottom-5 left-1/2 -translate-x-1/2 '>Sign Up</button>
                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar
