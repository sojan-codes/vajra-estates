import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
    return (
        <div id="About" className='w-full min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${assets.page_bg_img})` }}>
            <div className="h-full w-full bg-[#E4CFB4]/10 p-8 flex flex-col items-center gap-6 overflow-x-hidden">
                <motion.h1 className='text-3xl font-semibold mt-5 md:mt-0 md:text-5xl'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >About <span className='font-light underline text-[#6F130F]'>Our Brand</span></motion.h1>
                <motion.p className='text-center font-semibold text-[#6A594C] md:text-2xl'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >Passionate About Heritage, Dedicated to Your Dream Home</motion.p>
                <div className="flex flex-col gap-5 md:flex-row w-full md:h-[80%]">
                    <motion.div className="md:w-1/2 flex justify-center lg:px-15"
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src={assets.brand_img} className="md:h-auto w-full" />
                    </motion.div>
                    <motion.div className="flex flex-col gap-6 md:w-1/2 md:py-15"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}>
                        <p className='md:text-lg'>Experience thoughtfully crafted homes that reflect cultural identity, exceptional quality, and lasting value for generations.</p>
                        <p className='hidden md:block md:text-lg'>We are committed to creating exceptional homes that combine thoughtful design, superior craftsmanship, and modern comfort. Every project is carefully planned with attention to detail, ensuring beautiful living spaces that not only meet the needs of today but continue to provide value, functionality, and enjoyment for years to come.</p>
                        <button className='bg-[#17100B] border rounded text-yellow-200 px-4 py-3 self-center border-yellow-700 active:scale-99 cursor-pointer'>Learn more</button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
