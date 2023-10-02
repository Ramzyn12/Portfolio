import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Story = () => {
  return (
    <div className="">
      {/* <h1 className="font-homeTitle text-slate-200 text-xl font-bold ">
        My story
      </h1> */}
      <div className="flex flex-col gap-2">
        {/* <p className="text-slate-400 font-sans mt-1 sm:text-lg">
          Hello! I'm Ramzy, a Mathematics graduate from the London School of
          Economics. I was first introduced to coding through a Machine Learning
          and an AI course I took at university.
        </p> */}
        <p className="text-slate-400 font-sans mt-1 sm:text-lg">
          Hello! I&apos;m Ramzy, a Maths with Economics graduate from the London School of
          Economics. I was first introduced to coding through a Machine Learning
          and an AI course I took at university.
        </p>
        {/* <p className="text-slate-400 font-sans mt-1 sm:text-lg">
          Fascinated by the scope of possibility coding uncovers, I attended a
          web3 hackathon and found exchanging ideas and 
          working alongside like-minded peers extremely rewarding. Seeing the projects showcased by
          other teams amazed me and I have ever since been eagerly learning
          technologies and making projects along the way.
        </p> */}
        <p className="text-slate-400 font-sans mt-1 sm:text-lg">
          Intrigued by the scope of possibility coding uncovers, I attended a
          web3 hackathon and found exchanging ideas and 
          interacting with like-minded peers extremely rewarding. 
          After showcasing my own project and seeing those of others, 
          I continued to develop a keen interest in learning new techologies and making projects.
        </p>
        <p className="text-slate-400 font-sans mt-1 sm:text-lg">
          Here are some of my favourite tools and technologies to work with:
        </p>
      </div>
      {/* prettier-ignore */}
      <div className="flex flex-wrap text-slate-400 font-detailWords gap-8 mt-5">
        <ul className="flex flex-col gap-1">
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />HTML</li>
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />CSS</li>
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />Javascript</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />React</li>
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />Next.js</li>
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />Tailwind</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />Firebase</li>
          <li className="flex items-center  gap-2"><FontAwesomeIcon className="text-blue-500" icon={faCaretRight} />Framer Motion</li>
          {/* <li><FontAwesomeIcon icon={faCaretRight} /></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Story;
