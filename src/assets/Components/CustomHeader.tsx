import { FaMoon, FaSun } from 'react-icons/fa';

const CustomHeader = () => {
    return (
        <header className=" px-8 ">
            <nav className="py-10 mb-12 flex justify-between">
                <div> 
                    <h1 className="text-2xl text-gray-800 font-Poppins font-bold">JasPortfolio</h1>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="cursor-pointer text-lg"><FaMoon/></li>
                        <li className="bg-gray-800 text-white px-2 py-1 rounded-lg ml-4">Resume</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default CustomHeader;
