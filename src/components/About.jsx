import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function About() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <section id="about" className="text-white pt-20 bg-gray-900 w-full h-screen flex flex-col-reverse md:flex-row justify-center items-center px-12 gap-6">
            <div className="flex items-center md:items-start min-[320px]:text-center flex-col gap-4">
                <h1 data-aos="fade-right" data-aos-duration="1500" className="text-2xl md:text-4xl font-bold ">I'm Timothy Jason</h1>
                <div className='text-animation'>
                    <h2 data-aos="fade-right" data-aos-duration="1700" className="text-2xl md:text-4xl" >Fullstack Web Developer</h2>
                </div>
                <p data-aos="fade-right" data-aos-duration="1900" className="flex text-justify md:text-start text-sm md:text-xl">Welcome to my portfolio! As a Fullstack Web Developer, I specialize in creating captivating web experiences by blending compelling design with robust functionality. With expertise in frontend technologies like HTML, CSS, and JavaScript, as well as backend frameworks like Node.js and Express, I am equipped to handle all aspects of web development.
                </p>
                <div className="flex gap-2">
                    <a data-aos="fade-up" data-aos-duration="2200" href="https://www.instagram.com/ezzel_09026/" className="border-solid w-32 text-center bg-teal-400 border-2 py-2 px-4 rounded-full text-xl font-semibold ease-linear duration-1000 hover:bg-teal-800 " >Let's Talk</a>
                </div>
            </div>
            <img data-aos="fade-left" data-aos-duration="2000" className="w-[30vw] rounded-xl" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </section>
    )
}