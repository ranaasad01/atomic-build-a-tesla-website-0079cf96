import Link from "next/link";
import { vehicles } from "@/lib/data";
import VehicleCard from "@/components/VehicleCard";
import Footer from "@/components/Footer";

export default function VehiclesPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end justify-center overflow-hidden">
        <img
          src="https://cdn.motor1.com/images/mgl/MpVzE/s1/tesla-s3xy.webp"
          alt="Tesla Vehicle Lineup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        <div className="relative z-10 text-center pb-20 px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Electric Vehicles
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
            The Lineup
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Five vehicles. One mission. Every Tesla is engineered from the ground up to be the safest, most capable, and most efficient car in its class.
          </p>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">Choose Your Tesla</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Every Model. Every Need.</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              From the fastest production sedan to the most capable truck ever built, there is a Tesla for every lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Banner */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Compare Models</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Side-by-side specs to help you find the perfect Tesla for your lifestyle and budget.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/50 font-semibold uppercase tracking-widest text-xs py-5 px-6">Spec</th>
                  {vehicles.map((v) => (
                    <th key={v.id} className="text-center text-white font-bold py-5 px-4">
                      {v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="text-white/50 py-4 px-6 font-medium">Range</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-white text-center py-4 px-4 font-semibold">{v.range}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="text-white/50 py-4 px-6 font-medium">0–60 mph</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-white text-center py-4 px-4 font-semibold">{v.acceleration}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="text-white/50 py-4 px-6 font-medium">Top Speed</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-white text-center py-4 px-4 font-semibold">{v.topSpeed}</td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="text-white/50 py-4 px-6 font-medium">Starting Price</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="text-white text-center py-4 px-4 font-semibold text-xs">{v.price}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Autopilot Feature */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/h1a2230-edit-1616770000.jpg?resize=2048:*"
          alt="Tesla Autopilot"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-4">Autopilot</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Future of Driving Is Already Here
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl">
            Every Tesla comes standard with advanced driver-assistance features. Full Self-Driving capability is available as an upgrade, enabling automatic lane changes, traffic-aware cruise control, and Navigate on Autopilot.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
              <div className="text-white font-bold">Autopilot</div>
              <div className="text-white/50 text-xs">Standard on all models</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
              <div className="text-white font-bold">Full Self-Driving</div>
              <div className="text-white/50 text-xs">Available upgrade</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
              <div className="text-white font-bold">8 Cameras</div>
              <div className="text-white/50 text-xs">360° visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-950 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Order?</h2>
          <p className="text-white/50 text-base mb-10">
            Configure your Tesla online and schedule delivery. No dealerships. No haggling. Just the car you want, delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#order"
              className="bg-red-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 text-sm tracking-wide"
            >
              Order Your Tesla
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-white font-semibold px-10 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm tracking-wide"
            >
              Schedule Test Drive
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
