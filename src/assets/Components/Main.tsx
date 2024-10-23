import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiChakraui, SiMui } from "react-icons/si";

const Main = () => {
    return(
      <main className="px-8">
        <div className="text-center lg:text-6xl lg:text-left">
          <h2 className="text-color5 text-5xl font-bold ">Jaspher Gargar</h2>
          <h3 className="text-2xl text-font5 mt-2 font-bold py-2">A Frontend Developer</h3>
          <p className="text-sm font-Poppins py-4 leading-loose">Blending design and technology to craft interactive, user-friendly interfaces that deliver seamless and impactful digital experiences</p>
        </div>
         {/* Social Media Icons with links*/}
      <div className="text-3xl flex justify-center space-x-8 py-6">
        <a href="https://www.facebook.com/jasp.gar2/" target="_blank" rel="">
         <FaFacebook className="text-gray-700 transform transition-transform ease-in-out duration-200 hover:scale-110"/>
        </a>
        
        <a href="https://www.instagram.com/psaj__/" target="_blank" rel="">
        <FaInstagram className="text-gray-700 transform transition-transform ease-in-out duration-200 hover:scale-110"  />
        </a>
        
        <a href="" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-700 transform transition-transform ease-in-out duration-200 hover:scale-110"/>
        </a>
      </div>

        {/* About me*/}
      <div className="mt-48 text-md">
      </div>
      <div className="mt-32 text-md">
      <a href="#" className="flex flex-col items-center bg-gray-800 border rounded-lg shadow md:flex-row md:max-w-xl">
        <div className="flex flex-col justify-between p-4 tracking-normal md:p-6">
          <h5 className="text-xl text-left mb-6 ml-2 font-semibold text-white">Tech Stacks</h5>
          <ul className="grid grid-cols-4 gap-8 space-x-2 mt-5 mr-8">
          <li>
            <FaHtml5 className="text-orange-600" size={70} />
          </li>
          <li>
            <FaCss3 className="text-blue-600" size={70} />
          </li>
          <li>
            <DiJavascript className="text-yellow-400" size={70} />
          </li>
          <li>
            <FaReact className="text-blue-500" size={70} />
          </li>
          <li>
            <RiNextjsFill className="text-white" size={70} />
          </li>
          <li>
            <RiTailwindCssFill className="text-sky-500"size={70}/>
          </li>
          <li>
            <SiChakraui className="text-teal-600"size={70}/>
          </li>
          <li>
            <SiMui className="text-blue-500"size={70}/></li>
          </ul>
          <p className="my-8 mb-2 mx-2 mt-14 text-md text-left leading-relaxed text-slate-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quod labore. Quisquam iusto vitae quos aliquid eveniet, quia est sapiente natus quas reiciendis, veniam maiores corrupti assumenda impedit fugit hic?
          </p>
        </div>
      </a>
    </div>
      <div className="mt-40 mb-40 text-3xl text-blue-700 font-extrabold uppercase">
        Projects
      </div>
    </main>
    );  
}

export default Main; 