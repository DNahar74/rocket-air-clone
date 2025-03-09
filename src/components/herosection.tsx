import React from "react";

const HeroSection = () => {
  return (
    <div className="text-white flex flex-col items-start px-12 pb-16 mt-4 mb-12 w-full">
      {/* First Line */}
      <h1 className="text-8xl font-light">We only do</h1>

      {/* Second Line: "what" + Line + "we do" */}
      <div className="flex items-center w-full mt-2">
        <h1 className="text-8xl font-light whitespace-nowrap md:mr-0 mr-8">what</h1>
        <div className="hidden md:block md:border-t border-white flex-grow mt-4 mx-6"></div>
        <h1 className="text-8xl font-light whitespace-nowrap">we do</h1>
      </div>

      {/* Third Line */}
      <h1 className="text-8xl font-light self-start md:self-end mt-2">best</h1>
    </div>
  );
};

export default HeroSection;
