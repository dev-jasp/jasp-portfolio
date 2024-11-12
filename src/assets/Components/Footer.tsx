function Footer() {
  return (
    <section>
      <div className="w-full py-12 px-6 lg:ml-[600px] lg:w-[calc(100vw-600px)] lg:px-10 lg:items-center xl:ml-[40%] xl:px-16 xl:w-[calc(100vw-40%)] lg:bg-gradient-to-r from-slate-950 to-gray-900">
        
        <h1 className="text-center font-extrabold tracking-tight text-gray-400 text-md sm:text-2xl md:text-2xl lg:text=2xl">
          I'm actively seeking new opportunities
        </h1>
        <h1 className="text-center font-extrabold tracking-tight capitalize text-cyan-600 text-xl sm:text-3xl md:text-3xl lg:text-4xl">
          Feel free to reach out!
        </h1>
        <h1 className="text-center mb-7 font-extrabold tracking-tight text-gray-500 text-sm sm:text-xl md:text-xl lg:text-xl">
          I’ll be sure to respond as soon as possible
        </h1>
        
        <div className="flex items-center justify-center">
          <button>
            <a
              href="https://www.linkedin.com/in/james-gargar-215b69336/" 
              target="_blank"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-slate-800 rounded-xl shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </span>

              <span className="relative invisible">Connect with Me!</span>
              <span className="absolute flex items-center justify-center w-full h-full font-bold text-cyan-500 text-lg lg:text-xl transition-all duration-300 transform group-hover:translate-x-full ease">
                Connect with Me!
              </span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
