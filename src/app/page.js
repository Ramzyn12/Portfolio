"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import { Element } from "react-scroll";

export default function Home() {

  return (
    <>
      <Element name="header">
        <Header />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="experience">
        <Work />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      {/* Contact me */}
    </>
  );
}
