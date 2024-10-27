import { FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="font-Poppins">
      <div className="text-left mt-20 mx-12 my-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Me!</h2>
        <p>Reach out today to discuss to discuss your project needs and start colaborating on something amazing!</p>
      </div>

    

      {/* Footer */}
      <footer className="mt-16 text-center rounded-sm p-5 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-400">
            © 2024 <a href="#" className="hover:underline">JasPorfolio™</a>. All Rights Reserved.
          </span>
          <ul className="flex justify-center space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <li className="text-xl">
            <a href="" target="_blank" rel="">
            <FaDiscord className="text-gray-400 transform transition-transform ease-in-out duration-200 hover:scale-110"/>
            </a>
            </li>
            <li className="text-xl">
            <a href="https://github.com/nattycodes2" target="_blank" rel="">
            <FaGithub className="text-gray-400 transform transition-transform ease-in-out duration-200 hover:scale-110"/>
            </a>
            </li>
            <li>
              <a href="#" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
          <div>
            
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
