"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  {
    label: "Miles of Range",
    value: 405,
    suffix: " mi",
    description: "Best-in-class range on a single charge",
    decimals: 0,
  },
  {
    label: "0–60 mph",
    value: 1.99,
    suffix: "s",
    description: "Fastest production car acceleration ever",
    decimals: 2,
  },
  {
    label: "Superchargers",
    value: 50000,
    suffix: "+",
    description: "Global Supercharger network stations",
    decimals: 0,
  },
  {
    label: "Vehicles Delivered",
    value: 1800000,
    suffix: "+",
    description: "Cars delivered worldwide in 2023",
    decimals: 0,
  },
];

function useCountUp(target: number, decimals: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setCount(parseFloat(current.toFixed(decimals)));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target, decimals]);

  return count;
}

function StatItem({
  label,
  value,
  suffix,
  description,
  decimals,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  description: string;
  decimals: number;
  active: boolean;
}) {
  const count = useCountUp(value, decimals, active);

  const display =
    value >= 1000000
      ? (count / 1000000).toFixed(1) + "M"
      : value >= 1000
      ? (count / 1000).toFixed(0) + "K"
      : decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toString();

  return (
    <div className="text-center group">
      <div className="text-5xl md:text-7xl font-black text-white mb-2 tabular-nums">
        {display}
        <span className="text-red-500">{suffix}</span>
      </div>
      <div className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">
        {label}
      </div>
      <div className="text-white/40 text-xs max-w-[180px] mx-auto leading-relaxed">
        {description}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-black py-24 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Performance Redefined
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tesla vehicles set the benchmark for electric performance, range, and global charging infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {statsData.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>

        {/* Divider line */}
        <div className="mt-20 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm text-center md:text-left max-w-md">
            Range figures based on EPA estimates. Acceleration figures may vary based on configuration and conditions.
          </p>
          <a
            href="/vehicles"
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide whitespace-nowrap"
          >
            Explore All Vehicles
          </a>
        </div>
      </div>
    </section>
  );
}
