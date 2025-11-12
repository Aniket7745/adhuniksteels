"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LinkEdgePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <Image
          src="/linkedge.png"
          alt="Adhunik Link EDGE"
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
            Adhunik <span className="text-blue-400">Link EDGE</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-medium mb-8">
            Precision. Strength. Safety.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Designed for structural accuracy and built with FE500SD
            high-strength TMT, Adhunik Link EDGE stirrups deliver unbeatable
            reliability, ensuring every structure stands strong under pressure.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="relative py-28 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-6">
              Engineered for Perfection
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Link EDGE stirrups are manufactured using fully automated
              processes for precise dimensions and enhanced durability. Each
              stirrup is built with a 135° hook and 10d length to meet IS
              standards for earthquake resistance.
            </p>

            <ul className="space-y-3 text-gray-300 text-base mb-8">
              <li>• Earthquake resistant design</li>
              <li>• Zero dimensional faults</li>
              <li>• Proper locking and uniform shape</li>
              <li>• Manufactured using FE500SD high-strength steel</li>
              <li>• Reduces construction time & labor cost</li>
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
              src="/linkedge.png"
              alt="Adhunik Link EDGE Product"
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
            The Edge That Builds Stronger Futures
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Adhunik Link EDGE offers the strength, accuracy, and consistency
            that modern construction demands — making it the smart choice for
            every engineer.
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
