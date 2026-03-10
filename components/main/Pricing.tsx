"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Briefcase,
  TrendingUp,
  Diamond,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

type Plan = {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    title: "Starter Website",
    price: "₹6,999",
    description: "Best for: Small businesses or startups who want a simple but professional online presence.",
    icon: <Rocket size={34} />,
    features: [
      "Modern Landing Page Design",
      "Fully Mobile Responsive Layout",
      "WhatsApp Chat Integration",
      "Contact Form Setup",
      "Fast Loading Website",
      "Basic SEO Friendly Structure",
      "Google Map Integration",
      "Social Media Links Integration",
    ],
  },
  {
    title: "Business Website",
    price: "₹9,999",
    description: "Best for: Local businesses and service providers who want a professional website.",
    icon: <Briefcase size={34} />,
    features: [
      "Up to 4 Professional Pages",
      "Modern UI/UX Design",
      "Mobile & Tablet Responsive Layout",
      "Contact Forms + WhatsApp",
      "Google Map & Location",
      "SEO Friendly Structure",
      "Social Media Integration",
      "Fast Performance Optimization",
    ],
  },
  {
    title: "Growth Website",
    price: "₹16,999",
    description: "Best for: Growing businesses that want to generate leads and build a strong online presence.",
    icon: <TrendingUp size={34} />,
    popular: true,
    features: [
      "Up to 7 Pages Professional Website",
      "Custom UI/UX Design",
      "Lead Generation Forms",
      "Blog / Article Section",
      "Advanced SEO Setup",
      "Google Analytics Integration",
      "Speed & Performance Optimization",
      "Social Media Integration",
    ],
  },
  {
    title: "Premium Business",
    price: "₹29,999",
    description: "Best for: Established brands and companies that want a powerful website for marketing.",
    icon: <Diamond size={34} />,
    features: [
      "Up to 12 Pages High-End Website",
      "Custom Premium UI/UX Design",
      "Advanced SEO Optimization",
      "Blog & Content Management System",
      "Lead Capture & Inquiry Forms",
      "Analytics & Tracking Setup",
      "Speed Optimization",
      "Professional Branding Layout",
    ],
  },
  {
    title: "E-Commerce Website",
    price: "₹49,999",
    description: "Best for: Businesses that want to sell products online and manage orders digitally.",
    icon: <ShoppingCart size={34} />,
    features: [
      "Complete Online Store Development",
      "Product Management System",
      "Shopping Cart & Secure Checkout",
      "Payment Gateway Integration",
      "Order & Inventory Management",
      "Admin Dashboard",
      "Mobile Responsive Store Design",
      "Basic SEO Setup",
    ],
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

const PricingPage: React.FC = () => {
  // YAHAN APNA COMPANY KA WHATSAPP NUMBER DALEIN (Country code 91 ke sath, bina + ke)
  const myWhatsAppNumber = "919999900000"; 

  // Function jo WhatsApp link banayega dynamically
  const getWhatsAppLink = (planTitle: string, planPrice: string) => {
    const message = `Hello PrimeCore TechWorks! I am interested in your *${planTitle}* plan priced at *${planPrice}*. Please provide more details.`;
    return `https://wa.me/${918949093837}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      className="
        relative z-20 pointer-events-auto
        min-h-screen w-full
        bg-[#030014] text-white
        pt-28 px-6 md:px-16 pb-24
      "
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-6xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Our Pricing Plans
        </h1>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Transparent pricing for businesses of all sizes. Choose the perfect plan to accelerate your digital growth.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-7xl mx-auto flex flex-wrap justify-center gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`
              relative bg-[#0f0827] flex flex-col
              w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]
              border rounded-2xl p-8 transition group
              ${
                plan.popular
                  ? "border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                  : "border-purple-500/20 hover:border-purple-400"
              }
            `}
          >
            <div
              className={`
                absolute inset-0 rounded-2xl blur-xl pointer-events-none transition duration-500
                ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-100"
                    : "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100"
                }
              `}
            />

            {plan.popular && (
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            )}

            <div className="relative z-10 border-b border-purple-500/20 pb-6 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-500/10 text-cyan-400 mb-6">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.title}
              </h3>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                {plan.price}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                {plan.description}
              </p>
            </div>

            <div className="relative z-10 flex-grow">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <CheckCircle2
                      size={18}
                      className="text-purple-400 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTON SECTION UPDATED */}
            <div className="relative z-10 mt-auto">
              <a
                href={getWhatsAppLink(plan.title, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block w-full text-center py-3 rounded-xl font-semibold transition duration-300
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-black hover:scale-[1.02]"
                      : "bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white"
                  }
                `}
              >
                Choose Plan
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingPage;