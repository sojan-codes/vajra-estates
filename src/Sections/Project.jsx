import React, { use, useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react'

const Project = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageShow, SetImageShow] = useState(1);

    const data = [
        'Crafting Spaces, Building Legacies.',
        'Explore Our Portfolio.'
    ]

    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const [type, setType] = useState(false)


    useEffect(() => {
        if(!type) return
        const para = data[index];
        const timeout = setTimeout(() => {
            if (!deleting && subIndex < para.length) setSubIndex(n => n + 1)
            else if (!deleting && subIndex === para.length) setTimeout(() => {
                setDeleting(true)
            }, 1500)
            else if (deleting && subIndex > 0) setSubIndex(n => n - 1)
            else if (deleting && subIndex === 0) {
                setDeleting(false)
                setIndex(n => (n + 1) % data.length)
            }
        }, deleting ? 40 : 80)
        return () => clearTimeout(timeout)
    }, [index, subIndex, deleting, type])

    const nextImage = () => {
        setImageIndex((prev) => (prev + 1) % projectsData.length);
    }
    const prevImage = () => {
        setImageIndex((prev) => (prev === 0) ? projectsData.length - 1 : prev - 1);
    }
    useEffect(() => {
        function showCards() {
            if (window.innerWidth >= 1024) {
                SetImageShow(projectsData.length / 2)
            } else {
                SetImageShow(1)
            }
        }
        showCards();
        window.addEventListener('resize', showCards);
        window.removeEventListener('resize', showCards);
    }, [imageShow])
    return (
        <div id='Projects' className='w-full h-screen bg-cover bg-center overflow-x-hidden' style={{ backgroundImage: `url(${assets.page_bg_img})` }}>
            <div className="h-full w-full bg-[#E4CFB4]/10 p-8 flex flex-col items-center gap-6">
                <motion.h1 className='text-3xl font-semibold mt-5 md:mt-0 md:text-5xl'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >Projects <span className='font-light underline text-[#6F130F]'
                >Completed</span></motion.h1>
                <motion.p className='text-center font-semibold text-[#6A594C] md:text-2xl h-8'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => {setType(true)}}
                >
                    {data[index].substring(0, subIndex)}<motion.span
                    className='animate-pulse'
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >|</motion.span>
                </motion.p>
                <motion.div className="flex gap-5 w-full justify-end "
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <button onClick={prevImage} className='py-3 px-2 bg-[#550D09] rounded cursor-pointer active:scale-98'>
                        <img src={assets.left_arrow} className="h-5 w-auto invert" />
                    </button>
                    <button onClick={nextImage} className='py-3 px-2 bg-[#550D09] rounded cursor-pointer active:scale-98'>
                        <img src={assets.right_arrow} className="h-5 w-auto invert" />
                    </button>
                </motion.div>
                <motion.div className="flex md:gap-8 h-[63%] w-full overflow-hidden md:h-[65%]"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {
                        projectsData.map((project, idx) => {
                            return <div key={idx} className="shrink-0 h-full w-full relative md:w-1/3 lg:w-1/4 transition-transform duration-400" style={{ transform: `translateX(-${(imageIndex * 100) / imageShow}%)` }}>
                                <div>
                                    <img src={project.image} className="h-full w-auto object-center" />
                                </div>
                                <div className="absolute bottom-0 text-center left-1/2 -translate-x-1/2 shodow-md w-4/5 rounded bg-cover bg-center" style={{ backgroundImage: `url(${assets.red_bg})` }}>
                                    <div className="bg-black/25 h-full w-full  py-3 px-1 text-[#EDD9B8] items-center shadow-md">
                                        <h1 className='font-light'>{project.title}</h1>
                                        <div className='font-extralight gap-1'>
                                            <p>{project.price} | {project.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Project
