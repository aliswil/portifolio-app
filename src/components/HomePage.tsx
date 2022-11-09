import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#d6cfcb]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-stone-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#5d3a00]">
          Henriette Brekke Sunde
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#9f8f7f]">
          I´m a student at NTNU Trondheim.
        </h2>
        <p className="text-[#684e32] py-4 max-w-[700px]">
          Thanks for visiting my page, feel free to check out my portfolio
        </p>
        <div>
          <Link to="about" smooth={true}>
            <button className="text-stone-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-stone-400 hover:border-stone-600 hover:text-emerald-0">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
