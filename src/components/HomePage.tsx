import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Portrait from "../assets/alis.png";

export const HomePage = () => {
  return (
    <div
      data-name="home"
      className="w-full h-screen bg-[#edede9] grid grid-cols-1 sm:grid-cols-2 gap-1"
    >
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Ada Lovelace
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#848794]">
          I´m a developer.
        </h2>
        <p className="text-[#848794] py-4 max-w-[700px]">
          Thanks for visiting my page, feel free to check out my portifolio
        </p>
        <div>
          <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex align-bottom h-full">
        <img
          className="absolute bottom-0 object-contain md:object-scale-down h-49 w-96"
          src={Portrait}
          alt="Portrait picture"
        />
      </div>
    </div>
  );
};
//mx-auto
