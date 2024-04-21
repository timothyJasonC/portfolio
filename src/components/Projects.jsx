import '../App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import nuartha from '../assets/nuartha.png';
export default function Projects() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <section id="projects" className="text-white bg-gray-900 w-full py-[6rem] flex flex-col justify-center items-center px-12 gap-6 overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-semibold " data-aos="fade-down">My <span className="text-teal-400">Projects</span></h2>

            <div className="flex flex-col gap-4 mt-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
                    <img src={nuartha} className='w-full h-auto rounded-2xl' data-aos="zoom-in" data-aos-duration="1200" />
                    <div className='flex flex-col' data-aos="zoom-in" data-aos-duration="1000">
                        <p className="w-auto flex text-justify md:w-auto  text-sm md:text-base" >In this project, I utilized Tailwind CSS and Next.js as the main tech stack. The primary focus was on slicing UI for web interfaces. By using Tailwind CSS, I efficiently implemented the provided design into CSS code without the need for manual CSS writing. Next.js provided a robust framework for web application development, including the ability to create responsive and SEO-friendly web applications easily. Leveraging these technologies, I successfully delivered a web interface that aligns with the provided design, providing users with a consistent and engaging experience.</p>
                        <a href="https://company-profile-ten-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 w-40 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition cursor-pointer duration-300 ease-in-out">
                            Visit Website &raquo;
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
                    <div className="py-4 w-auto h-auto px-16 order-first md:order-last w border-4 border-slate-400 rounded-lg bg-slate-300 bg-opacity-30 text-9xl text-center items-center justify-center" data-aos="zoom-in" data-aos-duration="1200">+</div>
                    <p className="w-auto flex text-center order-last md:order-first md:w-auto" data-aos="zoom-in" data-aos-duration="1200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non placeat cupiditate facere! Quis, esse?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
                    <div className="py-4 w-auto h-auto px-16 w border-4 border-slate-400 rounded-lg bg-slate-300 bg-opacity-30 text-9xl text-center items-center justify-center" data-aos="zoom-in" data-aos-duration="1400">+</div>
                    <p className="w-auto flex text-center md:w-auto" data-aos="zoom-in" data-aos-duration="1400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non placeat cupiditate facere! Quis, esse?</p>
                </div>
            </div>
        </section>
    )
}
