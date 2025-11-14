"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col w-full bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          src="/homepage/banner_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6 text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            Adhunik <span className="text-blue-400">TMT</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-200">
            Bharosa Hamesha
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            Strengthening India’s infrastructure with innovation, precision, and
            trust — Adhunik delivers the steel that builds the nation.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-full text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Learn More ↓
            </button>

            <Link href="/products">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                Explore Our Products →
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        className="relative bg-neutral-950 py-28 text-center border-t border-neutral-800 overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src="/homepage/about_bg-1.jpg"
          alt="About Adhunik Group"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            About Our Group
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 backdrop-blur-sm bg-black/30 p-4 rounded-lg shadow-lg">
            Adhunik Group is one of Eastern India’s leading steel manufacturers,
            combining innovation and industrial strength to shape modern
            infrastructure sustainably and responsibly.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all duration-300 hover:scale-105">
            Read Our Story
          </button>
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="relative w-full py-32 overflow-hidden bg-neutral-950 text-white border-t border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black opacity-95"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-20 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "TMT Bars",
                desc: "Engineered with Tempcore Belgium technology for unmatched strength, ductility, and corrosion resistance — redefining safety and quality.",
                img: "/TMTbar.png",
                href: "/products/tmt-bars",
              },
              {
                title: "Link EDGE",
                desc: "Pre-formed stirrups made with FE500SD TMT ensure dimensional precision, zero wastage, and next-generation reinforcement reliability.",
                img: "/LinkEdge.png",
                href: "/products/link-edge",
              },
              {
                title: "Adhunik Nails",
                desc: "Cold-forged, precision-engineered nails built for industrial durability, corrosion resistance, and long-lasting fabrication performance.",
                img: "/nail.png",
                href: "/products/adhunik-nails",
              },
            ].map((product, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative group overflow-hidden rounded-2xl shadow-xl bg-neutral-900 border border-neutral-800"
              >
                {/* Background image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 text-left flex flex-col justify-end h-[400px]">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  <Link href={product.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold shadow-lg transition"
                    >
                      View Product →
                    </motion.button>
                  </Link>
                </div>

                {/* Glow hover */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <Link href="/products">
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-md hover:shadow-blue-700/30 transition-all duration-300">
                Explore All Products →
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INVESTOR RELATIONS */}
      <section className="bg-neutral-950 text-white py-28 border-t border-neutral-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-12 text-blue-400">
            Investor Relations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Financial Results", "Annual Report", "Shareholding Pattern"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-left hover:border-blue-500 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Explore the latest {title.toLowerCase()} of Adhunik Group
                    and stay informed with our corporate disclosures.
                  </p>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
