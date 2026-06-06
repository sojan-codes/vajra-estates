import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div id="About" className='w-full min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${assets.page_bg_img})` }}>
            <div className="h-full w-full bg-[#E4CFB4]/10 p-8 flex flex-col items-center gap-6">
                <h1 className='text-3xl font-semibold mt-5 md:mt-0 md:text-5xl'>About <span className='font-light underline text-[#6F130F]'>Our Brand</span></h1>
                <p className='text-center font-semibold text-[#6A594C] md:text-2xl'>Passionate About Heritage, Dedicated to Your Dream Home</p>
                <div className="flex flex-col gap-5 md:flex-row w-full md:h-[80%]">
                    <div className="md:w-1/2 flex justify-center lg:px-15">
                        <img src={assets.brand_img} className="md:h-auto w-full" />
                    </div>
                    <div className="flex flex-col gap-6 md:w-1/2 md:py-15">
                        <p className='md:text-lg'>Experience thoughtfully crafted homes that reflect cultural identity, exceptional quality, and lasting value for generations.</p>
                        <p className='hidden md:block md:text-lg'>We are committed to creating exceptional homes that combine thoughtful design, superior craftsmanship, and modern comfort. Every project is carefully planned with attention to detail, ensuring beautiful living spaces that not only meet the needs of today but continue to provide value, functionality, and enjoyment for years to come.</p>
                        <button className='bg-[#17100B] border rounded text-yellow-200 px-4 py-3 self-center border-yellow-700 active:scale-99 cursor-pointer'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
