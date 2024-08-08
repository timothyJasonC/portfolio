import { projects } from '@/data'
import { useScroll, motion, useTransform } from 'framer-motion'
import React from 'react'
import ProjectsList from './ProjectsList'

const RecentProjects = () => {
    const secRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        //target is the element that we want to track
        target: secRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const xTransform = useTransform(
        scrollYProgress,
        [1, 0.5, 0.1, 0],
        [1000, 0, 0, 0]
    );
    return (
        <div className='' id='projects'>
            <motion.h1 ref={secRef} style={{
                scale: scale,
                x: xTransform,
            }} className='heading text-black-100'>
                A small selection of {' '}
                <span className='text-purple'>Recent projects</span>
            </motion.h1>
            <ProjectsList />
        </div>
    )
}

export default RecentProjects
