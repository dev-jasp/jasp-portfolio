import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const CustomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-8">
      <nav className="py-10 mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-gray-800 font-Poppins font-bold">JasPortfolio</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-8 lg:space-x-10 font-Poppins">
            <li><a href="#home" className="text-gray-800 font-semibold">Home</a></li>
            <li><a href="#about" className="text-gray-800 font-semibold ">About</a></li>
            <li><a href="#projects" className="text-gray-800 font-semibold">Projects</a></li>
            <li><a href="#contact" className="text-gray-800 font-semibold">Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <ul className="flex items-center">
            <li className="text-2xl text-gray-800 px-0 py-1 rounded-lg ml-4 cursor-pointer" onClick={toggleDropdown}>
              <RxHamburgerMenu />
            </li>
          </ul>
        </div>
      </nav>

      {/* Bg Blur*/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"
          onClick={toggleDropdown} 
        ></div>
      )}

      {isOpen && (
        <div className="absolute right-0 top-4 w-3/5 bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 md:hidden z-50">
          <div className="flex justify-end p-2">
        
            <button onClick={toggleDropdown} className="text-2xl px-6 mt-6 text-white">
              <AiOutlineClose />
            </button>
          </div>
          <ul className="text-left font-Poppins mx-2 py-8 pb-16 space-y-6">
            <li className="px-16 py-2 transform transition-transform ease-in-out duration-100 hover:scale-110 ">
              <a href="" className="text-md font-xl  text-white" onClick={toggleDropdown}>Home</a>
            </li>
            <li className="px-16 py-2 transform transition-transform ease-in-out duration-100 hover:scale-110">
              <a href="" className="text-md font-xl  text-white" onClick={toggleDropdown}>About</a>
            </li>
            <li className="px-16 py-2 transform transition-transform ease-in-out duration-100 hover:scale-110">
              <a href="" className="text-md font-xl  text-white" onClick={toggleDropdown}>Projects</a>
            </li>
            <li className="px-16 py-2 transform transition-transform ease-in-out duration-100 hover:scale-110">
              <a href="" className="text-md font-xl  text-white" onClick={toggleDropdown}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default CustomHeader;