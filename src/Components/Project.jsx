import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Project = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageShow, SetImageShow] = useState(1);

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
        <div id='Project' className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${assets.page_bg_img})` }}>
            <div className="h-full w-full bg-[#E4CFB4]/10 p-8 flex flex-col items-center gap-6">
                <h1 className='text-3xl font-semibold mt-5 md:mt-0 md:text-5xl'>Projects <span className='font-light underline text-[#6F130F]'>Completed</span></h1>
                <p className='text-center font-semibold text-[#6A594C] md:text-2xl'>Crafting Spaces, Building Legacies — Explore Our Portfolio</p>
                <div className="flex gap-5 w-full justify-end">
                    <button onClick={prevImage} className='py-3 px-2 bg-[#550D09] rounded cursor-pointer active:scale-98'>
                        <img src={assets.left_arrow} className="h-5 w-auto invert" />
                    </button>
                    <button onClick={nextImage} className='py-3 px-2 bg-[#550D09] rounded cursor-pointer active:scale-98'>
                        <img src={assets.right_arrow} className="h-5 w-auto invert" />
                    </button>
                </div>
                <div className="flex md:gap-8 h-[63%] w-full overflow-hidden md:h-[65%]">
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
                </div>
            </div>
        </div>
    )
}

export default Project
