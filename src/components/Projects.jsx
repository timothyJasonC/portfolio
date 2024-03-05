import '../App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
export default function Projects() {
   useEffect(() =>{
    Aos.init()
   })
    return (
        <section id="projects" className="text-white bg-gray-900 w-full h-full pb-[6rem] flex flex-col justify-center items-center px-12 gap-6 pt-32 overflow-hidden">
            <h2 className="text-4xl font-semibold " data-aos="fade-down">My <span className="text-teal-400">Projects</span></h2>
            <div className="flex flex-col gap-4 mt-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
                    <div className="py-4 w-auto h-auto px-16 w border-4 border-slate-400 rounded-lg bg-slate-300 bg-opacity-30 text-9xl text-center items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">+</div>
                    <p className="w-auto flex text-center md:w-auto" data-aos="zoom-in" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non placeat cupiditate facere! Quis, esse?</p>
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