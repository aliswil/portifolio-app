//import { listenerCount } from "process";
import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="w-full sm:h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-gray-700">
          Projects
        </p>
        <div className="pt-20">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Projects;
