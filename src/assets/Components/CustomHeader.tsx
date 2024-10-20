import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai'; // Import Close Icon

const CustomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-8">
      <nav className="py-10 mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-gray-800 font-Poppins font-bold">JasPortfolio</h1>
        </div>
        <div className="md:hidden">
          {/* Hamburger Menu Icon for Mobile */}
          <ul className="flex items-center">
            <li className="text-2xl text-gray-800 px-0 py-1 rounded-lg ml-4 cursor-pointer" onClick={toggleDropdown}>
              <RxHamburgerMenu />
            </li>
          </ul>
        </div>
      </nav>

      {/* Background Blur when the menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleDropdown} // Clicking outside to close the menu
        ></div>
      )}

      {/* Dropdown Menu in Upper Right (Mobile) */}
      {isOpen && (
        <div className="absolute right-0 top-4 w-3/5 bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 md:hidden z-50">
          <div className="flex justify-end p-2">
            {/* Close Button */}
            <button onClick={toggleDropdown} className="text-2xl px-6 mt-6 text-white">
              <AiOutlineClose />
            </button>
          </div>
          <ul className="font-Poppins mx-6 py-8 pb-16 space-y-6">
            <li className="px-16 py-2 hover:bg-gray-100">
              <a href="#home" className="text-md font-xl uppercase text-white" onClick={toggleDropdown}>Home</a>
            </li>
            <li className="px-16 py-2 hover:bg-gray-100">
              <a href="#about" className="text-md font-xl uppercase text-white" onClick={toggleDropdown}>About</a>
            </li>
            <li className="px-16 py-2 hover:bg-gray-100">
              <a href="#projects" className="text-md font-xl uppercase text-white" onClick={toggleDropdown}>Projects</a>
            </li>
            <li className="px-16 py-2 hover:bg-gray-100">
              <a href="#contact" className="text-md font-xl uppercase text-white" onClick={toggleDropdown}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default CustomHeader;