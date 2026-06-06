import React, {useState} from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "04c49b7b-6fb8-4eda-8e56-f2a04a522f9c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            setResult("");
            toast.error("Error Submitting Form")
        }
    };

    return (
        <div id='Contact' className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${assets.page_bg_img})` }}>
            <div className="h-full w-full bg-[#E4CFB4]/10 p-8 flex flex-col items-center gap-6 md:p-15">
                <h1 className='text-4xl font-semibold mt-5 md:mt-0 md:text-5xl'>Contact <span className='font-light underline text-[#6F130F]'>With Us</span></h1>
                <p className='text-center font-semibold text-[#6A594C] md:text-2xl'>Your Dream Home Awaits — Let's Make It a Reality</p>
                <form className="flex flex-col items-center w-full px-5 gap-8 md:w-1/2 md:mt-5" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-3 w-full lg:flex-row md:gap-5">
                        <div className="flex flex-col gap-1 lg:w-1/2">
                            <h1 className='font-semibold text-[#6F130F] md:text-xl'>Your Name</h1>
                            <input type="text" placeholder='Your Name' name='Name' className='border px-4 py-2 rounded outline-none bg-[#F0E5D6] md:py-4' required />
                        </div>
                        <div className="flex flex-col gap-1 lg:w-1/2">
                            <h1 className='font-semibold text-[#6F130F] md:text-xl'>Your Email</h1>
                            <input type="email" placeholder='Your Email' name='Email' className='border px-4 py-2 rounded outline-none bg-[#F0E5D6] md:py-4' required />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <h1 className='font-semibold text-[#6F130F] md:text-xl'>Messege</h1>
                        <textarea name="Messege" className="border p-2 rounded h-45 outline-none bg-[#F0E5D6] md:h-60" placeholder='Messege' required></textarea>
                    </div>
                    <button style={{ backgroundImage: `url(${assets.red_bg})` }} className='bg-cover bg-center text-[#F0E5D6] border py-3 px-8 rounded md:text-xl md:px-9 cursor-pointer active:scale-99'>{result ? result : 'Send Messege'}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
