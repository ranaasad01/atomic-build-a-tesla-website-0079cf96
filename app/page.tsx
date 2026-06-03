"use client";

import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { vehicles, energyProducts } from "@/lib/data";
import StatsSection from "@/components/StatsSection";

const vehicleSections = vehicles.map((v) => ({
  ...v,
  bgImage: v.image,
}));

export default function HomePage() {
  return (
    <div className="snap-container">
      {/* ── HERO ── */}
      <section className="snap-section relative flex flex-col items-center justify-between">
        <img
          src="http://www.tesery.com/cdn/shop/articles/mapping-out-the-open-road-how-to-plan-a-road-trip-with-a-tesla-758286.jpg?v=1726347937"
          alt="Tesla on the open road"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-24">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.3em] mb-4 animate-fade-in">
            The Future of Driving
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-6 animate-fade-up">
            Model Tesla
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            0–60 mph in 1.99 seconds. 405 miles of range. The pinnacle of electric performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="#order"
              className="bg-white text-black font-semibold px-10 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide"
            >
              Order Now
            </Link>
            <Link
              href="/vehicles"
              className="bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-3.5 rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300 text-sm tracking-wide"
              style={{ backgroundColor: "#e31c1c", color: "#f2eeee" }}
            >
              Explore Vehicles
            </Link>
          </div>
        </div>

        <div className="relative z-10 pb-8 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <p className="text-white/50 text-xs uppercase tracking-widest">Scroll to explore</p>
          <ChevronDown className="text-white/50 animate-bounce" size={20} />
        </div>
      </section>

      {/* ── VEHICLE SECTIONS ── */}
      {vehicleSections.map((vehicle, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={vehicle.id} className="snap-section relative flex flex-col items-center justify-between">
            <img
              src={vehicle.bgImage}
              alt={vehicle.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

            <div className="relative z-10 flex flex-col items-center justify-end flex-1 text-center px-6 pb-24 w-full max-w-4xl mx-auto">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] mb-2">
                {vehicle.tagline}
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
                {vehicle.name}
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-lg mb-8">
                {vehicle.description}
              </p>

              {/* Specs bar */}
              <div className="flex items-center gap-8 mb-8 bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-4">
                <div className="text-center">
                  <div className="text-white font-bold text-xl">{vehicle.range}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">Range</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-white font-bold text-xl">{vehicle.acceleration}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">0-60 mph</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-white font-bold text-xl">{vehicle.topSpeed}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">Top Speed</div>
                </div>
              </div>

              <p className="text-white/50 text-sm mb-6">{vehicle.price}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={vehicle.orderHref}
                  className="bg-white text-black font-semibold px-10 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide"
                >
                  Order Now
                </Link>
                <Link
                  href={vehicle.learnHref}
                  className="bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-3.5 rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300 text-sm tracking-wide"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative z-10 pb-6 flex items-center gap-2">
              <ChevronDown className="text-white/40 animate-bounce" size={18} />
            </div>
          </section>
        );
      })}

      {/* ── STATS SECTION ── */}
      <section className="snap-section overflow-y-auto">
        <StatsSection />
      </section>

      {/* ── ENERGY SECTION ── */}
      <section className="snap-section relative flex flex-col items-center justify-between">
        <img
          src="https://img.canarymedia.com/content/uploads/Tesla-Solar-Glass-Roof-V3_2.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=501&q=80&w=864&s=72b17c6a551360f95b1fc446bb3fc778"
          alt="Tesla Solar Roof"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        <div className="relative z-10 flex flex-col items-center justify-end flex-1 text-center px-6 pb-16 w-full">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Clean Energy
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Power Everything
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mb-10">
            From solar panels to home batteries, Tesla&apos;s energy ecosystem lets you generate, store, and use clean energy — day and night.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {energyProducts.map((product) => (
              <div
                key={product.id}
                className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-center min-w-[140px]"
              >
                <div className="text-white font-bold text-base">{product.name}</div>
                <div className="text-white/50 text-xs mt-1">{product.tagline}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/energy"
              className="bg-white text-black font-semibold px-10 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide"
            >
              Explore Energy
            </Link>
            <Link
              href="#order"
              className="bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-3.5 rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300 text-sm tracking-wide"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="snap-section bg-black flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Join the Revolution
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Geist", fontSize: "26px" }}>
            Drive the Change.
            <br />
            <span className="text-white/40">Own the Future.</span>
          </h1>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Over 5 million Tesla owners worldwide have already made the switch to sustainable transportation. Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/vehicles"
              className="bg-red-600 text-white font-semibold px-12 py-4 rounded-full hover:bg-red-700 transition-all duration-300 text-base tracking-wide"
            >
              Shop Vehicles
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-white font-semibold px-12 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-base tracking-wide"
            >
              Schedule Test Drive
            </Link>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div className="text-center">
              <div className="text-3xl font-black text-white">5M+</div>
              <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Owners</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl font-black text-white">50K+</div>
              <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Superchargers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white">0</div>
              <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Emissions</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER SECTION ── */}
      <section className="snap-section overflow-y-auto bg-black">
        <div className="min-h-full flex flex-col justify-end">
          <footer className="bg-black border-t border-white/10 py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center mb-12">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 342 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M171 0C76.6 0 0 76.6 0 171c0 47.2 19.1 89.9 50 120.8L171 512l121-220.2C323 261 342 218.2 342 171 342 76.6 265.4 0 171 0zm0 48c34.2 0 65.4 11.6 90 30.8L48 78.8C72.6 59.6 103.8 48 138 48h33zm0 416L64.4 291.6C50.6 268.4 42 241.2 42 212c0-71.7 57.3-129 129-129s129 57.3 129 129c0 29.2-8.6 56.4-22.4 79.6L171 464zm0-304c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52z" />
                </svg>
                <span className="ml-2 text-white font-bold text-lg tracking-widest uppercase">Tesla</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                <div>
                  <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Tesla</h4>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-white/50 hover:text-white text-sm transition-colors">About</Link></li>
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Careers</Link></li>
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Investors</Link></li>
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Press</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Vehicles</h4>
                  <ul className="space-y-3">
                    <li><Link href="/vehicles" className="text-white/50 hover:text-white text-sm transition-colors">Model S</Link></li>
                    <li><Link href="/vehicles" className="text-white/50 hover:text-white text-sm transition-colors">Model 3</Link></li>
                    <li><Link href="/vehicles" className="text-white/50 hover:text-white text-sm transition-colors">Model X</Link></li>
                    <li><Link href="/vehicles" className="text-white/50 hover:text-white text-sm transition-colors">Model Y</Link></li>
                    <li><Link href="/vehicles" className="text-white/50 hover:text-white text-sm transition-colors">Cybertruck</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Energy</h4>
                  <ul className="space-y-3">
                    <li><Link href="/energy" className="text-white/50 hover:text-white text-sm transition-colors">Powerwall</Link></li>
                    <li><Link href="/energy" className="text-white/50 hover:text-white text-sm transition-colors">Solar Roof</Link></li>
                    <li><Link href="/energy" className="text-white/50 hover:text-white text-sm transition-colors">Solar Panels</Link></li>
                    <li><Link href="/energy" className="text-white/50 hover:text-white text-sm transition-colors">Megapack</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Support</h4>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Find Us</Link></li>
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Contact</Link></li>
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Legal</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Tesla, Inc. All rights reserved.</p>
                <p className="text-white/30 text-xs">Accelerating the world&apos;s transition to sustainable energy.</p>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}