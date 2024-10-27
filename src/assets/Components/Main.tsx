
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Main = () => {
    return(
      <main className="px-12 lg:px-[200px] mt-[140px]">
        <div className="lg:text-center">
          <h2 className="text-6xl lg:text-[80px] mt-9 text-slate-300 font-inter font-bold tracking-tighter">Hi, I'm <span className="text-indigo-600">Jaspher Gargar</span></h2>
          <p  className="mt-5 mb-4 text-xl text-slate-100 font-inter font-bold lg:text-[28px] lg:leading-relaxed lg:tracking-tight uppercase">Frontend Developer</p>
        </div>
         
      <div className="text-3xl  flex justify-center space-x-8 py-6">
        <a href="https://www.facebook.com/jasp.gar2/" target="_blank" rel="">
         <FaFacebook className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"/>
        </a>
        
        <a href="https://www.instagram.com/psaj__/" target="_blank" rel="">
        <FaInstagram className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"  />
        </a>
        
        <a href="" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-500 transform transition-transform ease-in-out duration-200 hover:scale-110 hover:text-indigo-600"/>
        </a>
        <div>
          
        </div>
      </div>
    </main>
    );  
}

export default Main; 