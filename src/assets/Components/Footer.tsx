
const Footer = () => {
  return (
    <section className="font-Poppins">
      <header className="text-center mt-20 mx-12 my-8">
        <h2 className="text-2xl font-bold">Let's Connect!</h2>
      </header>

      <form className="max-w-sm mx-auto mb-16">
        {/* Name input */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Abdul Jabol"
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@email.com"
            required
          />
        </div>

        {/* Message textarea */}
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-slate-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a message..."
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-16 text-center rounded-sm p-4 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-400">
            © 2024 <a href="#" className="hover:underline">JasPorfolio™</a>. All Rights Reserved.
          </span>
          <ul className="flex justify-center space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
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
        </div>
      </footer>
    </section>
  );
};

export default Footer;
