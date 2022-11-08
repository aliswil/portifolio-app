import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";
import Event from "../assets/event-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#a9bfbd]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500">
            Skills
          </p>
          <p className="py-4">Take a look at my experiences</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4 p-5">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold text-lg">Developing</p>
            <p className="my-4">
              I like to code things from scratch, and enjoy solving problems
              with code.
            </p>
            <p className="my-4 font-semibold">Languages and frameworks:</p>
            <p className="my-4">
              React, Typescript, Javascript, Julia, Kotlin, Python, .Net, c#,
              CSS, Sass, Less, Tailwind, Java, Django, SQL, Azure
            </p>
            <p className="my-4 font-semibold">Editors:</p>
            <p className="my-4">VScode, Atom, PyCharm, Webstorm, IntelliJ </p>
            <p className="my-4 font-semibold">Methods:</p>
            <p className="my-4">Scrum, Kanban </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4 p-5">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold text-lg">Design</p>
            <p className="my-4">
              I love being creative and develop userfriendly technology. Through
              design I can express my visions and suit the users needs.
            </p>
            <p className="my-4 font-semibold">Tools:</p>
            <p className="my-4">Figma, Miro, Balsamiq</p>
            <p className="my-4 font-semibold">Methods:</p>
            <p className="my-4">
              Double Diamond, Google design sprint, Value proposition,
              Triangulation
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4 p-5">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />
            <p className="my-4 font-semibold text-lg">Event</p>
            <p className="my-4">
              Besides my studies i voluntaired in the arrangement commity of my
              student assosiation where i found a passion in arranging small to
              large events.
            </p>
            <p className="my-4 font-semibold">Events:</p>
            <p className="my-4">
              Banquets, jubilee, networking-events, codehubs, skiweekend,
              parties, low-key-events, student ball, company-trips, conferences.
            </p>
            <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
              Read more about my event experiences here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
