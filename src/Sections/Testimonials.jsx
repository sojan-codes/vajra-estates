import React, { useEffect, useRef, useState } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false)
    useEffect(() => {
        if (!startTyping) return
        const timeout = setTimeout(() => {
            if (subIndex < testimonialsData[index].text.length + 1) setSubIndex(n => n + 1)
        }, 60)
        return () => clearTimeout(timeout);
    }, [index, subIndex, startTyping])
    return (
        <div id='Testimonials' className='w-full h-auto lg:h-screen bg-cover bg-center' style={{ backgroundImage: `url(${assets.page_bg_img})` }}>
            <div className="h-full w-full bg-[#E4CFB4]/10 px-5 py-8 flex flex-col items-center gap-6 md:px-10 md:py-15 md:gap-10">
                <motion.h1 className='text-3xl font-semibold mt-5 md:mt-0 md:text-5xl'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >Customer <span className='font-light underline text-[#6F130F]'>Testimonials</span></motion.h1>
                <motion.p className='text-center font-semibold text-[#6A594C] md:text-2xl'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >Stories of Trust, Quality, and New Beginnings</motion.p>
                <motion.div className="w-full h-auto flex flex-col gap-5 px-5 lg:flex-row md:w-4/5"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStartTyping(true)}
                >
                    {
                        testimonialsData.map((testimonial, idx) => {
                            return <div key={idx} className="flex flex-col items-center border p-8 rounded-2xl shadow-lg text-center gap-2 bg-[#F0E5D6] w-full">
                                <img src={testimonial.image} className="h-30 object-cover"/>
                                <div>
                                    <h1 className='font-semibold'>{testimonial.name}</h1>
                                    <h1 className='font-semibold text-[#6F130F]'>{testimonial.title}</h1>
                                </div>
                                <div className="flex gap-1">
                                    {Array.from({ length: testimonial.rating }, (data, idx) => {
                                        return <img key={idx} src={assets.star_icon} className="" />
                                    })}
                                </div>
                                <p>{testimonialsData[idx].text.substring(0, subIndex)}<motion.span className='animate-pulse text-lg'
                                    animate={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                >|</motion.span></p>
                            </div>
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Testimonials
