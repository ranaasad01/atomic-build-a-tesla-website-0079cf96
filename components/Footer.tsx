"use client";

import Link from "next/link";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center mb-12">
          <svg
            className="w-6 h-6 fill-white"
            viewBox="0 0 342 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M171 0C76.6 0 0 76.6 0 171c0 47.2 19.1 89.9 50 120.8L171 512l121-220.2C323 261 342 218.2 342 171 342 76.6 265.4 0 171 0zm0 48c34.2 0 65.4 11.6 90 30.8L48 78.8C72.6 59.6 103.8 48 138 48h33zm0 416L64.4 291.6C50.6 268.4 42 241.2 42 212c0-71.7 57.3-129 129-129s129 57.3 129 129c0 29.2-8.6 56.4-22.4 79.6L171 464zm0-304c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52z" />
          </svg>
          <span className="ml-2 text-white font-bold text-lg tracking-widest uppercase">
            Teslaaaa
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Tesla, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors duration-200">
              Legal
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors duration-200">
              Contact
            </Link>
          </div>
          <p className="text-white/30 text-xs">
            Accelerating the world&apos;s transition to sustainable energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
