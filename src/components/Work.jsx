"use client";
import React from "react";
import { useState } from "react";
import Story from "./Story";
import Skills from "./Skills";
import Interests from "./Interests";
import Gangnam from "./Gangnam";
import Coasters from "./Coasters";
import JohnLewis from "./JohnLewis";

const Work = () => {
  const [workSection, setWorkSection] = useState("gangnam");

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="wavy-section py-40 flex items-start md:justify-center justify-start ">
        <div className="max-w-[750px] p-8 flex flex-col gap-10">
          <div className="flex gap-5 items-center ">
            <div className="h-[0.5px] flex-1 bg-slate-200"></div>

            <h1 className="xs:text-2xl sm:text-3xl xxs:text-xl text-lg relative font-bold font-homeTitle text-slate-300">
              My Work Experience
            </h1>
            <div className="h-[0.5px] flex-1 bg-slate-200"></div>
          </div>
          {/* main content */}
          <div className="flex md:flex-row flex-col items-start md:items-start justify-center gap-20">
            {/* sidebar */}
            <div className="flex font-detailWords md:flex-col flex-row">
              <div
                onClick={() => setWorkSection("gangnam")}
                className={`cursor-pointer xs:px-6  xxs:px-3 px-2 xs:text-xl xxs:text-lg text-base text-slate-200 hover:bg-[#0a397c] duration-500 xs:py-3 py-2 font-detailWords ${
                  workSection === "gangnam"
                    ? "border-l-2 border-blue-500 bg-[#0a397c]"
                    : "border-l-2 border-slate-200"
                }`}
              >
                Gangnam
              </div>
              {/* <div
                onClick={() => setWorkSection("coasters")}
                className={`cursor-pointer xs:px-6  xxs:px-3 px-2 xs:text-xl xxs:text-lg text-base text-slate-200 hover:bg-[#0a397c] duration-500 xs:py-3 py-2 font-detailWords ${
                  workSection === "coasters"
                    ? "border-l-2 border-blue-500 bg-[#0a397c]"
                    : "border-l-2 border-slate-200"
                }`}
              >
                Coasters
              </div> */}
              <div
                onClick={() => setWorkSection("johnLewis")}
                className={`cursor-pointer whitespace-nowrap xs:px-6  xxs:px-3 px-2 xs:text-xl xxs:text-lg text-base text-slate-200 hover:bg-[#0a397c] duration-500 xs:py-3 py-2 font-detailWords ${
                  workSection === "johnLewis"
                    ? "border-l-2 border-blue-500 bg-[#0a397c]"
                    : "border-l-2 border-slate-200"
                }`}
              >
                John Lewis
              </div>
            </div>
            {workSection === "gangnam" ? (
              <Gangnam />
            ) : workSection === "coasters" ? (
              <Coasters />
            ) : workSection === "johnLewis" ? (
              <JohnLewis />
            ) : (
              <Gangnam />
            )}
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
      </div>
    </div>
  );
};

export default Work;
