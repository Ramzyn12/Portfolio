import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Coasters = () => {
  return (
    <div>
      <h1 className="font-homeTitle font-bold text-2xl text-slate-200 ">
        Freelance Web Developer
      </h1>
      <div className="font-sans mt-2  text-slate-400">Sep 2023 - Present</div>
      {/* Responsibilties */}
      <ul className="mt-5 flex flex-col gap-3">
        <li className="flex items-start gap-2">
          <FontAwesomeIcon icon={faCaretRight} className=" relative top-1 text-blue-500" />
          <div className="text-slate-400">Responsible for making a website for gangnam using react</div>
        </li>
        <li className="flex items-start gap-2">
          <FontAwesomeIcon icon={faCaretRight} className="relative top-1 text-blue-500" />
          <div className="text-slate-400">
            Found the client through phone calls and then he wanted a website so
            made him one{" "}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Coasters