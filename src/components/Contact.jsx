import React from "react";
import NavBar from "./NavBar";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { SiHashnode ,SiLeetcode} from "react-icons/si";

import { HiOutlineMail } from "react-icons/hi";
import contact from "../assets/contact.gif";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaTwitterSquare size={25} />
        </>
      ),
      href: "https://twitter.com/RushikeshPise7?t=yze_TAEYtcLl-vIg03caMA&s=09",
      style: "rounded-tr-md hover:bg-sky-700",
    },
    {
      id: 2,
      child: (
        <>
          <FaInstagram size={25} />
        </>
      ),
      href: "https://instagram.com/hodophil13?igshid=ZDdkNTZiNTM=",
      style: "rounded-tr-md hover:bg-pink-500"
    },
    {
      id: 3,
      child: (
        <>
          <SiHashnode size={25} />
        </>
      ),
      href: "https://rushikeshpise.hashnode.dev/",
      style: "rounded-tr-md hover:bg-sky-800",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:rushikeshpise13@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <SiLeetcode size={25} />
        </>
      ),
      href: "https://leetcode.com/rushikeshpise11/",
      style: "rounded-tr-md hover:bg-orange-600",
    },
  ];

  return (
    <div>
      <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white "
      ><NavBar />
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
          <span className="py-6  mt-14">
            <p className="text-4xl font-bold text-gray-200">
              Contact
            </p>
            <p className="pt-6">Submit the form below to get in touch with me</p>
          </span>
          <div className="ml-2 mr-0">
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/a83b542e-b100-4a8d-a728-f646a710a8cf"
              method="POST"
              className=" flex flex-col w-full md:w-1/2 "
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="8"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>


            {/* laptop */}
            <div className="justify-around flex flex-col ml-20">
            <div className="hidden sm:block md:block pl-20">
              <ul className="flex space-x-4">
                {links.map(({ id, child, href, style, download }) => (
                  <li
                    key={id}
                    className={
                      "flex justify-evenly flex-start p-1 rounded-lg  hover:rounded-t-md  bg-gray-600" +
                      " " +
                      style
                    }
                  >
                    <a
                      href={href}
                      className=" text-white"
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-10 px-10 hidden sm:block md:block ">
              <img
                src={contact}
                alt="my profile"
                className="rounded-3xl md:w-auto pb-6"
                />
            </div>
            </div>
          </div>
          </div>

          <div className="lg:hidden pt-2 mr-12">
            <ul className="flex space-x-4 justify-center">
              {links.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                  className={
                    "flex justify-center items-center p-1 rounded-lg  hover:rounded-t-md  bg-gray-600" +
                    " " +
                    style
                  }
                >
                  <a
                    href={href}
                    className=" text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
























































// import React from "react";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className=" flex justify-center items-center">
//           <form
//             action="https://getform.io/f/a83b542e-b100-4a8d-a728-f646a710a8cf"
//             method="POST"
//             className=" flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
