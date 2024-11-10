

function Footer() {
  return (
    <section>
     <div className="py-12 px-6 w-full lg:ml-[600px] lg:w-[calc(100vw-600px)] lg:px-10 lg:items-center xl:ml-[40%] xl:px-16 xl:w-[calc(100vw-40%)] lg:bg-gradient-to-r  from-slate-950 to-gray-900">
        <h1 className="text-gray-200 text-xl font-bold lg:text-3xl text-center mb-6">Open to Opportunities</h1>
        <div className="flex items-center justify-center">
        <button>
          <a href="#_" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-slate-800 rounded-xl shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-xl font-bold text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease">Connect with Me!</span>
            <span className="relative invisible">Connect with Me!</span>
          </a>
        </button>
        </div>
      </div>
    </section>
  )
}

export default Footer
