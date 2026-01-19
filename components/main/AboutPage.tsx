"use client";

import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section
      className="
        relative z-20 pointer-events-auto
        min-h-screen w-full
        bg-[#030014] text-white
        pt-28 px-6 md:px-16
      "
    >
      {/* HEADER */}
      <div className="relative z-30 max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About PrimeCore
        </h1>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          We build modern, scalable and performance-driven digital products
          that help businesses grow in today’s competitive world.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 pointer-events-auto">
          <h2 className="text-3xl font-bold text-purple-400">
            Who We Are
          </h2>

          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">
              PrimeCore TechWorks
            </span>{" "}
            is a digital solutions brand focused on crafting premium websites,
            powerful web applications and result-oriented digital growth
            strategies.
          </p>

          <p className="text-gray-300 leading-relaxed">
            From clean UI/UX design to scalable backend systems and social media
            promotion, we provide end-to-end solutions tailored to your
            business goals.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our mission is simple —{" "}
            <span className="text-purple-400 font-semibold">
              build smart, promote strong, and grow digitally.
            </span>
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[
              { value: "50+", label: "Projects" },
              { value: "100%", label: "Client Focus" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="
                  bg-[#0f0827]
                  border border-purple-500/20
                  rounded-xl p-4
                  text-center
                  pointer-events-auto
                "
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative flex justify-center pointer-events-auto">
          {/* GLOW (NON-INTERACTIVE) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 blur-2xl opacity-30 rounded-3xl pointer-events-none"></div>

          <div className="relative z-30 bg-[#0b061f] border border-purple-500/30 rounded-3xl p-8 shadow-xl max-w-sm text-center">
            <Image
              src="/logo.png"
              alt="PrimeCore Logo"
              width={100}
              height={100}
              priority
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-white">
              PrimeCore TechWorks
            </h3>
            <p className="text-gray-400 mt-3">
              Software • Digital • Social Growth Solutions
            </p>
          </div>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="relative z-30 max-w-6xl mx-auto mt-24 pointer-events-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Us Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Modern Technology",
              desc: "We use the latest frameworks and tools to build fast, secure and scalable products.",
            },
            {
              title: "Clean UI / UX",
              desc: "Designs that look premium and feel intuitive across all devices.",
            },
            {
              title: "Growth Focused",
              desc: "We don’t just build — we help you grow with digital marketing and promotion.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-[#0f0827]
                border border-purple-500/20
                rounded-2xl p-6
                hover:border-purple-400
                transition
                pointer-events-auto
              "
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-24" />
    </section>
  );
};

export default AboutPage;
