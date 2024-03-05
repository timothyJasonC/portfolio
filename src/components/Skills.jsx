import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Skills() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <section id="skills" className="text-white bg-gray-900 w-full h-screen flex flex-col justify-center items-center px-24 gap-6 overflow-hidden">
            <h2 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="700">My <span className="text-teal-400">Skills</span></h2>
            <div className="w-full flex flex-col justify-center items-center gap-6 flex-wrap">
                <h3 className="text-2xl font-semibold mb-2 ml-2" data-aos="flip-left" data-aos-duration="900">Language</h3>
                <div className="w-full flex flex-col gap-4 md:flex-col lg:flex-row">
                    <div data-aos="fade-up-right" data-aos-duration="1200" className="h-full w-full py-8 px-8 border-slate-300 border-4 rounded-lg bg-slate-400 bg-opacity-30">
                        <div className="flex justify-between my-2">
                            <span className="text-xl">HTML</span>
                            <span className="text-xl">90%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[90%]"></div>
                        </div>
                        <div className="flex justify-between my-2">
                            <span className="text-xl">CSS</span>
                            <span className="text-xl">60%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[60%]"></div>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1200" className="h-full w-full py-8 px-8 border-slate-300 border-4 rounded-lg bg-slate-400 bg-opacity-30">
                        <div className="flex justify-between my-2">
                            <span className="text-xl">Javascript</span>
                            <span className="text-xl">40%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[40%]"></div>
                        </div>
                        <div className="flex justify-between my-2">
                            <span className="text-xl">MongoDB</span>
                            <span className="text-xl">50%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[50%]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}