"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GroupOfCompaniesPage() {
  const tabs = [
    { id: "group-overview", title: "Group Overview" },
    { id: "adhunik-industries", title: "Adhunik Industries Limited" },
    { id: "adhunik-power", title: "Adhunik Power & Natural Resources Ltd." },
    { id: "adhunik-infra", title: "Adhunik Infrastructure Pvt. Ltd." },
    { id: "adhunik-realtors", title: "Adhunik Realtors & Developers Ltd." },
    { id: "adhunik-alloy", title: "Adhunik Alloy Steels Ltd." },
    { id: "adhunik-mines", title: "Adhunik Mines & Minerals Pvt. Ltd." },
  ];

  const [activeTab, setActiveTab] = useState("group-overview");

  const fadeAnim = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "group-overview":
        return (
          <>
            <h2>Group Overview</h2>
            <p>
              The Adhunik Group is one of India’s most diversified and
              progressive industrial conglomerates, with interests spanning
              steel, power, mining, and infrastructure. Founded on integrity,
              innovation, and sustainability, the Group has played a pivotal
              role in shaping India’s industrial growth.
            </p>
            <p>
              Each company under the Group operates independently while sharing
              a common mission — to deliver superior value through technology,
              efficiency, and responsible growth.
            </p>
          </>
        );

      case "adhunik-industries":
        return (
          <>
            <h2>Adhunik Industries Limited</h2>
            <p>
              Adhunik Industries Limited (AIL) is a leading steel manufacturer,
              producing high-quality TMT bars, billets, and structural products
              that power the nation’s infrastructure and construction sectors.
            </p>
            <p>
              AIL’s facilities are equipped with advanced rolling technologies,
              ensuring strength, precision, and sustainability in every product.
            </p>
          </>
        );

      case "adhunik-power":
        return (
          <>
            <h2>Adhunik Power & Natural Resources Ltd.</h2>
            <p>
              Adhunik Power & Natural Resources Ltd. (APNRL) is among India’s
              prominent integrated power producers, operating with a commitment
              to efficiency and environmental responsibility.
            </p>
            <p>
              APNRL emphasizes renewable integration, sustainable generation,
              and reducing carbon footprint — contributing to India’s growing
              clean energy landscape.
            </p>
          </>
        );

      case "adhunik-infra":
        return (
          <>
            <h2>Adhunik Infrastructure Pvt. Ltd.</h2>
            <p>
              Adhunik Infrastructure Pvt. Ltd. specializes in developing and
              executing large-scale infrastructure projects including highways,
              industrial parks, and bridges.
            </p>
            <p>
              Built on precision engineering and sustainability, the company
              aims to strengthen the nation’s connectivity and economic growth.
            </p>
          </>
        );

      case "adhunik-realtors":
        return (
          <>
            <h2>Adhunik Realtors & Developers Ltd.</h2>
            <p>
              Adhunik Realtors & Developers Ltd. pioneers modern real estate
              development, delivering eco-friendly housing and commercial spaces
              that redefine contemporary urban living.
            </p>
            <p>
              With innovation and architectural excellence at its core, the
              company is transforming India’s skyline with quality and trust.
            </p>
          </>
        );

      case "adhunik-alloy":
        return (
          <>
            <h2>Adhunik Alloy Steels Ltd.</h2>
            <p>
              Adhunik Alloy Steels Ltd. (AASL) is a market leader in alloy and
              special steel production for automotive, engineering, and heavy
              industrial use.
            </p>
            <p>
              AASL’s advanced R&D facilities drive consistent innovation,
              delivering reliable steel products that meet global standards.
            </p>
          </>
        );

      case "adhunik-mines":
        return (
          <>
            <h2>Adhunik Mines & Minerals Pvt. Ltd.</h2>
            <p>
              Adhunik Mines & Minerals Pvt. Ltd. focuses on responsible mining
              and supply of raw materials essential for industrial production.
            </p>
            <p>
              Through ethical extraction, efficiency, and safety-driven
              operations, it supports the Group’s steel and power businesses
              while minimizing environmental impact.
            </p>
          </>
        );

      default:
        return null;
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
          Group of Companies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Exploring the Adhunik Group’s industrial ecosystem — powering India’s
          growth with innovation and integrity.
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
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
