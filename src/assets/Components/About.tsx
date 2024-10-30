import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";


function About() {

  return (
    <div className="ml-[40%] bg-gradient-to-r from-slate-900 to-gray-900 p-8 h-screen font-sans">
       <h1 className="text-gray-200 text-3xl font-bold mb-10">Skills</h1>
      <div className="cursor-pointer">
        <p className="text-white">Language</p>
        <ul className="flex flex-row">
          <li className="mr-10 mb-10">
          <DiJavascript className="size-16"/>
            <p className="text-slate-300 px-4 py-1.5 border-2 border-indigo-600 rounded-full text-xs">Javascript</p>
          </li>
          <li>
          <SiTypescript className="size-16" />
            <p className="text-indigo-600">Typescript</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-white">Frameworks</p>
        <ul className="flex flex-row">
          <li className="mr-10">
          <DiJavascript className="size-16"/>
            <p>Javascript</p>
          </li>
          <li>
          <SiTypescript className="size-16" />
            <p>Typescript</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-white">Language</p>
        <ul className="flex flex-row">
          <li className="mr-10">
          <DiJavascript className="size-16"/>
            <p>Javascript</p>
          </li>
          <li>
          <SiTypescript className="size-16" />
            <p>Typescript</p>
          </li>
        </ul>
      </div>
     


    </div>
  )
}

export default About