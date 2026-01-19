"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "918949093837"; // ← WhatsApp number (91 + number)

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
      {/* CONTENT */}
      <div className="relative z-50 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold
            bg-gradient-to-r from-purple-400 to-cyan-400
            bg-clip-text text-transparent">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to grow your business?
            Let’s connect and build something great together.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-400">
              Get in Touch
            </h2>

            <p className="text-gray-400 leading-relaxed">
              PrimeCore TechWorks provides complete digital solutions including
              websites, web applications, UI/UX design and social media promotion.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📍 Jhunjhunu, Rajasthan</p>
              <p>📧 primecoretechworks@gmail.com</p>
              <p>📞 +91 89490 93837</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0f0827] border border-purple-500/20 rounded-2xl p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              autoComplete="off"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full bg-[#030014] border border-purple-500/20 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full bg-[#030014] border border-purple-500/20 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-400"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full bg-[#030014] border border-purple-500/20 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-400 resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-black font-semibold hover:scale-105 transition"
              >
                Send on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="h-24" />
    </section>
  );
};

export default ContactPage;
