import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Calendly = () => {
  return (
    <section className="hidden md:flex justify-end py-2 px-2 w-full lg:ml-[600px] lg:w-[calc(100vw-600px)] lg:px-6 lg:items-center xl:ml-[40%] xl:py-6 xl:px-32 xl:w-[calc(100vw-40%)] lg:bg-slate-950">
  <motion.div 
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    custom={1.2}
    className="fixed top-14 right-8 z-50 bg-slate-950 px-4 rounded-xl border-2 border-sky-600">
    <div className="md:flex items-center gap-2"
    >
      <h1 className="text-slate-400 text-sm font-semibold">
        Schedule A Call with Me
      </h1>
      <button>
        <a
          href="https://calendly.com/jasphergargar/30min"
          target="_blank"
          className="relative inline-flex items-center justify-center px-4 mt-2 py-4 overflow-hidden font-medium transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-sky-600 duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </span>
        </a>
      </button>
    </div>
  </motion.div>
</section>

  );
};

export default Calendly;
