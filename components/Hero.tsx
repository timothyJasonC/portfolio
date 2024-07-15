import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36 -z-10'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-auto w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex sm:flex-row flex-col-reverse justify-around relative my-20'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-4 items-center'>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Fullstack Web Developer' />

                    <p className="md:tracking-wider text-black-200 mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Timothy, a Next.js Developer based in Indonesia.
                    </p>

                    <h2 className='uppercase tracking-widest text-xs text-black-100'>
                        Aspiring web developer with hands-on experience in building web applications using modern technologies such as TypeScript, Next.js, Express.js, and Tailwind CSS. I have worked on projects including company profiles, ticketing platforms, and e-commerce systems, and I am proficient in integrating third-party services and managing databases with MySQL. Eager to continue learning and honing my skills, I enjoy collaborating in team environments and am committed to delivering quality work
                    </h2>
                    
                    <a href="#about">
                        <MagicButton title='Show My Work'
                            icon={<FaLocationArrow />}
                            position='right' />
                    </a>
                </div>

                <div className='relative h-[20rem] flex justify-center items-center'>
                    <img src="/photo.png" alt="Profile" className='h-full w-auto relative z-10 mask-bottom-fade' />
                </div>
            </div>
        </div>
    )
}

export default Hero
