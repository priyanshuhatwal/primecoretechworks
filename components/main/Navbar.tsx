"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen md:w-full h-[65px] fixed top-0 z-50 px-6 md:px-10">
      <div className="max-w-[1855px] mx-auto h-full flex items-center justify-between rounded-full shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="hover:animate-spin"
          />
          <span className="font-bold text-gray-300 text-sm md:text-lg">
            PrimeCore | TechWorks
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex w-3/6 lg:w-1/3">
          <div className="flex justify-between w-full border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
            <Link href="/about" className="hover:text-purple-400 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-purple-400 transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
             <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-purple-400 transition">
            Pricing
          </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          {/* Socials desktop */}
          <div className="hidden sm:flex gap-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="hover:animate-spin"
                />
              </a>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl transition-transform duration-300"
          >
            <span
              className={`inline-block transition-transform duration-300 ${
                open ? "rotate-90 scale-110" : "rotate-0"
              }`}
            >
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU WITH ANIMATION */}
      <div
        className={`
          md:hidden absolute left-0 right-0 mx-auto mt-3
          bg-[#030014]
          backdrop-blur-xl
          rounded-2xl
          shadow-2xl
          overflow-hidden
          transition-all duration-500 ease-out
          ${
            open
              ? "top-[70px] opacity-100 scale-100"
              : "top-[40px] opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-gray-200">
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-purple-400 transition">
            Services
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-purple-400 transition">
            Contact
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-purple-400 transition">
            Pricing
          </Link>

          {/* Socials mobile */}
          <div className="flex gap-6 pt-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="hover:animate-spin"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
