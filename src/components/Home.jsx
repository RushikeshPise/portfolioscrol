import React from "react";
import pers from "../assets/main.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-7xl font-bold text-white ">
            Hi, I'm Rushikesh Pise
          </h3>
          <p className="text-gray-300 py-4 max-w-md text-left">
            A FullStack developer and a passionate Software Enginer who always thrives to work on end
            to end products which develop sustainable and scalable social
            and technical systems to create impact.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={pers}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full pb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
