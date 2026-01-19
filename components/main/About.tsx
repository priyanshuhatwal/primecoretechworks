"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
    >
      {/* HEADING */}
      <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                PrimeCore TechWorks{" "}
              </span>
            </motion.div>
          )}
        </InView>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto">

        {/* IMAGE / LOGO / ILLUSTRATION */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.5)}
              className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              {/* REPLACE IMAGE */}
              <img
                src="/Team.png"
                alt="PrimeCore TechWorks"
                width={260}
              />
            </motion.div>
          )}
        </InView>

        {/* COMPANY NAME */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.5)}
              className="Welcome-box px-[15px] py-[8px] z-[20] my-[20px] border border-[#7042f88b] opacity-[0.9]"
            >
              <h1 className="Welcome-text text-[20px] font-bold">
                PrimeCore TechWorks
              </h1>
            </motion.div>
          )}
        </InView>

        {/* ABOUT TEXT */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromBottom}
              className="Welcome-box px-[15px] w-[90%] md:w-3/4 py-[12px] z-[20] mb-[20px] border border-[#7042f88b] opacity-[0.9]"
            >
              <p className="Welcome-text text-[16px] w-full text-justify leading-relaxed">
                PrimeCore TechWorks is a modern IT solutions company focused on
                building powerful digital products that help businesses grow.
                We specialize in creating high-performance websites, scalable
                web applications, and result-driven digital solutions tailored
                to each client’s unique needs.
                <br /><br />
                Our approach blends clean UI/UX design, robust development
                practices, and the latest technologies to deliver secure, fast,
                and scalable solutions. From startups to growing businesses, we
                partner with brands to transform ideas into impactful digital
                experiences.
                <br /><br />
                At PrimeCore TechWorks, we don’t just build software — we build
                long-term digital growth.
              </p>
            </motion.div>
          )}
        </InView>
      </div>

      {/* TAGLINE */}
      <div className="absolute z-[20] bottom-[-4rem] md:bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Building Digital Solutions That Drive Business Growth
        </div>
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="h-full"
          src="/encryption.webm"
        />
      </div>
    </section>
  );
};

export default About;
