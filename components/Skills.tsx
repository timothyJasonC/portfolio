import { skills } from '@/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

interface Props {
    children: React.ReactNode;
    id: number
}

const TextWrapper = ({ children, id }: Props) => {
    const text = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "center"]
    })

    const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0])
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000])

    return (
        <div key={id} ref={text}>
            <motion.div style={{
                opacity: opacity,
                x: x,
            }}>
                {children}
            </motion.div>
        </div>
    )
}

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map(skill => (
                <TextWrapper id={skill.id}>
                    <div key={skill.id} className="bg-gray-800 p-6 rounded-lg shadow-md md:h-52">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold ml-4">{skill.title}</h2>
                        </div>
                        <p>{skill.list}</p>
                    </div>
                </TextWrapper>
            ))}
        </div>
    )
}
