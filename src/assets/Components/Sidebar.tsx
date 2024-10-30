import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "framer-motion/client";
import { MdLocationOn } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import Animation1 from "./Animations/Animation1"; 
import Animation2 from "./Animations/Animation2"; 

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-2/5 bg-gradient-to-r from-gray-900 to-slate-900 text-white flex flex-col items-center pt-8 space-y-6">
            <div className="text-start">
                <img
                    src="/images/profile.jpg" 
                    alt="Profile"
                    className="w-40 h-40 rounded-full mt-12"/>
                <Animation2>
                <h1 className="text-4xl font-bold mt-4 ">Jaspher Gargar</h1>
                </Animation2>
                <p className="text-indigo-700 text-xl mb-4 font-bold">Frontend Developer</p>
                <p className="flex flex-row text-gray-400 mb-5">
                    <MdLocationOn className="m-1 text-lg text-indigo-600" />
                    <span className="ml-1">Zamboanga City, Philippines</span>
                </p>
                <p className="text-gray-300 text-sm mb-4">
                    Crafting Tech-infused Creativity <span className="text-indigo-600 text-base">|</span> Evolving with Technology
                </p>
            </div>
           
            <div className="mt-6 flex items-center flex-row space-x-4 text-2xl mr-3">
                <div className="text-lg mr-2">
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center space-x-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-indigo-700 hover:text-white transition">
                        <span className="tracking-normal">Checkout My CV</span>
                        <FaDownload />
                    </motion.button>
                </div>

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
