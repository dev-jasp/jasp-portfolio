import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import { MdLocationOn } from "react-icons/md";
import Animation1 from "./Animations/Animation1"; 
import { useState } from "react";

const logoAnimation = {
    hidden: {
        x: '100vw'
    }, 
    visible: {
        opacity: 1, 
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
            stiffness: 300,
            damping: 20
        }
    }   
}

const Sidebar = () => {
    const [isClicked, setIsClicked] = useState(false); 

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsClicked(true); 
        
        setTimeout(() => {
            setIsClicked(false); 
            window.open("/documents/jaspher-CV.pdf", "_blank", "noopener,noreferrer");
        }, 200);
    }; 

    return (
        <aside className="top-0 left-0 h-full w-full px-6 py-2 flex flex-col items-start space-y-6 bg-gradient-to-r lg:items-center lg:fixed lg:w-[600px] xl:w-2/5 xl:px-8 lg:py-0 from-gray-900 to-slate-950">
            <div className="lg:text-start">
                <motion.div
                    variants={logoAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src="/images/profile.jpg" 
                        alt="Profile"
                        className="size-40 rounded-full mt-6 lg:mt-12"
                    />
                </motion.div>
                <motion.h1 
                    initial={{x: -100, opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration: 0.5, type: 'spring', stiffness: '300', damping: 15, delay: 0.7}}
                    className="text-4xl lg:text-4xl text-slate-300 font-bold mt-5 mb-2 tracking-tight font-sans"
                >
                    Jaspher Gargar
                </motion.h1>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.9}}
                    className="text-sky-600 text-xl mb-3 font-semibold tracking-tight"
                >
                    Frontend Developer
                </motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.1}}
                    className="flex flex-row text-slate-400 mb-4"
                >
                    <MdLocationOn className="mt-1 text-base text-sky-600" />
                    <span className="ml-1 text-base tracking-tight lg:text-[15px]">Zamboanga City, Philippines</span>
                </motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.3}}
                    className="text-slate-400 text-[15px] lg:text-sm mb-1 lg:mb-4"
                > 
                    Crafting Tech-infused Creativity  
                    <span className="text-sky-600 lg:text-[17px] font-extrabold"> |</span> Evolving with Technology
                </motion.p>
                <motion.div 
                initial={{x: -100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 0.5, delay: 1.5}}
                className="hidden lg:flex items-center gap-2 lg:mt-16"
                >
                        <h1 className=" text-slate-400 text-sm font-medium">Schedule a time with me</h1>
                        <button>
                        <a
                            href="https://calendly.com/jasphergargar/30min" 
                            target="_blank"
                            className="relative inline-flex items-center justify-center px-4 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-sky-600 duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            </span>

                            <span className="absolute flex items-center justify-center w-full h-full text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            </span>
                        </a>
                        </button>
                </motion.div>
            </div>
            <div className="flex flex-start items-center space-x-5 mr-2 lg:mr-10">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="text-base"
                >
                    <a 
                        href="/public/documents/jaspher-CV.pdf"   
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                    >
                        <button className="flex items-center lg:mt-10 text-nowrap space-x-2 px-2 py-1 bg-transparent border-slate-500 border-2 text-gray-300 rounded-md hover:bg-sky-600 hover:border-sky-600 hover:text-slate-200 transition">
                            <span className="tracking-normal sm:text-base lg:text-base">Download My CV</span>
                            <motion.span
                                animate={{ y: isClicked ? -3 : 0 }}
                                transition={{ type: "spring", stiffness: 350, damping: 12 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                            </motion.span>
                        </button>
                    </a>
                </motion.div>
                <Animation1>
                    <div className="flex space-x-4 text-xl lg:text-[22px] lg:mt-[31px] lg:ml-4">
                        <a href="https://www.linkedin.com/in/dev-jasp/" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="text-slate-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-sky-600 mt-2" />
                        </a>
                        <a href="https://github.com/nattycodes2" target="_blank" rel="noopener noreferrer">
                            <FiGithub className="text-slate-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-sky-600 mt-2"/>
                        </a>
                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-slate-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-sky-600 mt-2" />
                        </a>
                        <a href="https://www.instagram.com/psaj__/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-slate-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-sky-600 mt-2" />
                        </a>
                    </div>
                </Animation1>
            </div>
        </aside>
    );  
}

export default Sidebar;