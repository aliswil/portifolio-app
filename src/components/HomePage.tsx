import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import cover from "../assets/cover.png";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#edede9]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          “Skåler du, skåler vi, skåler alle!”
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#9966CB] pb-8">
          Nyttårssang 2022
        </h2>

        {/*         SETTE inn coverbilde her*/}
        <div>
          <img
            className="w-10"
            src={cover}
            style={{ width: "350px", height: "300px" }}
          />
          <img
            className="w-10"
            src={cover}
            style={{ width: "350px", height: "300px" }}
          />
        </div>

        <p className="text-[#848794] py-4 max-w-[700px]">
          Skrevet av: JJ and The TWINS
        </p>
        <div>
          <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9966CB] hover:border-[#989cab] hover:text-white">
            <Link to="about" smooth={true} duration={500}>
              Trykk for å lær deg den fete teksten
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>

    /* <div id="home" className="w-full h-screen bg-[#edede9]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Cathrine
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#e6b8e7]">
          I´m a developer.
        </h2>
        <p className="text-[#848794] py-4 max-w-[700px]">
          Thanks for visiting my page, feel free to check out my portifolio
        </p>
        <div>
          <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
            <Link to="projects" smooth={true} duration={500}>
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div> */
  );
};
