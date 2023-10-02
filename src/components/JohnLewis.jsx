import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const JohnLewis = () => {
  return (
    <div>
      <h1 className="font-homeTitle font-bold text-2xl text-slate-200 ">
        Sales Assistant
      </h1>
      <div className="font-sans mt-2  text-slate-400">Sep 2018 - Feb 2019</div>
      {/* Responsibilties */}
      <ul className="mt-5 flex flex-col gap-3">
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className=" relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Recommended suitable household items given the customers’
            requirements, regularly receiving a commendation for excellent
            customer service.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Managed the rota for a team of 6, assigning roles based on
            availability and preference.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="relative top-1 text-blue-500"
          />
          <div className="text-slate-400">
            Actively updated my knowledge of products to accurately advise
            customers with the appropriate information.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default JohnLewis;
