"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TMTBarsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <Image
          src="/TMTbar.png" // ✅ Using your actual image
          alt="Adhunik TMT Bars"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Adhunik <span className="text-blue-400">TMT Bars</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-medium mb-8">
            Strengthening the Core of Indian Construction
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Engineered with cutting-edge Tempcore Belgium technology, Adhunik
            TMT Bars are built to endure — delivering strength, flexibility, and
            corrosion resistance that redefine India’s construction standards.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT DETAILS SECTION */}
      <section className="relative py-28 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-6">
              Unmatched Quality, Certified Strength
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Adhunik TMT Bars are produced using advanced block mills and
              virgin iron ore from captive mines through the world-renowned
              <span className="text-blue-400 font-semibold">
                {" "}
                Tempcore Process (CRM Belgium)
              </span>
              . This ensures precision in weight, perfect rib patterns, and
              consistent strength across every bar.
            </p>

            <ul className="space-y-3 text-gray-300 text-base mb-8">
              <li>• Earthquake resistant & corrosion resistant</li>
              <li>• Made from 100% virgin iron ore</li>
              <li>• Produced with ISO 9001:2015 & 14001:2015 certification</li>
              <li>• Available grades: Fe-415, Fe-500, Fe-550, Fe-600</li>
              <li>• Sizes: 6mm to 32mm</li>
            </ul>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
              Enquire Now
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-xl overflow-hidden shadow-lg border border-neutral-800"
          >
            <Image
              src="/TMTbar.png"
              alt="Adhunik TMT Bars Product"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="bg-black py-24 text-center border-t border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-10">
            Technical Excellence
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Our TMT bars undergo stringent quality checks and advanced refining
            processes — from Induction Furnaces to Continuous Casting Billet
            Machines — ensuring uniform strength, ductility, and performance in
            every meter.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Tempcore Technology",
                desc: "Adopted from CRM Belgium for high ductility and strength.",
              },
              {
                title: "Advanced LRF Refinement",
                desc: "Ensures reduced sulphur and phosphorus for superior purity.",
              },
              {
                title: "Continuous Casting Process",
                desc: "Guarantees uniform internal structure and consistency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-700 text-white py-20 text-center border-t border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-semibold mb-6">
            Build with Strength. Build with Adhunik.
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Our TMT Bars are engineered to empower the future of India’s
            infrastructure — from skyscrapers to bridges and everything in
            between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold hover:bg-gray-100 transition rounded-full">
              Enquire Now
            </button>
            <Link href="/products">
              <button className="px-8 py-3 border border-white hover:bg-white hover:text-blue-700 font-semibold transition rounded-full">
                ← Back to Products
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
