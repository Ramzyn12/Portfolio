import React from "react";
import Css from "@/assets/icons/Css";
import Html from "@/assets/icons/Html";
import JavascriptIcon from "@/assets/icons/JavascriptIcon";
import NextIcon from "@/assets/icons/NextIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";

const Header = () => {
  return (
    <main className="flex justify-center bg-slate-900 px-6 items-center min-h-screen">
      {/* Home page container */}
      <div className="flex md:flex-row flex-col-reverse w-full container xl:px-16 items-center">
        {/* Introduction */}
        <div className="flex flex-col py-5 md:py-0 items-start md:w-2/3 w-full">
          <h1 className="font-detailWords sm:text-xl text-lg text-blue-500">
            Hi, my name is
          </h1>
          <h1 className="lg:text-6xl sm:text-5xl text-4xl sm:mt-4 mt-2 tracking-wide text-slate-300 font-bold font-homeTitle">
            Ramzy Nanou.
          </h1>
          <h1 className="lg:text-6xl sm:text-5xl text-4xl  xs:whitespace-nowrap sm:mt-4 mt-2 tracking-wide text-slate-400 font-bold font-homeTitle">
            Frontend developer.
          </h1>
          {/* <p className="sm:text-xl text-lg xs:w-3/4 w-full text-slate-300 font-sans tracking-wide mt-4">
            I aspire to build unique digital experiences that make a difference
          </p> */}
          <div className="flex gap-2 mt-6 w-full items-start xs:items-center">
            <p className="text-blue-500 sm:text-lg xs:text-base whitespace-nowrap xs:whitespace-normal  text-sm font-detailWords border-r-2 xs:pr-6 pr-3 border-slate-400">
              Tech Stack
            </p>
            {/* icons */}
            <div className="flex xs:gap-6 gap-3 xs:pl-6 pl-3 flex-wrap  items-center">
              <img
                className="sm:w-8 sm:h-8 h-6 w-6"
                src="/htmlIcon.svg"
                alt="html-icon"
              />
              <img
                className="sm:w-8 sm:h-8 h-6 w-6"
                src="/cssIcon.svg"
                alt="css-icon"
              />
              <img
                className="sm:w-8 sm:h-8 h-6 w-6"
                src="/jsIcon.svg"
                alt="js-icon"
              />
              <img
                className="sm:w-8 sm:h-8 h-6 w-6"
                src="/reactIcon.svg"
                alt="react-icon"
              />
              <img
                className="sm:w-8 sm:h-8 h-6 w-6"
                src="/nextIcon.svg"
                alt="next-icon"
              />
              <img
                className="sm:w-8 sm:h-8 h-6 w-6"
                src="/tailwindcss-plain.svg"
                alt="tailwind-icon"
              />

              {/* <Html />
              <Css />
              <JavascriptIcon /> 
             <ReactIcon />
              <NextIcon />
              <TailwindIcon /> */}
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-2/5 w-1/2 py-5 md:py-0">
          <img src="/homeImage2.png" className="w-full" alt="man coding" />
        </div>
      </div>
    </main>
  );
};

export default Header;
