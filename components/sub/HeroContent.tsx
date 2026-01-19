"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import Link from "next/link";

const HeroContent = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
        >
          {/* LEFT CONTENT */}
          <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
            
            {/* TOP TAGS */}
            <div className="hidden md:flex flex-row items-center md:gap-5 gap-1">
              {[
                "Web Development",
                "App Development",
                "Digital Growth Partner",
              ].map((text, index) => (
                <InView key={index} triggerOnce={false}>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={slideInFromTop}
                      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
                    >
                      <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                      <h1 className="Welcome-text text-[13px]">
                        {text}
                      </h1>
                    </motion.div>
                  )}
                </InView>
              ))}
            </div>

            {/* MAIN HEADING */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] z-20"
                >
                  <span>
                    Transforming
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {" "}
                      Business Ideas{" "}
                    </span>
                    into
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {" "}
                      Powerful Digital Solutions{" "}
                    </span>
                  </span>
                </motion.div>
              )}
            </InView>

            {/* SUB POINTS */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.ul
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.8)}
                  className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] z-30 list-disc pl-5"
                >
                  <li>Custom websites & web apps built for business growth</li>
                  <li>Fast, secure & scalable solutions using modern technologies</li>
                  <li>UI/UX focused designs that convert visitors into customers</li>
                  <li>End-to-end digital solutions — development to promotion</li>
                </motion.ul>
              )}
            </InView>

            {/* CTA BUTTON */}
           <InView triggerOnce={false}>
  {({ inView, ref }) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromLeft(1)}
      className="z-40"
    >
      <Link
        href="/contact"
        className="
          inline-block
          py-2 px-6
          button-primary
          text-center text-white
          cursor-pointer
          rounded-lg
          max-w-[220px]
        "
      >
        Get a Free Consultation
      </Link>
    </motion.div>
  )}
</InView>
          </div>

          {/* RIGHT IMAGE */}
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.8)}
                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
              >
                <Image
                  src="/mainIconsdark.svg"
                  alt="PrimeCore TechWorks services"
                  height={650}
                  width={650}
                  priority
                />
              </motion.div>
            )}
          </InView>
        </motion.div>
      )}
    </InView>
  );
};

export default HeroContent;
