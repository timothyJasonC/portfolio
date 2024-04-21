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
                    <div data-aos="fade-up-right" data-aos-duration="1200" className="h-full w-full text-xl min-[320px]:text-sm py-8 px-8 border-slate-300 border-4 rounded-lg bg-slate-400 bg-opacity-30">
                        <div className="flex justify-between my-2">
                            <span className="">HTML</span>
                            <span className="">90%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[90%]"></div>
                        </div>
                        <div className="flex justify-between my-2">
                            <span className="">CSS</span>
                            <span className="">60%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[60%]"></div>
                        </div>
                        <div className="flex justify-between my-2">
                            <span className="">PHP</span>
                            <span className="">25%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[25%]"></div>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1200" className="h-full text-xl min-[320px]:text-sm w-full py-8 px-8 border-slate-300 border-4 rounded-lg bg-slate-400 bg-opacity-30">
                        <div className="flex justify-between my-2">
                            <span className="">Javascript</span>
                            <span className="">70%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[70%]"></div>
                        </div>
                        <div className="flex justify-between my-2">
                            <span className="">MongoDB</span>
                            <span className="">70%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[70%]"></div>
                        </div>
                        <div className="flex justify-between my-2">
                            <span className="">MySQL</span>
                            <span className="">60%</span>
                        </div>
                        <div className="bg-gray-900 h-2 rounded-full relative overflow-hidden">
                            <div className="absolute h-full bg-teal-400 w-[60%]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}