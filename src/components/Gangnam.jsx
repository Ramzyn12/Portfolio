import { faArrowRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Gangnam = () => {
  return (
    <div>
      <h1 className="font-homeTitle font-bold text-2xl text-slate-200 ">
        Freelance Web Developer
      </h1>
      <div className="font-sans mt-2  text-slate-400">Aug 2023 - Present</div>
      {/* Responsibilties */}
      <ul className="mt-5 flex flex-col gap-3">
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className=" relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Developed and designed a responsive website for a popular local
            restaurant with more than 300 google reviews.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Communicated regularly with the client, presenting multiple mockup
            designs of the final product to ensure client satisfaction.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Utilised React and Framer motion to craft a dynamic user interface
            with smooth scroll-triggered animations to boost user engagement.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Optimised website performance to secure a 93/100 speed test score
            via hostinger analytics.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Gangnam;
