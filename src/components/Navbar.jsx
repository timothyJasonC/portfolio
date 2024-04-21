import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        Aos.init()
    })
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-gray-900 bg-opacity-90 w-screen h-[4rem] py-4 min-[240px]:px-1 text-white fixed z-10">
            <div className="flex items-center gap-2 text-center justify-between px-8 md:px-0">
                <a href="#" className="text-4xl font-bold font-poppins " data-aos="fade-right" data-aos-duration="2000">Timothy</a>
                <i className='bx bx-menu' id="menu" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-primary ease-in duration-300 ">
                            <path strokeLinitecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  hover:text-primary ease-in duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </i>
                <nav className={`navbar ${isMenuOpen ? 'open' : ""} `}>
                    <a href="#about" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="2000">About</a>
                    <a href="#projects" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="2400">Projects</a>
                    <a href="#education" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="2800">Education</a>
                    <a href="#skills" className="font-poppins ease-linear duration-300 hover:text-teal-400" data-aos="fade-down" data-aos-duration="3000">Skills</a>
                </nav>
            </div>
        </header>
    )
}
