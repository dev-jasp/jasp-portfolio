import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import { MdLocationOn } from "react-icons/md";
import Animation1 from "./Animations/Animation1"; 
import { useState } from "react";

const  logoAnimation = {
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
        <aside className="top-0 left-0 h-full w-full px-6 py-4 flex flex-col items-start space-y-6 bg-gradient-to-r lg:items-center lg:fixed lg:w-[600px] xl:w-2/5 xl:px-8 lg:py-10 from-gray-900 to-slate-950">
            <div className="lg:text-start">
                <motion.div
                    variants={logoAnimation}
                    initial= "hidden"
                    animate= "visible"
                >
                    <img
                    src="/images/profile.jpg" 
                    alt="Profile"
                    className="size-40 rounded-full mt-6 lg:mt-12"/>
                </motion.div>
                <motion.h1 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, type: 'spring',  stiffness: '300', damping: 15, delay: 0.7}}
                    className="text-4xl lg:text-4xl text-slate-300 font-bold mt-5 mb-2 tracking-tight font-sans">Jaspher Gargar</motion.h1>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.9}}
                    className="text-sky-600 text-xl lg:text-xl mb-3 font-semibold tracking-tight">Frontend Developer</motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.1}}
                    className="flex flex-row text-slate-400 mb-5">
                    <MdLocationOn className="mt-1 text-base lg:text-lg text-sky-600 " />
                <span className="ml-1 tracking-tight">Zamboanga City, Philippines</span>
                </motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.3}}
                    className="text-slate-300 text-[15px] lg:text-sm mb-1 lg:mb-4 "> Crafting Tech-infused Creativity  
                    <span className="text-sky-600 lg:text-[17px] font-extrabold"> |</span> Evolving with Technology
                </motion.p>
            </div>
           
            <div className="flex flex-start items-center space-x-5 mr-2 lg:mr-10">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="text-base">
                <a 
                    href="/public/documents/jaspher-CV.pdf"   
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                >
                  <button
                        className="flex items-center mt-2  text-nowrap space-x-2 px-2 py-1 bg-transparent border-slate-500 border-2 text-gray-300 rounded-md hover:bg-sky-600 hover:border-sky-600 hover:text-slate-200 transition"
                    >
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
                <div className="flex space-x-4 text-xl lg:text-[22px] lg:ml-4">
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