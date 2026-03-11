"use client";

import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-20 w-full text-gray-300 px-6 py-16 pointer-events-auto">
      <div className="max-w-6xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">

          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              PrimeCore TechWorks
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Software • Digital • Social Growth Solutions  
              <br />
              We build, promote and scale modern digital products.
            </p>
          </div>

          {/* COMMUNITY */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Community</h3>
            <a className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-400 transition">
              <FaYoutube /> YouTube
            </a>
            <a className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-400 transition">
              <RxGithubLogo /> GitHub
            </a>
          </div>

          {/* SOCIAL */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Social Media</h3>
            <a href="https://www.instagram.com/primecore_it?igsh=MTlhMWl6MG5hNm45Ng==" className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-400 transition">
              <RxInstagramLogo /> Instagram
            </a>
            <a className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-400 transition">
              <RxTwitterLogo /> Twitter
            </a>
            <a className="flex items-center justify-center sm:justify-start gap-2 hover:text-purple-400 transition">
              <RxLinkedinLogo /> LinkedIn
            </a>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Contact</h3>
            <p className="text-sm text-gray-400">
             1st Floor Shiv Complex, Jhunjhunu, Rajasthan
            </p>
            <a
              href="mailto:primecoretechworks@gmail.com"
              className="text-sm hover:text-purple-400 transition block"
            >
              primecoretechworks@gmail.com
            </a>
            <p className="text-sm text-gray-400">
              +91 89490 93837
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-purple-500/20" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PrimeCore TechWorks. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
