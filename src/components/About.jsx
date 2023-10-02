"use client";
import React from "react";
import Story from "./Story";
import Skills from "./Skills";
import Interests from "./Interests";
import { useState } from "react";

const About = () => {
  const [aboutSection, setAboutSection] = useState("story");
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="wavy-section gap-4 py-40 flex lg:flex-row flex-col-reverse items-center md:justify-center justify-start ">
        <div className="md:max-w-[600px] p-8 flex flex-col gap-10">
          <div className="flex gap-5 items-center ">
            {/* <div className="h-[0.5px] flex-1  bg-slate-200"></div> */}

            <h1 className="xs:text-3xl text-2xl relative font-bold font-homeTitle text-slate-300">
              About Me
            </h1>
            <div className="h-[0.5px] flex-1 bg-slate-200"></div>
          </div>
          {/* main content */}
          <div className="flex md:flex-row flex-col items-start md:items-start justify-center gap-20">
            {/* sidebar */}
            {/* {showPersonal && (
              <div className="flex font-detailWords gap-8 md:flex-col flex-row">
                <div
                  onClick={() => setAboutSection("story")}
                  className="xs:w-24 w-16 rounded-full bg-blue-400 relative text-slate-300  xs:h-24 h-16"
                >
                  <div
                    className={`w-full h-full cursor-pointer bg-blue-500 absolute flex items-center justify-center rounded-full hover:bottom-0 hover:right-0 duration-500 ${
                      aboutSection === "story"
                        ? "-bottom-0 -right-0"
                        : "-bottom-3 -right-3"
                    } `}
                  >
                    Story
                  </div>
                </div>
                <div
                  onClick={() => setAboutSection("skills")}
                  className="xs:w-24 w-16 rounded-full  bg-blue-400 relative text-slate-300  xs:h-24 h-16"
                >
                  <div
                    className={`w-full h-full hover:bottom-0 hover:right-0 cursor-pointer bg-blue-500 absolute flex items-center justify-center rounded-full duration-500 ${
                      aboutSection === "skills"
                        ? "-bottom-0 -right-0"
                        : "-bottom-3 -right-3"
                    } `}
                  >
                    Skills
                  </div>
                </div>
                <div
                  onClick={() => setAboutSection("interests")}
                  className="xs:w-24 w-16 rounded-full bg-blue-400 relative text-slate-300  xs:h-24 h-16"
                >
                  <div
                    className={`w-full text-sm xs:text-base h-full cursor-pointer hover:bottom-0 hover:right-0 bg-blue-500 absolute flex items-center justify-center rounded-full duration-500 ${
                      aboutSection === "interests"
                        ? "-bottom-0 -right-0"
                        : "-bottom-3 -right-3"
                    } `}
                  >
                    Hobbies
                  </div>
                </div>
              </div>
            )} */}
            <div className="flex flex-col">
              {aboutSection === "story" ? (
                <Story />
              ) : aboutSection === "skills" ? (
                <Skills />
              ) : aboutSection === "interests" ? (
                <Interests />
              ) : (
                <Story />
              )}
              {/* {!showPersonal && (
                <button className="mt-5 border-slate-400 border   px-2 py-1 text-white font-detailWords" onClick={() => setShowPersonal(true)}>
                  More about me
                </button>
              )}
              {showPersonal && (
                <button className="mt-5 border-slate-400 border   px-2 py-1 text-white font-detailWords" onClick={() => setShowPersonal(false)}>
                  Ok Too Much Info...
                </button>
              )} */}
            </div>
          </div>
        </div>
        <svg
          className="top-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(15 23 42)"
            d="M320 28C160 28 80 49 0 70V0h1280v70c-80 21-160 42-320 42-320 0-320-84-640-84z"
          ></path>
        </svg>
        <svg
          className="bottom-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(15 23 42)"
            d="M320 28C160 28 80 49 0 70V0h1280v70c-80 21-160 42-320 42-320 0-320-84-640-84z"
          ></path>
        </svg>
        {/* Bitmoji pic */}
        <div className="max-w-sm">
          <img className="w-full" src="/bitmojiLeft.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
