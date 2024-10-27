
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Main = () => {
    return(
      <main className="px-12 mt-[140px] lg:px-[200px] lg:mt-[180px] ">
        <div className="lg:text-center">
          <h2 className="text-4xl lg:text-[80px] mt-9 text-slate-300 font-inter font-bold tracking-tighter">Hi, I'm <span className="text-indigo-600">Jaspher Gargar</span></h2>
          <p  className="mt-5 mb-4 text-xl text-slate-300 font-inter font-bold leading-relaxed tracking-tight lg:text-[28px] lg:mt-10 ">Frontend Developer</p>
        </div>
         
      <div className="text-start text-xl flex space-x-8 py-6 lg:text-3xl lg:justify-center">
        
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

        <div>

        </div>
      </div>
    </main>
    );  
}

export default Main; 