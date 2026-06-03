import Link from "next/link";
import { energyProducts } from "@/lib/data";
import EnergyProductCard from "@/components/EnergyProductCard";
import Footer from "@/components/Footer";

export default function EnergyPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end justify-center overflow-hidden">
        <img
          src="https://img-va.myshopline.com/image/store/1647740624060/How-the-Tesla-Energy-Ecosystem-is-Creating-the-Grid-of-the-Future.jpeg?w=2560&h=1928"
          alt="Tesla Energy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <div className="relative z-10 text-center pb-20 px-6 max-w-4xl mx-auto">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Clean Energy
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
            Power Your World
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Tesla&apos;s integrated energy ecosystem lets you generate, store, and use clean energy — reducing your carbon footprint and your electricity bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#products"
              className="bg-white text-black font-semibold px-10 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide"
            >
              Explore Products
            </Link>
            <Link
              href="#"
              className="bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-3.5 rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300 text-sm tracking-wide"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">Energy Products</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The Complete Ecosystem</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Every Tesla energy product is designed to work seamlessly together — from the roof to the battery to the grid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {energyProducts.map((product) => (
              <EnergyProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Powerwall Deep Dive */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-4">Powerwall 3</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Energy Independence Starts at Home
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Powerwall 3 is Tesla&apos;s most powerful home battery yet. With 13.5 kWh of usable capacity and 11.5 kW of continuous power, it can run your entire home during an outage — including your EV charger.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Pair it with solar panels or a Solar Roof to maximize your savings and minimize your dependence on the utility grid. The Tesla app gives you real-time visibility into your energy usage, generation, and storage.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-black/50 rounded-xl p-4">
                <div className="text-white font-black text-2xl">13.5</div>
                <div className="text-white/40 text-xs uppercase tracking-wide mt-1">kWh Capacity</div>
              </div>
              <div className="text-center bg-black/50 rounded-xl p-4">
                <div className="text-white font-black text-2xl">11.5</div>
                <div className="text-white/40 text-xs uppercase tracking-wide mt-1">kW Power</div>
              </div>
              <div className="text-center bg-black/50 rounded-xl p-4">
                <div className="text-white font-black text-2xl">90%</div>
                <div className="text-white/40 text-xs uppercase tracking-wide mt-1">Efficiency</div>
              </div>
            </div>
            <Link
              href="#"
              className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide inline-block"
            >
              Order Powerwall
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-96 md:h-full min-h-[400px]">
            <img
              src="https://www.revisionenergy.com/application/files/2916/6369/2327/tesla-powerwall-demand-response-program-massachusetts-revision-energy.jpeg"
              alt="Powerwall installed"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Solar Roof Feature */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img
          src="https://img.canarymedia.com/content/uploads/Tesla-Solar-Glass-Roof-V3_2.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=501&q=80&w=864&s=72b17c6a551360f95b1fc446bb3fc778"
          alt="Tesla Solar Roof"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-4">Solar Roof</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Most Beautiful Solar Product on Earth
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl">
            Solar Roof tiles are more than three times stronger than standard roofing tiles and are designed to last the lifetime of your home. They look like ordinary roof tiles — until you realize they&apos;re generating electricity.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
              <div className="text-white font-black text-xl">3×</div>
              <div className="text-white/50 text-xs mt-1">Stronger than standard tiles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
              <div className="text-white font-black text-xl">25yr</div>
              <div className="text-white/50 text-xs mt-1">Tile & power warranty</div>
            </div>
          </div>
          <Link
            href="#"
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide inline-block"
          >
            Get Solar Roof
          </Link>
        </div>
      </section>

      {/* Why Tesla Energy */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Tesla Energy?</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Tesla is the only company that designs, manufactures, and integrates solar, storage, and software into a single seamless system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Integrated System</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Solar, Powerwall, and your Tesla vehicle all communicate through the Tesla app. Optimize your energy usage automatically.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Storm Watch</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Powerwall automatically detects severe weather and charges to full capacity before a storm hits, keeping your home powered through outages.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Save Money</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Reduce your electricity bill by up to 90%. Time-Based Control lets Powerwall charge during off-peak hours and power your home during expensive peak times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Start Saving Today</h2>
          <p className="text-white/50 text-base mb-10">
            Get a personalized solar and Powerwall quote in minutes. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-red-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 text-sm tracking-wide"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-white font-semibold px-10 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm tracking-wide"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
