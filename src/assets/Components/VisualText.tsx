import { motion } from "framer-motion"; 


function VisualText() {
  return (
    <motion.div
    initial={{ opacity: -10, y: 20 }}
     animate={{ opacity: 1, y: 1}}
     transition={{ duration: 2}}
     className="mt-[300px] px-16 pb-20 lg:mx-18">
      <h1 className="text-md text-center text-slate-300 font-inter font-bold lg:text-[27px] leading-relaxed tracking-normal ">I combine design and technology to create user-friendly, interactive interfaces for engaging digital experiences.
      </h1>
    </motion.div>
  )
}

export default VisualText; 