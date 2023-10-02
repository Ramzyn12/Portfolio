import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RightBar = () => {
  return (
    <div className="fixed hidden right-10 bottom-0 z-50 items-center text-white lg:flex flex-col gap-5">
      <a
        href="https://github.com/Ramzyn12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/ramzy-nanou"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500"
        />
      </a>
      <div className="w-[0.5px] h-32 bg-slate-300"></div>
    </div>
  );
};

export default RightBar;
