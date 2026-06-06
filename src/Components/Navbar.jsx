import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'

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
        <div>
            <nav className='flex justify-between items-center px-4 py-2 md:px-15 md:py-3'>
                <img src={assets.logo_img} className="h-18 md:h-20 w-auto" />
                <ul className='hidden md:flex gap-6 text-xl font-sm text-[#F8F4E9]'>
                    <a href="#Header" className=''>Home</a>
                    <a href="#About" className=''>About</a>
                    <a href="#Project" className=''>Projects</a>
                    <a href="#Testimonials" className=''>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-[#410D07] text-white px-6 py-2 border border-yellow-700 rounded font-small shadow-md cursor-pointer active:scale-99'>Sign Up</button>
                <img src={assets.menu_icon} className="md:hidden h-6 w-auto" onClick={() => {
                    setShowMenu(true)
                }} />
                <div className={`bg-[#F0E5D6] fixed right-0 top-0 bottom-0 transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-9 flex justify-end">
                        <img src={assets.cross_icon} className="h-6" onClick={() => {
                            setShowMenu(false)
                        }} />
                    </div>
                    <ul className='flex flex-col gap-8 text-2xl px-9 py-4 font-light mt-15'>
                        <a href="#Header" className='' onClick={() => {
                            setShowMenu(false)
                        }}>Home</a>
                        <a href="#About" className='' onClick={() => {
                            setShowMenu(false)
                        }}>About</a>
                        <a href="#Project" className='' onClick={() => {
                            setShowMenu(false)
                        }}>Projects</a>
                        <a href="#Testimonials" className='' onClick={() => {
                            setShowMenu(false)
                        }}>Testimonials</a>
                    </ul>
                    <button className='bg-[#410D07] text-white px-5 py-2 border border-yellow-700 rounded font-small shadow-md cursor-pointer active:scale-99 fixed bottom-5 left-1/2 -translate-x-1/2 '>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
