import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import { MdLocationOn } from "react-icons/md";
import Animation1 from "./Animations/Animation1"; 
import { MdDownload } from "react-icons/md";
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
        <aside className="top-0 left-0 h-full w-full px-6 py-4 flex flex-col items-start space-y-6 bg-gradient-to-r lg:items-center lg:fixed lg:w-[600px] xl:w-2/5 xl:px-8 from-gray-900 to-slate-950">
            <div className="lg:text-start">
                <motion.div
                    variants={logoAnimation}
                    initial= "hidden"
                    animate= "visible"
                >
                    <img
                    src="/images/profile.jpg" 
                    alt="Profile"
                    className="size-40 rounded-full mt-12"/>
                </motion.div>
                <motion.h1 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, type: 'spring',  stiffness: '300', damping: 15, delay: 0.7}}
                    className="text-3xl lg:text-4xl text-gray-100 font-bold mt-5 mb-2 tracking-tight font-sans">Jaspher Gargar</motion.h1>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.9}}
                    className="text-cyan-600 text-lg lg:text-xl mb-4 font-bold tracking-tight">Frontend Developer</motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.1}}
                    className="flex flex-row text-gray-400 mb-5">
                    <MdLocationOn className="mt-1 text-base lg:text-lg text-cyan-600" />
                <span className="ml-1 tracking-tight">Zamboanga City, Philippines</span>
                </motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.3}}
                    className="text-gray-300 text-xs lg:text-sm mb-1 lg:mb-4 "> Crafting Tech-infused Creativity  
                    <span className="text-cyan-600 text-base font-extrabold"> |</span> Evolving with Technology
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
                        className="flex items-center mt-2 text-nowrap space-x-2 px-2 py-1 bg-transparent border-cyan-600 border-2 text-gray-300 rounded-md hover:bg-cyan-600 hover:text-white transition">
                        <span className="tracking-normal sm:text-base lg:text-base">Download My CV</span>
                        <motion.span
                            animate={{ y: isClicked ? -3 : 0 }}
                            transition={{ type: "spring", stiffness: 350, damping: 5 }}
                        >
                            <MdDownload className="sm:text-sm lg:text-xl mt-1" />
                        </motion.span>
                    </button>
                </a>
                </motion.div>
                <Animation1>
                <div className="flex space-x-4 text-xl lg:text-[22px] lg:ml-4">
                    <a href="https://www.instagram.com/psaj__/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-cyan-600 mt-2" />
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-cyan-600 mt-2" />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-cyan-600 mt-2" />
                    </a>
                    <a href="https://github.com/nattycodes2" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-cyan-600 mt-2"/>
                    </a>
                    </div>
                </Animation1>
            </div>
        </aside>
    );  
}

export default Sidebar; 