import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LeftBar = () => {
  return (
    <div className="fixed hidden left-10 bottom-0 z-50 items-center text-white lg:flex flex-col gap-5">
      <a href="mailto:ramzynanou02@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500"
        />
      </a>
      <a href="https://www.instagram.com/ramzy_sn/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500"
        />
      </a>
      <div className="w-[0.5px] h-32 bg-slate-300"></div>
    </div>
  );
};

export default LeftBar;
