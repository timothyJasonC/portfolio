'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [xTransform, setXTransform] = useState([2500, 0, 0]);

    const text = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById('section1');
            if (section1) {
                const section1Height = section1.offsetHeight;
                if (window.scrollY > section1Height) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        const handleResize = () => {
            if (window.innerWidth <= 640) {
                // Mobile
                setXTransform([50, 0, 0]);
            } else {
                // Desktop
                setXTransform([2500, 0, 0]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, 0.4, 1], xTransform);

    return (
        <nav className={`bg-white bg-opacity-80 px-0 sm:px-12 ${isSticky ? 'fixed top-2 w-full z-50 rounded-full' : 'relative text-4xl bottom-0 w-full font-semibold'}`}>
            <motion.ul
                style={{ x: x }}
                className="flex gap-4 pl-4 sm:pl-0 list-none m-0 sm:p-4"
            >
                <Link href={'#section1'} className={`my-2 text-gray-800  block hover:bg-gray-200 hover:text-teal-400 transition-all rounded ${isSticky ? '' : "underline"}`}>Profile</Link>
                <Link href={'#stack'} className={`my-2 text-gray-800  block hover:bg-gray-200  hover:text-teal-400 transition-all  rounded  ${isSticky ? '' : "underline"}`}>Skills</Link>
                <Link href={'#projects'} className={`my-2 text-gray-800  block hover:bg-gray-200  hover:text-teal-400 transition-all  rounded  ${isSticky ? '' : "underline"}`}>Projects</Link>
            </motion.ul>
        </nav>
    );
};

export default Navbar;
