import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pt-12 md:pt-36 -z-10 md:h-[80vh] pb-12' id='section1'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div className='relative h-[30rem] justify-center items-center hidden sm:flex md:hidden'>
                    <img src="/photo.png" alt="Profile" className='h-full w-auto relative z-10 mask-bottom-fade' />
                </div>

                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col text-center sm:text-left justify-center gap-4 items-center'>
                    <p className="md:tracking-wider font-bold text-4xl text-black-100 mb-4">
                        Hi! I&apos;m Timothy, a Fullstack Web Developer based in Indonesia.
                    </p>

                    <h2 className='uppercase tracking-wide text-sm sm:tracking-widest text-black-200 font-semibold'>
                        I&apos;m an aspiring web developer with hands-on experience in building web applications using modern technologies such as TypeScript, Next.js, Express.js, and Tailwind CSS. I have worked on projects including company profiles, ticketing platforms, and e-commerce systems, and I&apos;m proficient in integrating third-party services and managing databases with MySQL. Eager to continue learning and honing my skills, I enjoy collaborating in team environments and am committed to delivering quality work.
                    </h2>

                    <div className='flex flex-col sm:flex-row gap-4 justify-evenly items-center pt-12 sm:pt-0'>
                        <a href="mailto:timothyjason8899@gmail.com">
                            <MagicButton
                                title="Contact Me"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                        <a download="" href={'/CV_ATS _Timothy_Jason_Caviezel.pdf'} className="text-white cursor-pointer text-sm sm:text-lg flex gap-2 bg-black-100  p-2 px-6 rounded-full justify-center items-center">
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='relative max-md:hidden h-[30rem] flex justify-center items-center'>
                    <img src="/photo.png" alt="Profile" className='h-full w-auto relative z-10 mask-bottom-fade' />
                </div>
            </div>
        </div>
    )
}

export default Hero
