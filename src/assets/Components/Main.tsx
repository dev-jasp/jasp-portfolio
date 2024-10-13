import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { SiMui } from "react-icons/si";


const Main = () => {
    return(
      <div className="text-gray-800 text-center p-12 mt-16 font-Poppins">
        <h2 className=" text-4xl font-bold font-Poppins">Jaspher Gargar</h2>
        <h3 className="text-xl font-semibold text-blue-700 py-2">Frontend Developer</h3>
        <p className="text-sm font-Poppins py-4 leading-loose">Blending design and technology to craft interactive, user-friendly interfaces that deliver seamless and impactful digital experiences</p>
      <div className="text-5xl flex justify-center space-x-8 py-6">
        <div className="hover "><Facebook/></div>
        <Instagram/>
        <Linkedin/>
      </div>

      <div className="mt-24 text-md">
        <a href="#" className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <img 
            className="rounded-full border-2 border-blue-700 my-10 h-52 md:h-auto md:w-48 md:rounded-full md:rounded-s-lg" 
            src="/images/profile.jpg" 
            alt="Profile"
        />
        <div className="flex flex-col justify-between p-4 tracking-normal md:p-6">
            <h5 className="text-md text-left font-semibold text-white">
                Hi! I'm Jaspher ✌
            </h5>
            <p className="my-8 mb-2 mx-2 text-sm text-left leading-relaxed text-gray-200">
                I am a dedicated Front-End Developer with a strong passion for building intuitive and engaging web applications. With a solid foundation in HTML, CSS, and JavaScript, I specialize in creating responsive designs that enhance user experiences across various devices.
            </p>
       </div>   
        </a>
      </div>
      <div className="mt-24 text-md">
      <a href="#" className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <div className="flex flex-col justify-between p-4 tracking-normal md:p-6">
          <h5 className="text-md text-left font-semibold text-white">Tech Stacks</h5>
          <ul>
          <li className="h-20">
            <FaReact className="text-blue-500" size={40} />
          </li>
          <li>
            <RiTailwindCssFill className="text-sky-500"size={40}/>
          </li>
          <li>
            <SiChakraui className="text-teal-600"size={40}/>
          </li>
          <li>
            <SiMui className="text-blue-500"size={40}/></li>
          </ul>
          <p className="my-8 mb-2 mx-2 text-sm text-left leading-relaxed text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quod labore. Quisquam iusto vitae quos aliquid eveniet, quia est sapiente natus quas reiciendis, veniam maiores corrupti assumenda impedit fugit hic?
          </p>
        </div>
      </a>
    </div>
      
      </div>
    );  
}

export default Main; 