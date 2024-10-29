
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdPulse } from "react-icons/io"
import * as motion from "framer-motion/client"


const Main = () => {
    return(
      <main className="px-12 mt-[140px] lg:px-[200px] lg:mt-[120px] ">
        <div className="lg:text-center">
          <motion.h1
             initial={{ y: -20, opacity: 0 }} 
             animate={{ y: 0, opacity: 1 }} 
             transition={{ duration: 0.5, delay: 1.5 }} 
          className="lg:flex justify-center text-2xl text-indigo-600 hidden"><IoMdPulse /></motion.h1>
          <motion.h2 initial={{x: -100, opacity: 0}}
          animate= {{x:0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.5}} className="text-4xl lg:text-[75px] mt-9 text-slate-300 font-inter font-bold tracking-tight">Crafting Digital <span className="">Magic</span></motion.h2>
          <motion.p 
          initial={{x: -100, opacity: 0}}
          animate= {{x:0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.8}}
          className="mt-4 mb-4 text-xl text-indigo-600 font-inter font-bold leading-relaxed tracking-tight lg:text-[19px] lg:mt-12 "> Jaspher Gargar <span className="text-slate-400">| Frontend Developer</span></motion.p>
        </div>
         
      <motion.div 
       initial={{ y: 100, opacity: 0 }} 
       animate={{ y: 0, opacity: 1 }}  
       transition={{ duration: 0.5, delay: 1 }}  
       className="text-start text-xl flex space-x-8 py-6 lg:text-2xl lg:justify-center">
        
        <a href="https://www.instagram.com/psaj__/" target="_blank" rel="">
        <FaInstagram className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"  />
        </a>
  
        <a href="" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"/>
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"/>
        </a>

        <a href="https://github.com/nattycodes2" target="_blank" rel="noopener noreferrer">
        <FiGithub className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"/>
        </a>

      </motion.div>
    </main>
    );  
}

export default Main; 