"use client";

import { motion } from "framer-motion";

export default function GroupOfCompaniesPage() {
  const sections = [
    {
      title: "Group Overview",
      subtitle: "A diversified industrial group shaping modern India.",
      description: [
        "The Adhunik Group is one of India’s most diversified industrial conglomerates, with businesses spanning steel, power, mining, and infrastructure.",
        "Our companies operate independently, but share the same values: integrity, innovation, quality, and responsible growth.",
      ],
      highlights: [
        "Sustainable operations",
        "PAN-India presence",
        "Technology-driven growth",
      ],
    },
    {
      title: "Adhunik Industries Limited",
      subtitle: "Premium TMT bars, billets & structural steel.",
      description: [
        "AIL is a leading steel manufacturer producing Fe500D TMT bars and high-grade billets trusted across India’s construction landscape.",
        "Our advanced rolling technology ensures superior strength, flexibility, and corrosion resistance.",
      ],
      highlights: ["Fe500D TMT Bars", "Tempcore Process", "ISO-Certified"],
    },
    {
      title: "Adhunik Power & Natural Resources Ltd.",
      subtitle: "Clean, efficient, future-ready energy solutions.",
      description: [
        "APNRL is committed to delivering reliable and efficient power with lower environmental impact.",
        "Our diversified portfolio includes modern thermal technologies and renewable integration.",
      ],
      highlights: [
        "Integrated Power Assets",
        "Cleaner Emissions",
        "Renewable Integration",
      ],
    },
    {
      title: "Adhunik Infrastructure Pvt. Ltd.",
      subtitle: "Building large-scale infrastructure for India’s growth.",
      description: [
        "The company specializes in highways, industrial parks, bridges and other critical infrastructure.",
        "Our precision engineering ensures long-term durability and quality.",
      ],
      highlights: [
        "Highways & Bridges",
        "Industrial Infrastructure",
        "Sustainable Construction",
      ],
    },
    {
      title: "Adhunik Realtors & Developers Ltd.",
      subtitle: "Modern residential & commercial developments.",
      description: [
        "The real estate division focuses on sustainable architecture, green design and smart living solutions.",
        "We create premium, future-ready spaces for urban India.",
      ],
      highlights: ["Eco-Friendly Designs", "Smart Homes", "Premium Spaces"],
    },
    {
      title: "Adhunik Alloy Steels Ltd.",
      subtitle: "Special alloy steels for automotive & heavy industry.",
      description: [
        "AASL produces high-performance alloy steels designed for demanding applications.",
        "Engineering precision drives our manufacturing and innovation.",
      ],
      highlights: ["Specialty Alloys", "Automotive Grade", "Advanced R&D"],
    },
    {
      title: "Adhunik Mines & Minerals Pvt. Ltd.",
      subtitle: "Ethical mining & raw material excellence.",
      description: [
        "The mining division supplies essential raw materials for steel and power businesses.",
        "Our mining operations are guided by sustainability and community welfare.",
      ],
      highlights: ["Responsible Mining", "High-Quality Ore", "Safety-Driven"],
    },
  ];

  return (
    <main className="bg-black text-neutral-200">
      {/* HERO */}
      <section className="h-[35vh] sm:h-[45vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-neutral-900 to-black px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Group of Companies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm sm:text-base max-w-xl mt-4"
        >
          Explore the Adhunik ecosystem — a blend of innovation, engineering and
          sustainable growth powering India’s future.
        </motion.p>
      </section>

      {/* SECTION CARDS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12 sm:space-y-16">
        {sections.map((sec, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900/60 border border-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-md"
          >
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              {sec.title}
            </h2>

            {/* Subtitle */}
            <p className="text-blue-400 text-sm sm:text-base mb-4">
              {sec.subtitle}
            </p>

            {/* Description paragraphs */}
            <div className="space-y-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {sec.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-6 bg-neutral-950 border border-neutral-800 rounded-xl p-4 sm:p-5">
              <h3 className="text-white font-semibold text-sm mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {sec.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-sm sm:text-base">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
