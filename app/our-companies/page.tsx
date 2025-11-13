"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function OurCompaniesPage() {
  const tabs = [
    { id: "our-companies", title: "Our Companies" },
    { id: "about-us", title: "About Us" },
    { id: "accreditations", title: "Accreditations" },
    { id: "vision-values", title: "Vision & Values" },
    { id: "board", title: "Board of Directors" },
    { id: "quality-policy", title: "Quality Policy" },
    { id: "committees", title: "Committees" },
  ];

  const [activeTab, setActiveTab] = useState("about-us");

  const fadeAnim = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.5 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "our-companies":
        return (
          <>
            <h2>Our Companies</h2>
            <p>
              Adhunik Group operates across steel, power, mining, and
              infrastructure — each driving forward a shared mission of
              excellence, innovation, and sustainable growth.
            </p>
          </>
        );

      case "about-us":
        return (
          <>
            <h2>About Us</h2>
            <p>
              Incredible Industries Ltd. (IIL) stands among Eastern India’s most
              reputed steel manufacturers, delivering superior TMT bars built on
              precision, trust, and advanced metallurgical expertise. With ISO
              9001:2015, 14001:2015 & OHSAS 45001:2018 certifications and
              listings on BSE, NSE, and CSE, we’ve built a legacy of quality and
              reliability.
            </p>
            <p>
              Our manufacturing unit in Durgapur produces premium rolled
              products, supported by sustainable energy through a 1.5 MW Wind
              Mill in Maharashtra.
            </p>
          </>
        );

      case "accreditations":
        return (
          <>
            <h2>Accreditations</h2>

            <p>
              Incredible Industries Ltd. is certified under globally recognised
              quality and safety standards, reflecting our commitment to
              delivering trusted and reliable steel products. These
              accreditations validate our focus on consistent quality, strict
              environmental responsibility, and a safe working environment.
            </p>

            <p>
              Our systems and processes comply with internationally accepted
              benchmarks, ensuring that every product leaving our facilities
              meets the expectations of customers, regulators and stakeholders.
            </p>

            <ul className="mt-4 space-y-2">
              <li>• ISO 9001:2015 — Quality Management Systems</li>
              <li>• ISO 14001:2015 — Environmental Management Systems</li>
              <li>• OHSAS 45001:2018 — Occupational Health & Safety</li>
            </ul>

            <a
              href="/docs/accreditations.pdf"
              target="_blank"
              className="inline-block mt-6 text-blue-400 hover:text-blue-300 transition"
            >
              View Certificate →
            </a>
          </>
        );

      case "vision-values":
        return (
          <>
            <h2>Vision & Values</h2>
            <p>
              To attain leadership in all our businesses through relentless
              pursuit of excellence while delivering value to all stakeholders.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3>Core Values</h3>
                <ul>
                  <li>
                    Integrity — Conduct built on honesty and transparency.
                  </li>
                  <li>Teamwork — Collaboration with respect and purpose.</li>
                  <li>Courage — Pushing boundaries fearlessly.</li>
                  <li>Customer Focus — Consistent excellence in service.</li>
                  <li>Trust — Long-term relationships built on credibility.</li>
                </ul>
              </div>
              <div>
                <h3>Goals</h3>
                <ul>
                  <li>Be among India’s top 5 in each business vertical.</li>
                  <li>Foster innovation-driven global growth.</li>
                  <li>Be one of the best workplaces in the industry.</li>
                </ul>
              </div>
            </div>
          </>
        );

      case "board":
        return (
          <>
            <h2>Board of Directors</h2>
            <p>
              Our leadership team combines experience with vision, steering the
              company toward growth and sustainability.
            </p>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
              {[
                {
                  name: "Mr. Rama Shankar Gupta",
                  role: "Chairman & Managing Director",
                  desc: "MBA in Finance & Marketing, over 26 years of experience in project strategy and business leadership.",
                },
                {
                  name: "Mr. Sanjay Kaloya",
                  role: "Non-Executive Director",
                  desc: "Commerce Graduate with 19+ years in steel marketing, accounting, and operations.",
                },
                {
                  name: "Mr. Niket Agarwal",
                  role: "Non-Executive Director",
                  desc: "Company Secretary & finance professional with 9 years across steel, auto, and hospitality sectors.",
                },
                {
                  name: "Mrs. Sonam Agarwal",
                  role: "Independent Woman Director",
                  desc: "FCA with 10+ years of consulting expertise in finance and audit.",
                },
              ].map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-neutral-800/70 to-neutral-900/40 border border-neutral-700 shadow-lg"
                >
                  <h3 className="text-blue-400 font-semibold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "quality-policy":
        return (
          <>
            <h2>Quality Policy</h2>
            <p>
              We commit to delivering products and services that surpass
              customer expectations through continuous innovation and adherence
              to global standards.
            </p>
          </>
        );

      case "committees":
        return (
          <>
            <h2>Committees of Board of Directors</h2>
            <ul>
              <li>Audit Committee</li>
              <li>Nomination & Remuneration Committee</li>
              <li>CSR Committee</li>
              <li>Stakeholders Relationship Committee</li>
            </ul>
          </>
        );
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-neutral-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Our Companies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Discover the people, values, and vision powering Adhunik Group.
        </motion.p>
      </section>

      {/* Tabs Navigation */}
      <div className="relative z-10 flex justify-center border-b border-neutral-800 bg-black/70 backdrop-blur-sm sticky top-0">
        <div className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2 text-sm md:text-base font-medium transition-all ${
                activeTab === tab.id
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.title}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-6">
        <motion.div
          className="bg-neutral-900/50 backdrop-blur-md rounded-3xl border border-neutral-800 shadow-2xl p-10 md:p-14"
          {...fadeAnim}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              {...fadeAnim}
              className="space-y-6 text-gray-300"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
