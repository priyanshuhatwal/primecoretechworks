"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/* ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "918949093837";

    const whatsappMessage = `
Hello PrimeCore TechWorks 👋

Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      className="
        relative min-h-screen w-full
        bg-[#030014] text-white
        pt-28 px-6 md:px-16
        overflow-hidden
      "
    >
      <div className="relative z-50 max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold
            bg-gradient-to-r from-purple-400 to-cyan-400
            bg-clip-text text-transparent">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to grow your business?
            Let’s connect and build something great together.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeLeft}
              className="text-2xl font-bold text-purple-400"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="text-gray-400 leading-relaxed"
            >
              PrimeCore TechWorks provides complete digital solutions including
              websites, web applications, UI/UX design and social media promotion.
            </motion.p>

            <motion.div
              variants={fadeLeft}
              className="space-y-3 text-gray-300"
            >
              <p>📍 Jhunjhunu, Rajasthan</p>
              <p>📧 primecoretechworks@gmail.com</p>
              <p>📞 +91 89490 93837</p>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0f0827] border border-purple-500/20 rounded-2xl p-8"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              autoComplete="off"
              variants={stagger}
            >
              <motion.input
                variants={fadeUp}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full bg-[#030014] border border-purple-500/20 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-400"
              />

              <motion.input
                variants={fadeUp}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full bg-[#030014] border border-purple-500/20 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-400"
              />

              <motion.textarea
                variants={fadeUp}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full bg-[#030014] border border-purple-500/20 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-400 resize-none"
              />

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-black font-semibold transition"
              >
                Send on WhatsApp
              </motion.button>
            </motion.form>
          </motion.div>

        </div>
      </div>

      <div className="h-24" />
    </section>
  );
};

export default ContactPage;
