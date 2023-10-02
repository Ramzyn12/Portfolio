"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const slideInVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full bg-slate-900 fixed z-40 py-6 flex items-center">
      {/* container */}
      <div className="w-full md:px-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="font-detailWords cursor-pointer  text-white capitalize text-xl">
          <ScrollLink
            activeClass="activate"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            &lt;/ramzy&gt;
          </ScrollLink>
        </div>
        {/* Nav Links */}
        <ul className="lg:flex hidden font-detailWords gap-10 text-white text-lg">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            className="relative"
            duration={500}
          >
            <li
              onClick={() => setIsShowNav(false)}
              className="  cursor-pointer hover:text-blue-500 transition duration-300 "
            >
              About
            </li>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            className="relative"
            offset={-70}
            duration={500}
          >
            <li
              onClick={() => setIsShowNav(false)}
              className="  cursor-pointer hover:text-blue-500 transition duration-300 "
            >
              Projects
            </li>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            className="relative"
            duration={500}
          >
            <li
              onClick={() => setIsShowNav(false)}
              className="  cursor-pointer hover:text-blue-500 transition duration-300 "
            >
              Experience
            </li>
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            className="relative"
            offset={-70}
            duration={500}
          >
            <li
              onClick={() => setIsShowNav(false)}
              className="  cursor-pointer hover:text-blue-500 transition duration-300 "
            >
              Contact
            </li>
          </ScrollLink>
          <li className="cursor-pointer relative transform transition-transform duration-300 hover:-translate-y-1">
            <a className="py-2 px-4 border-2 hover:text-blue-500 hover:border-blue-500 duration-300 text-white rounded-xl border-white">
              Resume
            </a>
          </li>
        </ul>
        {/* Burger Menu */}
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsShowNav(true)}
          className="text-white cursor-pointer text-2xl lg:hidden "
        />
        {/* Phone Nav Links */}
        {isShowNav && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInVariants}
            className="flex flex-col fixed z-50 bg-[#082e63] items-center justify-center top-0 left-1/3 bottom-0 right-0 lg:hidden font-detailWords gap-10 text-white text-lg"
          >
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setIsShowNav(false)}
              className="text-2xl cursor-pointer text-white absolute top-8 right-8"
            />
            <ScrollLink
              onClick={() => setIsShowNav(false)}
              activeClass="active"
              to="about"
              spy={true}
              className="relative"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="cursor-pointer hover:text-blue-500 transition duration-300 ">
                About
              </li>
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsShowNav(false)}
              activeClass="active"
              to="projects"
              className="relative"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="  cursor-pointer hover:text-blue-500 transition duration-300 ">
                Projects
              </li>
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsShowNav(false)}
              activeClass="active"
              to="experience"
              spy={true}
              className="relative"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="  cursor-pointer hover:text-blue-500 transition duration-300 ">
                Experience
              </li>
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsShowNav(false)}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              className="relative"
              duration={500}
            >
              <li className="  cursor-pointer hover:text-blue-500 transition duration-300 ">
                Contact
              </li>
            </ScrollLink>
            <li className="  cursor-pointer hover:text-blue-500 transition duration-300 relative">
              <a
                onClick={() => setIsShowNav(false)}
                className="py-2 px-4 border-2 text-white rounded-xl border-white "
              >
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
