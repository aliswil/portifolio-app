import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#96a78d] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#335b20]">
              About me.
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl ">
            <p>Hi. I´m Henriette, and as you already know, I'm currently a student at NTNU Trondheim. Where I will complete a bachelor degree in Computer Engineering, in June 2023.</p>
          </div>
          <div>
            <p>I am passionate about tech and solving problems with code, and my wish for future employment would be to use my programming skills to solve problems connected to health technology. Being able to work in this field, is what drove me to apply for this degree. And I have been very happy and content with my choice ever since! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
