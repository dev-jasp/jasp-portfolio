import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMui, SiChakraui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion"; 


const   iconAnimation = {
  hidden: {
    opacity: 0, 

  }
}

function About() {
  return (
   <div className="py-12 px-6 lg:ml-[600px] lg:px-10 lg:w-full bg-gradient-to-r from-slate-900 to-gray-900">
    <div className="space-y-6">
       <h1 className="text-cyan-600 text-3xl lg:text-3xl font-bold mb-12">Skills</h1>
       <div>
        <h4 className="text-gray-300 mb-6 font-bold text-xl">Languages</h4>
        </div>
      <div className="flex flex-wrap mb-4">
      <div className="flex flex-col items-center mr-4 mb-4">
        <DiJavascript className="h-14 w-16 text-2xl text-javascript mb-3" />
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          JavaScript
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <SiTypescript className="h-14 w-11 text-2xl text-typescript mb-3" />
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          TypeScript
        </span>
      </div>
      </div>
       <div>
        <h4 className="text-gray-300 mb-6 font-bold text-xl">Frameworks</h4>
        </div>
      <div className="flex flex-wrap mb-4 ">
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.3}}
        transition={{type: 'spring', stiffness: 300, damping: 8}}
        >
          <RiReactjsFill className="h-14 w-16 text-2xl text-react mb-3" />
        </motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          ReactJS
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.3}}
        transition={{type: 'spring', stiffness: 300, damping: 8}}
        >
          <RiNextjsFill className="h-14 w-16 text-2xl text-slate-200 mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          NextJS
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.3}}
        transition={{type: 'spring', stiffness: 300, damping: 8}}
        >
          <RiTailwindCssFill className="h-14 w-16 text-2xl text-tailwind mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          Tailwindcss
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.3}}
        transition={{type: 'spring', stiffness: 300, damping: 8}}
        >
          <SiChakraui className="h-14 w-12 text-2xl text-chakra mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          Chakra UI
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.3}}
        transition={{type: 'spring', stiffness: 300, damping: 8}}
        >
          <SiMui className="h-14 w-12 text-2xl text-mui mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          Material UI
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.3}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <TbBrandFramerMotion className="h-14 w-16 text-2xl text-framerMotion mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 bg-opacity-20 font-medium rounded-full cursor-pointer">
          Framer Motion
        </span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About 