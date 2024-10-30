import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";


function About() {

  return (
    <div className="ml-[40%] bg-gradient-to-r from-slate-900 to-gray-900 p-8 h-screen font-sans">
       <h1 className="text-gray-200 text-3xl font-bold mb-8">Skills</h1>
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