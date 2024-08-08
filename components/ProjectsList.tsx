import { projects } from '@/data'
import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js';

interface Props {
    children: React.ReactNode;
}

const ProjectWrapper = ({ children }: Props) => {
    const project = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: project,
        offset: ["start end", "center"]
    })

    const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0])
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, 1000])

    return (
        <div ref={project}>
            <motion.div style={{
                opacity: opacity,
                x: x,
            }}>
                {children}
            </motion.div>
        </div>
    )
}

export default function ProjectsList() {
    return (
        <div className="flex flex-wrap mb-40 items-center justify-center md:p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id}>
                    <ProjectWrapper >
                        <div key={id} className="bg-white-100 relative rounded-lg hover:scale-105 shadow-md overflow-hidden transform transition duration-500 lg:min-h-[35rem] h-[35rem] sm:w-96 w-[90vw]">
                            <img src={img} alt={title} className="h-64 object-cover" />

                            <div className='flex flex-col justify-between'>

                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{title}</h3>

                                    <p className="text-gray-600 mb-4">{des}</p>
                                </div>

                                <div className='absolute bottom-2 px-4'>
                                    <div className="flex space-x-2 mb-4">
                                        {iconLists.map((icon, index) => (
                                            <img key={index} src={icon} alt="Icon" className="w-6 h-6" />
                                        ))}
                                    </div>

                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 cursor-pointer flex items-center">
                                        Check Live Site <span className="ml-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ProjectWrapper>

                </div>
            ))}
        </div>
    )
}
