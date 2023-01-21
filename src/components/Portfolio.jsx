import React from "react";
import snake from "../assets/portfolio/snake.png";
import spotify from "../assets/portfolio/spotify.png";
import weatherInfo from "../assets/portfolio/weatherInfo.png";
import numberGame from "../assets/portfolio/numbergame.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: snake,
      code:"https://github.com/RushikeshPise/SnakeGame-Java",
      
    },
    {
      id: 2,
      src: spotify,
      code: "https://github.com/RushikeshPise/Spotify-UI-clone",
    },
    {
      id: 3,
      src: weatherInfo,
      demo: "https://rushikeshpise.github.io/weatherinfo/",
      code: "https://github.com/RushikeshPise/weatherinfo",
    },
    {
      id: 4,
      src: numberGame,
      code: "https://github.com/RushikeshPise/Number-Guessing-Game--Java",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-900 w-full text-white md:h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* function demo(){
          portfolios.map(id,demo)
        } */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-24">
          {portfolios.map(({ id, src ,demo ,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button href={code} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
