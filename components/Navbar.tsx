"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{ transition: "background 0.5s ease" }}
        className={
          scrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md shadow-lg"
            : "fixed top-0 left-0 right-0 z-50 bg-transparent"
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center group">
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 342 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M171 0C76.6 0 0 76.6 0 171c0 47.2 19.1 89.9 50 120.8L171 512l121-220.2C323 261 342 218.2 342 171 342 76.6 265.4 0 171 0zm0 48c34.2 0 65.4 11.6 90 30.8L48 78.8C72.6 59.6 103.8 48 138 48h33zm0 416L64.4 291.6C50.6 268.4 42 241.2 42 212c0-71.7 57.3-129 129-129s129 57.3 129 129c0 29.2-8.6 56.4-22.4 79.6L171 464zm0-304c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52z" />
            </svg>
            <span className="ml-2 text-white font-bold text-xl tracking-widest uppercase">
              Tesla
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#order"
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              Order Now
            </Link>
            <Link
              href="#"
              className="bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
            >
              Test Drive
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col pt-20 px-8">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-3xl font-light tracking-wide hover:text-red-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="#order"
                onClick={() => setMobileOpen(false)}
                className="bg-white text-black font-semibold px-8 py-3 rounded-full text-center text-sm tracking-wide"
              >
                Order Now
              </Link>
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full text-center text-sm tracking-wide"
              >
                Schedule Test Drive
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
