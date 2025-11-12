"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdhunikNailsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <Image
          src="/nails.png"
          alt="Adhunik Nails"
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
            Adhunik <span className="text-blue-400">Nails</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-medium mb-8">
            Precision Engineered Fasteners
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Cold-forged, precision-engineered nails designed for industrial
            strength, corrosion resistance, and lasting performance.
          </p>
        </motion.div>
      </section>

      {/* DETAILS */}
      <section className="relative py-28 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-6">
              Precision in Every Nail
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Manufactured using advanced cold-forging technology, Adhunik Nails
              deliver superior grip, strength, and corrosion resistance — ideal
              for heavy-duty industrial, furniture, and fabrication
              applications.
            </p>

            <ul className="space-y-3 text-gray-300 text-base mb-8">
              <li>• Made from premium-grade steel</li>
              <li>• Rust and corrosion resistant coating</li>
              <li>• Uniform length, head, and shank precision</li>
              <li>• Custom sizes available for industrial needs</li>
            </ul>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
              Enquire Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-xl overflow-hidden shadow-lg border border-neutral-800"
          >
            <Image
              src="/nails.png"
              alt="Adhunik Nails Product"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 text-center border-t border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-semibold mb-6">
            Strong. Reliable. Adhunik.
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Trusted by builders and manufacturers across India — Adhunik Nails
            combine strength and precision for unbeatable quality.
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
