import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-900 flex items-center justify-center min-h-screen px-10">
      <div className="flex flex-col lg:w-2/5 max-w-2xl md:w-2/3 sm:w-3/4 w-full items-center justify-center">
        <h1 className="text-blue-500 font-detailWords text-lg">What's Next?</h1>
        <h1 className="mt-5 font-homeTitle sm:text-5xl text-4xl font-bold text-slate-300">
          Get In Touch
        </h1>
        <p className="font-sans text-lg text-center text-slate-400 mt-5">
          Feel we would work well together? Let's have a chat!
        </p>
        <div className="flex gap-10 mt-5 items-center">
          <a
            href="https://github.com/Ramzyn12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl lg:hidden cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500 text-slate-200 "
            />
          </a>

          <a
            href="mailto:ramzynanou02@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-4 flex items-center gap-2  border-1 border rounded-sm text-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500 hover:border-blue-500 border-slate-200 font-detailWords ">
              Send Me An Email
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/ramzy-nanou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl lg:hidden cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-500 text-slate-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
