import React from "react";

const Skills = () => {
  return (
    <div>
      <div className=" py-6 rounded-3xl">
        <h1 className="text-xl font-bold font-homeTitle text-slate-200">
          Main frontend skills
        </h1>
        <ul className="flex gap-3 mt-5 flex-wrap">
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            HTML
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            CSS
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Javascript
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            React
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Next
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Tailwind
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Firebase
          </li>
        </ul>
        {/* <p>I got these skills through udemy courses, and a mixture of making lots of projects on my own.</p> */}
      </div>

      <div className=" py-6 rounded-3xl">
        <h1 className="text-xl font-bold font-homeTitle text-slate-200">
          Additional skills
        </h1>
        <ul className="flex gap-3 mt-5 flex-wrap">
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Python
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Pytorch
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            Machine Learning
          </li>
          <li className="text-slate-200 font-sans rounded-full px-3 py-1 bg-slate-600 ">
            AI
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Skills;
