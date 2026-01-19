"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Palette,
  Megaphone,
  Search,
  ShieldCheck,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Modern, fast and responsive websites using latest technologies for better performance and user experience.",
    icon: <Globe size={34} />,
  },
  {
    title: "Web Applications",
    description:
      "Scalable and secure web apps tailored to your business needs with clean architecture.",
    icon: <Code2 size={34} />,
  },
  {
    title: "UI / UX Design",
    description:
      "Premium and intuitive designs that convert users into customers across all devices.",
    icon: <Palette size={34} />,
  },
  {
    title: "Social Media Promotion",
    description:
      "Result-driven Instagram, Facebook and brand promotions to grow your digital presence.",
    icon: <Megaphone size={34} />,
  },
  {
    title: "SEO Optimization",
    description:
      "Search engine optimization to improve visibility, traffic and online reach.",
    icon: <Search size={34} />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security checks and technical support for smooth operations.",
    icon: <ShieldCheck size={34} />,
  },
];

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ServicesPage: React.FC = () => {
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
          Our Services
        </h1>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          We provide complete digital solutions — from building powerful
          products to promoting your brand online.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              relative bg-[#0f0827]
              border border-purple-500/20
              rounded-2xl p-6
              hover:border-purple-400
              transition group
            "
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-purple-600/20 to-cyan-600/20
                blur-xl opacity-0
                group-hover:opacity-100 transition
                pointer-events-none
              "
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-4xl mx-auto mt-24 text-center bg-[#0b061f] border border-purple-500/20 rounded-3xl p-10"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to grow your business?
        </h2>
        <p className="text-gray-400 mb-6">
          Let’s build something powerful together.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </motion.div>

      <div className="h-24" />
    </section>
  );
};

export default ServicesPage;
