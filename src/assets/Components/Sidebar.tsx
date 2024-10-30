import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import { MdLocationOn } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import Animation1 from "./Animations/Animation1"; 
import Animation2 from "./Animations/Animation2"; 
import { MdDownload } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-2/5 bg-gradient-to-r from-gray-900 to-slate-900 text-white flex flex-col items-center pt-4 space-y-6">
            <div className="text-start font-sans">
                <img
                    src="/images/profile.jpg" 
                    alt="Profile"
                    className="w-40 h-40 rounded-full mt-12"/>
                <motion.h1 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.7}}
                    className="text-4xl font-bold mt-5 mb-2 tracking-tight font-sans">Jaspher Gargar</motion.h1>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.9}}
                    className="text-indigo-700 text-xl mb-4 font-bold tracking-tight">Frontend Developer</motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.1}}
                    className="flex flex-row text-gray-400 mb-5">
                    <MdLocationOn className="m-1 text-lg text-indigo-600" />
                <span className="ml-1 tracking-tight">Zamboanga City, Philippines</span>
                </motion.p>
                <motion.p 
                    initial={{x: -100, opacity: 0}}
                    animate= {{x:0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.3}}
                    className="text-gray-300 text-sm mb-4 "> Crafting Tech-infused Creativity  
                    <span className="text-indigo-700 text-base font-extrabold"> |</span> Evolving with Technology
                </motion.p>
            </div>
           
            <div className="mt-6 flex items-center flex-row space-x-4 text-2xl mr-14">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="text-base mr-2">
                    <button className="flex items-center mt-2 space-x-2 px-2 py-1 bg-transparent border-indigo-700 border-2 text-gray-300 rounded-md hover:bg-indigo-700 hover:text-white transition">
                        <span className="tracking-normal">Checkout My CV</span>
                        <MdDownload className="text-xl mt-1"/>
                    </button>
                </motion.div>
                <Animation1>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/psaj__/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600 mt-2" />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600 mt-2" />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600 mt-2" />
                    </a>
                    <a href="https://github.com/nattycodes2" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600 mt-2"/>
                    </a>
                    </div>
                </Animation1>
              
            </div>
        </aside>
    );  
}

export default Sidebar; 
