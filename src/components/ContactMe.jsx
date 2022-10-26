import React from "react";

const ContactMe = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#edede9] text-gray-700">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
