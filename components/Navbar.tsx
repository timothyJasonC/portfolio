'use client'// components/Navbar.js
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const text = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"]
    })

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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, 0.4, 1], [3000, 0, 0])


    return (
        <nav className={`bg-white bg-opacity-80 px-12 mb-5 ${isSticky ? 'fixed top-2 w-full z-50 rounded-full' : 'relative bottom-0 w-full'}`}>
            <motion.ul
                style={{ x: x }}
                className="flex list-none m-0 p-4"
            >
                <Link href={'#section1'} className="mx-4 text-gray-800 p-2 block hover:bg-gray-200 hover:text-teal-400 transition-all rounded">Profile</Link>
                <Link href={'#stack'} className="mb-2 text-gray-800 p-2 block hover:bg-gray-200  hover:text-teal-400 transition-all  rounded">Skills</Link>
                <Link href={'#projects'} className="mb-2 text-gray-800 p-2 block hover:bg-gray-200  hover:text-teal-400 transition-all  rounded">Projects</Link>
            </motion.ul>
        </nav>
    );
};

export default Navbar;
