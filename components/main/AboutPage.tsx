"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

/* ANIMATION VARIANTS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-6xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About PrimeCore
        </h1>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          We build modern, scalable and performance-driven digital products
          that help businesses grow in today’s competitive world.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeLeft}
            className="text-3xl font-bold text-purple-400"
          >
            Who We Are
          </motion.h2>

          <motion.p variants={fadeLeft} className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">
              PrimeCore TechWorks
            </span>{" "}
            is a digital solutions brand focused on crafting premium websites,
            powerful web applications and result-oriented digital growth
            strategies.
          </motion.p>

          <motion.p variants={fadeLeft} className="text-gray-300 leading-relaxed">
            From clean UI/UX design to scalable backend systems and social media
            promotion, we provide end-to-end solutions tailored to your
            business goals.
          </motion.p>

          <motion.p variants={fadeLeft} className="text-gray-300 leading-relaxed">
            Our mission is simple —{" "}
            <span className="text-purple-400 font-semibold">
              build smart, promote strong, and grow digitally.
            </span>
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-3 gap-6 pt-6"
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "100%", label: "Client Focus" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                className="
                  bg-[#0f0827]
                  border border-purple-500/20
                  rounded-xl p-4
                  text-center
                  transition
                "
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 blur-2xl opacity-30 rounded-3xl"></div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-30 bg-[#0b061f] border border-purple-500/30 rounded-3xl p-8 shadow-xl max-w-sm text-center"
          >
            <Image
              src="/logo.jpg"
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
          </motion.div>
        </motion.div>
      </div>

      {/* VALUES SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-6xl mx-auto mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Us Different
        </h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
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
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                bg-[#0f0827]
                border border-purple-500/20
                rounded-2xl p-6
                hover:border-purple-400
                transition
              "
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="h-24" />
    </section>
  );
};

export default AboutPage;
