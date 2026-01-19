import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
// import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PrimeCore TechWorks | Digital Solutions",
    template: "%s | PrimeCore TechWorks",
  },
  description:
    "PrimeCore TechWorks provides modern websites, web applications, UI/UX design and digital growth solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
