import { socialMedia } from "@/data";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-black-100 py-8 px-4 mt-5 md:px-12">
            <div className="max-w-screen-xl mx-auto flex justify-between gap-8">
                <div>
                    {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 mb-4" /> */}

                    <p>&copy;2024 All rights reserved.</p>
                    <div>
                        <a href="#" className="hover:text-teal-400 mr-4 transition-all">Privacy policy</a>
                        <a href="#" className="hover:text-teal-400 transition-all">Terms of service</a>
                    </div>
                    <div className="flex pt-4 space-x-4">
                        {socialMedia.map((info) => (
                            <Link href={info.link}
                                key={info.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-teal-300 rounded-full border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">My Account</h4>
                    <ul className="flex gap-12">
                        <Link href={'#section1'} className="mb-2 text-gray-400 hover:text-teal-400 transition-all">Profile</Link>
                        <Link href={'#stack'} className="mb-2 text-gray-400 hover:text-teal-400 transition-all">Skills</Link>
                        <Link href={'#projects'} className="mb-2 text-gray-400 hover:text-teal-400 transition-all">Projects</Link>
                        
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;