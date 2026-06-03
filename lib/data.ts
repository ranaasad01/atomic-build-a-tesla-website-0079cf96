export const navLinks = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/energy", label: "Energy" },
  { href: "/about", label: "About" },
];

export const vehicles = [
  {
    id: "model-s",
    name: "Model S",
    tagline: "Plaid",
    description: "The quickest accelerating car in production — 0–60 mph in 1.99 seconds.",
    image: "https://gridx.com/wp-content/uploads/2023/05/image7.jpg",
    range: "405 mi",
    acceleration: "1.99s",
    topSpeed: "200 mph",
    price: "From $74,990",
    orderHref: "#order",
    learnHref: "/vehicles",
    badge: "Quickest",
    badgeColor: "bg-tesla-red",
  },
  {
    id: "model-3",
    name: "Model 3",
    tagline: "Long Range",
    description: "The world's best-selling electric vehicle. Refined, efficient, and exhilarating.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg",
    range: "358 mi",
    acceleration: "3.1s",
    topSpeed: "162 mph",
    price: "From $40,240",
    orderHref: "#order",
    learnHref: "/vehicles",
    badge: "Best Seller",
    badgeColor: "bg-blue-600",
  },
  {
    id: "model-x",
    name: "Model X",
    tagline: "Plaid",
    description: "Maximum performance and utility. Falcon Wing doors. Seating for up to seven.",
    image: "https://hips.hearstapps.com/hmg-prod/images/2026-tesla-model-x-185-690cc64d3dc62.jpg?crop=0.655xw:0.553xh;0.181xw,0.291xh&resize=2048:*",
    range: "333 mi",
    acceleration: "2.5s",
    topSpeed: "163 mph",
    price: "From $79,990",
    orderHref: "#order",
    learnHref: "/vehicles",
    badge: "Most Versatile",
    badgeColor: "bg-purple-600",
  },
  {
    id: "model-y",
    name: "Model Y",
    tagline: "Long Range AWD",
    description: "The most popular electric SUV in the world. Spacious, safe, and capable.",
    image: "https://hips.hearstapps.com/hmg-prod/images/2026-tesla-model-y-long-range-awd-121-688bc237a2711.jpg?crop=0.615xw:0.519xh;0.0865xw,0.365xh&resize=2048:*",
    range: "330 mi",
    acceleration: "4.8s",
    topSpeed: "135 mph",
    price: "From $43,990",
    orderHref: "#order",
    learnHref: "/vehicles",
    badge: "#1 SUV",
    badgeColor: "bg-green-600",
  },
  {
    id: "cybertruck",
    name: "Cybertruck",
    tagline: "All-Wheel Drive",
    description: "Built for the future. Exoskeleton body, adaptive air suspension, and 11,000 lbs towing.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/2024_Tesla_Cybertruck_Foundation_Series%2C_front_left_%28Greenwich%29.jpg",
    range: "340 mi",
    acceleration: "4.1s",
    topSpeed: "112 mph",
    price: "From $60,990",
    orderHref: "#order",
    learnHref: "/vehicles",
    badge: "Revolutionary",
    badgeColor: "bg-gray-600",
  },
];

export const energyProducts = [
  {
    id: "powerwall",
    name: "Powerwall",
    tagline: "Home Battery",
    description:
      "Powerwall is a home battery system that stores solar energy for use any time — day or night. Protect your home from outages and reduce your reliance on the grid.",
    image: "https://truesouthsolar.net/wp-content/uploads/2023/11/Tesla-Powerwall_True-South_Solar.jpg",
    stats: [
      { label: "Capacity", value: "13.5 kWh" },
      { label: "Power", value: "11.5 kW" },
      { label: "Efficiency", value: "90%" },
    ],
    orderHref: "#order",
    learnHref: "/energy",
  },
  {
    id: "solar-roof",
    name: "Solar Roof",
    tagline: "Integrated Solar",
    description:
      "Solar Roof tiles are more than three times stronger than standard roofing tiles and are designed to last the lifetime of your home. Generate clean energy while protecting your home.",
    image: "https://lumasolar.com/wp-content/uploads/2021/08/DSC05747-scaled.jpg",
    stats: [
      { label: "Durability", value: "3× Stronger" },
      { label: "Warranty", value: "25 Years" },
      { label: "Coverage", value: "Whole Roof" },
    ],
    orderHref: "#order",
    learnHref: "/energy",
  },
  {
    id: "solar-panels",
    name: "Solar Panels",
    tagline: "Retrofit Solar",
    description:
      "Tesla Solar Panels are the most affordable solar panels in America. Sleek, low-profile design with industry-leading efficiency. Start generating clean energy today.",
    image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202006/MIT-PPA-1-Press_solar_array_3.jpg?itok=42Lhjby-",
    stats: [
      { label: "Efficiency", value: "20.6%" },
      { label: "Warranty", value: "25 Years" },
      { label: "Monitoring", value: "Real-Time" },
    ],
    orderHref: "#order",
    learnHref: "/energy",
  },
];

export const stats = [
  { label: "Miles of Range", value: 405, suffix: " mi", description: "Best-in-class range on a single charge" },
  { label: "0–60 mph", value: 1.99, suffix: "s", description: "Fastest production car acceleration" },
  { label: "Superchargers", value: 50000, suffix: "+", description: "Global Supercharger network stations" },
  { label: "Cars Delivered", value: 1800000, suffix: "+", description: "Vehicles delivered worldwide in 2023" },
];

export const footerLinks = {
  Tesla: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Investor Relations", href: "#" },
    { label: "Press", href: "#" },
  ],
  Vehicles: [
    { label: "Model S", href: "/vehicles" },
    { label: "Model 3", href: "/vehicles" },
    { label: "Model X", href: "/vehicles" },
    { label: "Model Y", href: "/vehicles" },
    { label: "Cybertruck", href: "/vehicles" },
  ],
  Energy: [
    { label: "Powerwall", href: "/energy" },
    { label: "Solar Roof", href: "/energy" },
    { label: "Solar Panels", href: "/energy" },
    { label: "Megapack", href: "/energy" },
  ],
  Support: [
    { label: "Find Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Legal", href: "#" },
  ],
};
