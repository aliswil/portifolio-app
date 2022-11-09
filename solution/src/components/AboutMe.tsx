import React from "react";
import Portrait2 from "../assets/about_alis.png";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-end items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-3 gap-8">
          <div></div>
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col justify-end align-bottom h-full">
            <img
              className="object-contain md:object-scale-down h-auto sm:max-w-xl max-w-xs"
              src={Portrait2}
              alt="Portrait picture 2"
            />
          </div>
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Alis, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about solving future problems with tech and gender
              equality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
