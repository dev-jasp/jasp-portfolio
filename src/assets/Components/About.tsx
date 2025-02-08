import { DiJavascript } from "react-icons/di";
import { RiReactjsFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMui, SiChakraui, SiTypescript, SiVercel, SiNetlify } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" }
  })
};

const About = () => {
  const aboutTexts = [
    "I’m a 24-year-old software developer with a keen interest in exploring emerging trends and continuously expanding my skill set and expertise to deliver forward-thinking solutions.",
    "Everything here is more than just a collection of projects—it's a reflection of my skills, creativity, and dedication as a front-end developer. Every detail has been thoughtfully crafted to demonstrate my expertise in designing intuitive and visually engaging user experiences.",
    "Apart from this, I believe that health is our greatest asset and the best investment we can make in life. That’s why, when I’m not coding, you’ll find me lifting at the ",
  ];

  const skills = {
    languages: [
      { icon: <DiJavascript className="h-10 w-12 text-2xl text-javascript" />, name: "JavaScript" },
      { icon: <SiTypescript className="h-10 w-8 text-2xl text-typescript" />, name: "TypeScript" },
    ],
    frameworks: [
      { icon: <RiReactjsFill className="h-10 w-11 text-2xl text-react" />, name: "ReactJs" },
      { icon: <RiNextjsFill className="h-10 w-14 text-2xl text-slate-200" />, name: "NextJS" },
      { icon: <RiTailwindCssFill className="h-10 w-12 text-2xl text-tailwind" />, name: "Tailwindcss" },
      { icon: <SiChakraui className="h-10 w-9 text-2xl text-chakra" />, name: "Chakra UI" },
      { icon: <SiMui className="h-10 w-9 text-2xl text-mui" />, name: "Material UI" },
      { icon: <TbBrandFramerMotion className="h-10 w-10 text-2xl text-framerMotion" />, name: "Framer Motion" },
    ],
    tools: [
      { icon: <FaGitAlt className="h-10 w-10 text-2xl text-gray-300" />, name: "Git" },
      { icon: <VscVscode className="h-10 w-11 text-2xl text-vscode" />, name: "VS Code" },
      { icon: <SiVercel className="h-10 w-9 text-2xl text-gray-300" />, name: "Vercel" },
      { icon: <SiNetlify className="h-10 w-10 text-2xl text-netlify" />, name: "Netlify" },
    ],
  };

  const renderSkillItem = (icon: JSX.Element, name: string) => (
    <div className="flex flex-col items-center">
      <motion.span 
        whileHover={{ scale: 1.4 }} 
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        {icon}
      </motion.span>
      <span className="text-sky-600 px-3 py-1 text-xs bg-sky-600 border-2 border-slate-800 bg-opacity-5 font-medium rounded-full cursor-pointer mt-2">
        {name}
      </span>
    </div>
  );

  return (
    <div className="py-8 px-6 w-full lg:ml-[600px] lg:w-[calc(100vw-600px)] lg:px-6 lg:items-center xl:ml-[40%] xl:py-0 xl:pt-28 xl:px-40 xl:w-[calc(100vw-40%)] lg:bg-slate-950">
      <div className="space-y-6">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.6} className="flex items-center text-slate-400 text-2xl lg:text-2xl font-bold mb-8">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
          </span>
          About
        </motion.h1>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.6} className="space-y-4 text:xs lg:text-base font-[450] leading-7 lg:leading-7 hyphens-auto tracking-tight">
          {aboutTexts.map((text, index) => (
            <p key={index} className="text-slate-400">
              {index === 2 ? (
                <>
                  {text}
                  <span className="highlight">gym</span> as well as travelling and reconnecting with nature to{" "}
                  <span className="highlight">recharge.</span> My enthusiasm mirrors balanced outlook on life and dedication to personal growth. {" "}
                </>
              ) : (
                text
              )}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="pt-12 lg:pt-32">
        <h1 className="flex items-center text-slate-400 text-2xl lg:text-2xl font-bold mb-8">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </svg>
          </span>
          Skills
        </h1>
        <div>
          <h4 className="text-slate-400 !mb-4 font-bold text-[17px]">Languages</h4>
          <div className="flex flex-wrap mb-4">
            {skills.languages.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mr-2.5 mb-4">
                {renderSkillItem(skill.icon, skill.name)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-slate-400 !mb-4 font-bold text-[17px]">Frameworks & Libraries</h4>
          <div className="flex flex-wrap mb-4">
            {skills.frameworks.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mr-2.5 mb-4">
                {renderSkillItem(skill.icon, skill.name)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-slate-400 mb-4 font-bold text-[17px]">Tools & Platforms</h4>
          <div className="flex flex-wrap">
            {skills.tools.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mr-2.5 mb-4">
                {renderSkillItem(skill.icon, skill.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;