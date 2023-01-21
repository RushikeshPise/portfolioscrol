import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white pb-4" 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-5 pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </div>

        <p className="text-xl mt-12 ">
        I am a Full-Stack developer based in Hyderabad(India). I have completed my graduation in 
        Computer Science Engineering from NGIT,Osmania University-2022. 
        I am very passionate Web Developer and about improving my coding skills &
        developing applications, websites.
        </p>

        <br />

        <p className="text-xl">
           Apart from this, In free time am a Nature Photographer, who would like to click the moments and share with the world !
        </p>
      </div>
    </div>
  );
};

export default About;
