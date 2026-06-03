import Link from "next/link";
import Footer from "@/components/Footer";

const milestones = [
  { year: "2003", event: "Tesla Motors founded in San Carlos, California by Martin Eberhard and Marc Tarpenning." },
  { year: "2004", event: "Elon Musk leads Series A funding round and joins as Chairman of the Board." },
  { year: "2008", event: "Tesla Roadster launches — the world's first highway-legal all-electric vehicle with over 200 miles of range." },
  { year: "2012", event: "Model S begins production. Named Motor Trend Car of the Year — the first electric vehicle to win the award." },
  { year: "2015", event: "Model X SUV launches with iconic Falcon Wing doors. Tesla Energy division announced with Powerwall." },
  { year: "2017", event: "Model 3 unveiled. Over 325,000 reservations placed in the first week." },
  { year: "2019", event: "Cybertruck unveiled. Model Y begins production. Tesla becomes the most valuable American automaker." },
  { year: "2020", event: "Tesla joins the S&P 500. Gigafactory Berlin and Texas break ground." },
  { year: "2023", event: "Tesla delivers 1.8 million vehicles — a new record. Cybertruck begins deliveries." },
  { year: "2024", event: "Tesla operates 50,000+ Supercharger stations globally. Full Self-Driving v12 launches." },
];

const values = [
  {
    title: "Accelerate Sustainable Energy",
    description: "Our mission is to accelerate the world's transition to sustainable energy through increasingly affordable electric vehicles and energy products.",
    icon: "⚡",
  },
  {
    title: "Safety First",
    description: "Tesla vehicles consistently earn the highest safety ratings from NHTSA and IIHS. Safety is not a feature — it is the foundation of every design decision.",
    icon: "🛡️",
  },
  {
    title: "Relentless Innovation",
    description: "We design, engineer, and manufacture everything in-house — from the battery cells to the software — enabling us to iterate faster than any other automaker.",
    icon: "🔬",
  },
  {
    title: "Vertical Integration",
    description: "By controlling the entire supply chain, from raw materials to the customer experience, Tesla can deliver quality and value that traditional automakers cannot match.",
    icon: "🏭",
  },
];

const leadership = [
  {
    name: "Elon Musk",
    title: "CEO & Product Architect",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/250px-Elon_Musk_-_54820081119_%28cropped%29.jpg",
    bio: "Elon Musk has led Tesla since 2008, driving the company from a startup to the world's most valuable automaker. He also founded SpaceX and co-founded Neuralink and The Boring Company.",
  },
  {
    name: "Vaibhav Taneja",
    title: "Chief Financial Officer",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFFn6R0bpuDcQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550704852383?e=2147483647&v=beta&t=YqEOWtB92GTHoCmi0ICeEtbmxHMkpcT3RE9SM-tPaJw",
    bio: "Vaibhav Taneja oversees Tesla's global financial operations, having previously served as Chief Accounting Officer. He joined Tesla in 2017 from PricewaterhouseCoopers.",
  },
  {
    name: "Tom Zhu",
    title: "SVP, Automotive",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/230104120800-tom-zhu-file.jpg?c=original",
    bio: "Tom Zhu oversees Tesla's global automotive operations, including manufacturing, sales, and service. He led the successful launch of Gigafactory Shanghai.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end justify-center overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Tesla_Gigafactory_1_-_December_2019.jpg"
          alt="Tesla Gigafactory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="relative z-10 text-center pb-20 px-6 max-w-4xl mx-auto">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
            About Tesla
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Tesla&apos;s mission is to accelerate the world&apos;s transition to sustainable energy. We believe the faster the world stops relying on fossil fuels, the better.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-6">Our Mission</p>
          <blockquote className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
            &ldquo;To accelerate the world&apos;s transition to sustainable energy.&rdquo;
          </blockquote>
          <p className="text-white/50 text-lg leading-relaxed max-w-3xl mx-auto">
            Tesla was founded in 2003 by a group of engineers who wanted to prove that people did not need to compromise to drive electric — that electric vehicles can be better, quicker, and more fun to drive than gasoline cars. Today, Tesla builds not just all-electric vehicles but also infinitely scalable clean energy generation and storage products.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-black rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="text-4xl mb-5">{value.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-red-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">History</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Two Decades of Innovation</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              From a small startup in Silicon Valley to the world&apos;s most valuable automaker — the Tesla story is one of relentless ambition.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative flex gap-8 pl-20">
                  <div className="absolute left-0 top-1 w-16 text-right">
                    <span className="text-red-500 font-black text-sm">{milestone.year}</span>
                  </div>
                  <div className="absolute left-[29px] top-2 w-3 h-3 rounded-full bg-red-600 border-2 border-black" />
                  <div className="bg-zinc-900 rounded-xl p-5 flex-1 border border-white/5 hover:border-white/10 transition-colors">
                    <p className="text-white/70 text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The Team Behind Tesla</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Led by some of the most visionary minds in technology and engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{person.name}</h3>
                  <p className="text-red-500 text-xs font-semibold uppercase tracking-wide mb-4">{person.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img
          src="https://static.shuffle.dev/components/preview/8caa6f6e-6b8f-4a63-9a8e-3fde0b47ffb9/team/01_awz.webp"
          alt="Tesla Supercharger"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">Global Impact</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Tesla by the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">5M+</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">Vehicles on Road</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">50K+</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">Superchargers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">6</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">Gigafactories</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">127K+</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 px-6 bg-black text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-4">Join Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Build the Future With Us</h2>
          <p className="text-white/50 text-base mb-10">
            Tesla is always looking for talented people who are passionate about accelerating the world&apos;s transition to sustainable energy. Explore open roles across engineering, manufacturing, design, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-red-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 text-sm tracking-wide"
            >
              View Open Roles
            </Link>
            <Link
              href="/vehicles"
              className="bg-white/10 text-white font-semibold px-10 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm tracking-wide"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
