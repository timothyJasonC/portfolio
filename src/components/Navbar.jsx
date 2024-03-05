import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Navbar() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <header className="bg-gray-900 bg-opacity-90 w-full h-[4rem] py-4 px-24 text-white fixed">
            <div className="flex items-center gap-2 text-center justify-between">
                <a href="#" className="text-2xl font-bold font-poppins " data-aos="fade-right" data-aos-duration="2000">Timothy</a>
                <nav className=" flex gap-3 text-sm tracking-tighter ">
                    <a href="#about" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="2000">About</a>
                    <a href="#projects" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="2400">Projects</a>
                    <a href="#education" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="2800">Education</a>
                    <a href="#skills" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="3000">Skills</a>
                </nav>
            </div>
        </header>
    )
}