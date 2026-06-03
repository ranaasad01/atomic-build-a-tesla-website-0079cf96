"use client";

import Link from "next/link";

interface VehicleCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  range: string;
  acceleration: string;
  topSpeed: string;
  price: string;
  orderHref: string;
  learnHref: string;
  badge: string;
  badgeColor: string;
}

export default function VehicleCard(props: VehicleCardProps) {
  const {
    name,
    tagline,
    description,
    image,
    range,
    acceleration,
    topSpeed,
    price,
    orderHref,
    learnHref,
    badge,
    badgeColor,
  } = props;

  const badgeClass = badgeColor + " text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide absolute top-4 left-4";

  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        <span className={badgeClass}>{badge}</span>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-white text-2xl font-black">{name}</h3>
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest">{tagline}</p>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-3 mb-6 border-t border-white/10 pt-5">
          <div className="text-center">
            <div className="text-white font-bold text-lg">{range}</div>
            <div className="text-white/40 text-xs uppercase tracking-wide mt-1">Range</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-white font-bold text-lg">{acceleration}</div>
            <div className="text-white/40 text-xs uppercase tracking-wide mt-1">0-60 mph</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-lg">{topSpeed}</div>
            <div className="text-white/40 text-xs uppercase tracking-wide mt-1">Top Speed</div>
          </div>
        </div>

        <p className="text-white/50 text-xs text-center mb-5">{price}</p>

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
