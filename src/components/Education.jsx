import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Education() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <section id="education" className="text-white bg-gray-900 w-full h-auto flex flex-col justify-center items-center px-12 pt-32 gap-6 overflow-hidden">
            <h2 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="700">My <span className="text-teal-400">Education</span></h2>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl mx-2" data-aos="flip-up" data-aos-duration="900">Education</h2>
                <div className="flex flex-col gap-4">
                    <div data-aos="fade-right" data-aos-duration="1200" className="border-slate-400 border-solid border-4 rounded-lg p-5 bg-slate-300 bg-opacity-30">
                        <div className="flex gap-1">2023-6
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>
                        <h3 className="text-teal-400 text-xl my-2">Graduated from Highschool</h3>
                        <p className="text-sm tracking-wide">Completed my high school education with honors, where I gained valuable skills and knowledge to lay the foundation for my future endeavors..</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1300" className="border-slate-400 border-solid border-4 rounded-lg p-5 bg-slate-300 bg-opacity-30">
                        <div className="flex gap-1">2023-8 → 2024-1
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>
                        <h3 className="text-teal-400 text-xl my-2">Self-taught</h3>
                        <p className="text-sm tracking-wide">Embarked on a self-taught journey to deepen my understanding of web development, exploring various resources and tackling real-world projects to sharpen my skills.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1400" className="border-slate-400 border-solid border-4 rounded-lg p-5 bg-slate-300 bg-opacity-30">
                        <div className="flex gap-1">Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>
                        <h3 className="text-teal-400 text-xl my-2">Bootcamp</h3>
                        <p className="text-sm tracking-wide">Recently completed an intensive bootcamp program, where I immersed myself in a hands-on learning environment, honing my skills and collaborating with peers on diverse projects.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
