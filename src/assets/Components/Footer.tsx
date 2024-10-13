
const Footer = () => {
  return (
    <div className="font-Poppins">
      <h2 className="text-2xl font-bold mt-20 mx-12 my-8">Connect My Dick with Yo Puzzy!</h2>
    <form className="max-w-sm mx-auto">
    <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Name</label>
        <input type="name" id="name" className="bg-gray-50 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdul Jabol" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
      </div>
    <form className="max-w-sm mx-auto">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a fuckin message dawg..."></textarea>
     </form>
        <button type="submit" className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
    </form>
    <div>
        
<footer className=" mt-16 text-center rounded-lg m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">JasPorfolio™</a>. All Rights Reserved.
    </span>
    <ul className="flex justify-center mt-3 text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Terms & conditions</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
    </div>
  )
}

export default Footer