import { DiJavascript } from "react-icons/di";
import { RiReactjsFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMui, SiChakraui, SiTypescript, SiVercel, SiNetlify } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion"; 
import CustomTooltip from './Tooltip/CustomTooltip'; 


function About() {
  return (
   <div className="py-8 px-6 w-full lg:ml-[600px] lg:w-[calc(100vw-600px)] lg:px-10 lg:items-center xl:ml-[40%] xl:px-16 xl:w-[calc(100vw-40%)] lg:bg-slate-950">
    <div className="space-y-6">
       <h1 className="text-cyan-600 text-3xl lg:text-3xl font-bold mb-8">About</h1>
        <p className="text-slate-400 font-medium text-base leading-relaxed">I’m a 23-year-old software developer with a keen interest in exploring emerging technologies to continually expand my skill set.</p>
        <p className="text-slate-400 font-medium text-base leading-relaxed">Everything here is more than just a collection of projects—it's a reflection of my skills, creativity, and dedication as a front-end developer. Every detail has been thoughtfully crafted to demonstrate my expertise in designing intuitive, responsive, and visually engaging user experiences.</p>
        <p className="text-slate-400 font-medium text-base leading-relaxed">I believe that your health is your greatest asset, and it's definitely the best investment you can make. That's why when I’m not coding, you’ll find me lifting, sweating, and thriving at the gym. 💪</p>
        <div className="pt-6">
       <h1 className="text-cyan-600 text-3xl lg:text-3xl font-bold mb-8">Skills</h1>
       </div>
       <div>
        <h4 className="text-slate-400 mb-8 font-bold text-xl">Languages</h4>
        </div>
      <div className="flex flex-wrap mb-4">
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <DiJavascript className="h-12 w-14 text-2xl text-javascript mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs  bg-cyan-500 border-2 border-slate-800 bg-opacity-5 font-medium rounded-full cursor-pointer">
          JavaScript
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <SiTypescript className="h-12 w-9 text-2xl text-typescript mb-3" /></motion.span>
        <CustomTooltip title=''
        >
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5 font-medium rounded-full cursor-pointer">
          TypeScript
        </span>
        </CustomTooltip>
      </div>
      </div>
       <div>
        <h4 className="text-slate-400 mb-8 font-bold text-xl">Frameworks & Libraries</h4>
        </div>
      <div className="flex flex-wrap mb-4 ">
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <RiReactjsFill className="h-12 w-14 text-2xl text-react mb-3" />
        </motion.span>
        <CustomTooltip title="">
              <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
                ReactJs
              </span>
            </CustomTooltip>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <RiNextjsFill className="h-12 w-14 text-2xl text-slate-200 mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
          NextJS
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <RiTailwindCssFill className="h-12 w-14 text-2xl text-tailwind mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
          Tailwindcss
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <SiChakraui className="h-12 w-10 text-2xl text-chakra mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
          Chakra UI
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <SiMui className="h-12 w-10 text-2xl text-mui mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5 font-medium rounded-full cursor-pointer">
          Material UI
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <TbBrandFramerMotion className="h-12 w-14 text-2xl text-framerMotion mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
          Framer Motion
        </span>
      </div>
      </div>
       <div>
        <h4 className="text-slate-400 mb-8 font-bold text-xl">Tools & Platforms</h4>
        </div>
      <div className="flex flex-wrap mb-4 ">
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <FaGitAlt className="h-12 w-10 text-2xl text-gray-300 mb-3" />
        </motion.span>
            <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
                Git
            </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <VscVscode className="h-12 w-11 text-2xl text-vscode mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
          VS Code
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <SiVercel className="h-12 w-10 text-2xl text-gray-300 mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5 font-medium rounded-full cursor-pointer">
          Vercel
        </span>
      </div>
      <div className="flex flex-col items-center mr-4 mb-4">
        <motion.span
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 300, damping: 10}}
        >
          <SiNetlify className="h-12 w-11 text-2xl text-netlify mb-3" /></motion.span>
        <span className="text-cyan-500 px-3 py-1.5 text-xs bg-cyan-500 border-2 border-slate-800 bg-opacity-5  font-medium rounded-full cursor-pointer">
          Netlify
        </span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About 