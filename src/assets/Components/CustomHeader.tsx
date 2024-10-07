import { FaMoon, FaSun } from 'react-icons/fa';

const CustomHeader = () => {
    return (
        <header className="bg-white px-8 ">
            <nav className="py-10 mb-12 flex justify-between">
                <div> 
                    <h1 className="text-lg font-Poppins font-bold">JasPORTFOLIO</h1>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="cursor-pointer text-lg"><FaMoon/></li>
                        <li className="bg-slate-800 text-white px-2 py-1 rounded-lg ml-4">Resume</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default CustomHeader;
