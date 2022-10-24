import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/AWW.png";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo Image" style={{ width: "50 px" }} />
      </div>

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div className="hidden">
        <FaBars />
      </div>
      <div>
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
