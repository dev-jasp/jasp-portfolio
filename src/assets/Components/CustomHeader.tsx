import { FaMoon } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";

const CustomHeader = () => {
    return (
        <header className=" px-8 ">
            <nav className="py-10 mb-10 flex justify-between">
                <div> 
                    <h1 className="text-3xl text-gray-800 font-Poppins font-bold">JasPortfolio</h1>
                </div>
                <div>
                    <ul className="flex items-center">
                        {/* <li className="cursor-pointer text-lg"><FaMoon/></li> */}
                        <li className="text-2xl text-gray-800 px-0 py-1 rounded-lg ml-4"><RxHamburgerMenu /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default CustomHeader;
