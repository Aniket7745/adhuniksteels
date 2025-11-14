"use client";

import { motion } from "framer-motion";

export default function OurCompaniesPage() {
  const sections = [
    {
      title: "Our Companies",
      subtitle:
        "Driving excellence across steel, power, mining, and infrastructure.",
      description: [
        "Adhunik Group operates across steel, energy, mining and infrastructure — each business contributing uniquely to India's industrial growth.",
        "Together, we create value through innovation, sustainability and engineering excellence.",
      ],
      highlights: [
        "Diversified Portfolio",
        "India-wide Operations",
        "Innovation-driven",
      ],
    },
    {
      title: "About Us",
      subtitle: "A legacy of trust, technology & precision engineering.",
      description: [
        "Incredible Industries Ltd. (IIL) is one of Eastern India's leading steel manufacturers, producing high-quality TMT bars backed by advanced metallurgical processes.",
        "Certified under ISO 9001:2015, ISO 14001:2015 & OHSAS 45001:2018 and listed on BSE, NSE & CSE, we uphold the highest standards of quality and governance.",
        "Our Durgapur unit produces premium rolled products supported by a 1.5 MW Wind Mill in Maharashtra, reinforcing our commitment to sustainable energy.",
      ],
      highlights: [
        "ISO 9001, 14001, 45001",
        "Listed on BSE/NSE/CSE",
        "Sustainable Energy (Wind Mill)",
      ],
    },
    {
      title: "Accreditations",
      subtitle:
        "Recognized for quality, safety & environmental responsibility.",
      description: [
        "Incredible Industries Ltd. adheres to globally recognized quality and safety frameworks that guarantee consistent, reliable and eco-conscious manufacturing.",
        "These certifications validate our dedication to stringent industry benchmarks and international best practices.",
      ],
      highlights: [
        "ISO 9001:2015 — Quality Management",
        "ISO 14001:2015 — Environmental Management",
        "OHSAS 45001:2018 — Occupational Health & Safety",
      ],
      link: "/docs/accreditations.pdf",
    },
    {
      title: "Vision & Values",
      subtitle: "Purpose-driven growth rooted in integrity.",
      description: [
        "We strive to achieve leadership across all our business verticals through excellence, innovation, and value creation.",
        "Our core values guide every decision, shaping a culture that builds trust and long-term success.",
      ],
      highlights: [
        "Integrity & Ethics",
        "Teamwork & Respect",
        "Customer-Centric Approach",
        "Courage & Innovation",
        "Sustainable Growth",
      ],
    },
    {
      title: "Board of Directors",
      subtitle: "Leadership that inspires progress and empowers people.",
      description: [
        "Our Board brings together exceptional experience and diverse strategic insights, guiding the company toward sustainable and responsible growth.",
      ],
      board: [
        {
          name: "Mr. Rama Shankar Gupta",
          role: "Chairman & Managing Director",
          desc: "MBA in Finance & Marketing with 26+ years of leadership experience in project strategy and business growth.",
        },
        {
          name: "Mr. Sanjay Kaloya",
          role: "Non-Executive Director",
          desc: "Commerce graduate with 19+ years in steel marketing, accounting, and operations.",
        },
        {
          name: "Mr. Niket Agarwal",
          role: "Non-Executive Director",
          desc: "Company Secretary & finance professional with 9 years across steel, auto and hospitality sectors.",
        },
        {
          name: "Mrs. Sonam Agarwal",
          role: "Independent Woman Director",
          desc: "FCA with 10+ years of experience in finance, audit and corporate consulting.",
        },
      ],
    },
    {
      title: "Quality Policy",
      subtitle: "Committed to excellence in every product we deliver.",
      description: [
        "We consistently exceed customer expectations by enforcing strict quality control systems and adopting advanced manufacturing practices.",
        "Continuous improvement remains at the core of our long-term strategy.",
      ],
      highlights: [
        "Stringent QC Systems",
        "Continuous Improvement",
        "Customer Satisfaction Focus",
      ],
    },
    {
      title: "Committees",
      subtitle:
        "Governance foundations that ensure transparency & accountability.",
      description: [
        "Our committees oversee compliance, stakeholder engagement, ethical conduct, and responsible business practices.",
      ],
      highlights: [
        "Audit Committee",
        "Nomination & Remuneration Committee",
        "CSR Committee",
        "Stakeholders Relationship Committee",
      ],
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
          Our Companies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm sm:text-base max-w-xl mt-4"
        >
          Discover the people, vision and values shaping Incredible Industries
          Ltd.
        </motion.p>
      </section>

      {/* SCROLLABLE CARDS */}
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

            {/* Description */}
            <div className="space-y-3 text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              {sec.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlights List */}
            {sec.highlights && (
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 sm:p-5 mb-6">
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
            )}

            {/* Board of Directors Section */}
            {sec.board && (
              <div className="grid md:grid-cols-2 gap-8">
                {sec.board.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-neutral-950/80 border border-neutral-800 shadow-md"
                  >
                    <h4 className="text-blue-400 font-semibold text-lg">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Download link */}
            {sec.link && (
              <a
                href={sec.link}
                target="_blank"
                className="inline-block text-blue-400 hover:text-blue-300 transition text-sm mt-4"
              >
                View Certificate →
              </a>
            )}
          </motion.section>
        ))}
      </div>
    </main>
  );
}
