import React from "react";

const ContactMe = () => {
  return (
    <div id="contact" className="w-full h-screen bg-[#edede9] text-gray-700">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Contact me
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex justify-start max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>aliswkn@gmail.com</p>
            <a href="https://no.linkedin.com/in/alis-wiken-wilson-890912159">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
