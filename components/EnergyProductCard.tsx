"use client";

import Link from "next/link";

interface Stat {
  label: string;
  value: string;
}

interface EnergyProductCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stats: Stat[];
  orderHref: string;
  learnHref: string;
}

export default function EnergyProductCard(props: EnergyProductCardProps) {
  const { name, tagline, description, image, stats, orderHref, learnHref } = props;

  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">{tagline}</p>
          <h3 className="text-white text-3xl font-black">{name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-3 mb-6 border-t border-white/10 pt-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white font-bold text-base">{stat.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            href={orderHref}
            className="flex-1 bg-white text-black font-semibold py-2.5 rounded-full text-sm text-center hover:bg-gray-100 transition-all duration-300"
          >
            Order Now
          </Link>
          <Link
            href={learnHref}
            className="flex-1 bg-white/10 text-white font-semibold py-2.5 rounded-full text-sm text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
