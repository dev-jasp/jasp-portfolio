import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Main = () => {
    return(
      <main className="px-8 mt-36">
        <div className="text-center lg:text-6xl lg:text-center">
          <h2 className="text-blue-800 text-5xl font-scodePro font-bold">Jaspher Gargar</h2>
          <h3 className="text-2xl text-font5 mt-2 font-bold py-2">Frontend Developer</h3>
          <p className="text-sm py-4 font-scodePro leading-loose">I blend design and technology to create interactive, user-centered interfaces that provide smooth and meaningful digital experiences.</p>
        </div>
         
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

       
    </main>
    );  
}

export default Main; 