
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "framer-motion/client"


const Main = () => {
    return(
      <main className="px-12 mt-[140px] lg:px-[200px] lg:mt-[160px] ">
        <div className="lg:text-center">
          <motion.h2 initial={{x: -100, opacity: 0}}
          animate= {{x:0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.5}} className="text-4xl lg:text-[80px] mt-9 text-slate-300 font-inter font-bold tracking-tighter">Hi, I'm <span className="text-indigo-600">Jaspher Gargar</span></motion.h2>
          <motion.p 
          initial={{x: -100, opacity: 0}}
          animate= {{x:0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.8}}
          className="mt-5 mb-4 text-xl text-slate-300 font-inter font-bold leading-relaxed tracking-tight lg:text-[40px] lg:mt-10 ">Frontend Developer</motion.p>
        </div>
         
      <motion.div 
       initial={{ y: 100, opacity: 0 }} 
       animate={{ y: 0, opacity: 1 }}  
       transition={{ duration: 0.5, delay: 1 }}  
       className="text-start text-xl flex space-x-8 py-6 lg:text-3xl lg:justify-center">
        
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