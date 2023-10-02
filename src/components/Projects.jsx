import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-slate-900 lg:px-40 md:px-16 px-10 py-24">
      <div className="flex gap-5 items-center ">
        <h1 className="sm:text-3xl xs:text-2xl xxs:text-xl text-lg relative font-bold font-homeTitle text-slate-300">
          My Projects
        </h1>
        <div className="h-[0.5px] sm:w-64 xs:w-56 w-36 bg-slate-200"></div>
      </div>
      {/* main container */}
      <div className="flex mt-16 gap-5 flex-col">
        {/* project 1 */}
        <div className="flex items-center rounded-2xl">
          {/* description, name, skills etc.. */}
          <div className="md:-mr-16 max-w-lg relative z-30">
            <h1 className="text-2xl font-homeTitle font-bold text-slate-300">
              Emotify
            </h1>
            <p className="p-3 rounded-md mt-5 font-sans tracking-widest font-lg bg-[#082e63] text-slate-300">
              Full stack web app that integrates facial expression recognition
              with Spotify's music recommendation algorithm to offer
              personalised playlists based on the user's current emotion. Add
              daily notes and save your songs to revisit them via an interactive
              calender which holds a journal of your personal liked tracks,
              notes and saved emotions.
            </p>
            <ul className="flex mt-5 gap-3 flex-wrap">
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                React
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Tailwind
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Next.js
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Spotify API
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Firebase
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Face-api.js
              </li>
            </ul>
            {/* links */}
            <div className="text-white mt-5 gap-5 flex ">
              <a
                href="https://github.com/Ramzyn12/EmotifyApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300 text-slate-300 text-3xl "
                />
              </a>
              <a
                href="https://emotify-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300 text-slate-300 text-3xl "
                />
              </a>
            </div>
          </div>
          {/* img  */}
          <div className="max-w-[700px] left-3 right-3 hidden sm:block overlay absolute md:static">
            <a
              href="https://emotify-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/emotify.png"
                className="object-cover shadow-md shadow-slate-400 rounded-xl"
                alt="emotify img"
              />
            </a>
          </div>
        </div>
        {/* project 2 */}
        <div className="flex flex-row-reverse mt-24 items-center  rounded-2xl">
          {/* description, name, skills etc.. */}
          <div className="md:-ml-16 max-w-lg relative flex-col flex items-end z-30">
            <h1 className="text-2xl font-homeTitle font-bold text-sright text-slate-300">
              Frustration
            </h1>
            <p className="p-3 rounded-md mt-5 font-sans tracking-widest font-lg bg-[#082e63] text-slate-300">
              Full stack web-based game which rewards good timing with
              unlockable backgrounds and colour schemes based on your high score
              and difficulty mode. Dynamic theming and smooth animations create
              an immersive and engaging experience
            </p>
            <ul className="flex mt-5 gap-3 justify-end flex-wrap self-end">
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                React
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Redux
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Firebase
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Framer Motion
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                CSS
              </li>
            </ul>
            {/* links */}
            <div className="text-white mt-5 gap-5 flex ">
              <a
                href="https://github.com/Ramzyn12/FrustrationGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300 text-slate-300 text-3xl "
                />
              </a>
              <a
                href="https://frustrationgame.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300 text-slate-300 text-3xl "
                />
              </a>
            </div>
          </div>
          {/* img  */}
          <div className="max-w-[700px] left-3 right-3 hidden sm:block overlay absolute md:static">
            <a
              href="https://frustrationgame.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/frustration.png"
                className="object-cover shadow-md shadow-slate-400 rounded-xl"
                alt="emotify img"
              />
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex mt-24 items-center  rounded-2xl">
          {/* description, name, skills etc.. */}
          <div className="md:-mr-16 max-w-lg relative z-30">
            <h1 className="text-2xl font-homeTitle font-bold text-slate-300">
              Gangnam Restaraunt
            </h1>
            <p className="p-3 rounded-md mt-5 font-sans tracking-widest font-lg bg-[#082e63] text-slate-300">
              Seamlessly responsive website created for a local korean
              restaraunt based on the clients requirements. Featuring a
              personalised logo and smooth scroll-triggered animations to
              provide a professional and sleek user experience.
            </p>
            <ul className="flex mt-5 gap-3 flex-wrap">
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                React
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                CSS
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Responsive-carousel
              </li>
              <li className="px-4 text-slate-200 font-semibold font-sans py-1 bg-slate-500 rounded-full">
                Hostinger
              </li>
            </ul>
            {/* links */}
            <div className="text-white mt-5 gap-5 flex ">
              <a
                href="https://github.com/Ramzyn12/react-restaraunt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300 text-slate-300 text-3xl "
                />
              </a>
              <a
                href="https://gangnamstevenage.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300 text-slate-300 text-3xl "
                />
              </a>
            </div>
          </div>
          {/* img  */}
          <div className="max-w-[700px] md:m-0 my-16 left-3 right-3 hidden sm:block overlay absolute md:static">
            <a
              href="https://gangnamstevenage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/gangnam.png"
                className="object-cover shadow-md shadow-slate-400 rounded-xl"
                alt="coasters img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
