"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const productSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      id: "tmt-bars",
      name: "TMT Bars",
      tagline: "Strengthening the Core of Indian Construction",
      image: "/TMTbar.png",
      description:
        "Engineered with Tempcore Belgium technology, Adhunik TMT bars deliver exceptional strength, ductility, and corrosion resistance — redefining structural safety for India's infrastructure.",
    },
    {
      id: "link-edge",
      name: "Link EDGE",
      tagline: "Precision. Strength. Safety.",
      image: "/linkedge.png",
      description:
        "Pre-formed stirrups made with FE500SD TMT ensure unmatched dimensional accuracy, earthquake resistance, and zero wastage — the next generation of reinforcement technology.",
    },
    {
      id: "adhunik-nails",
      name: "Adhunik Nails",
      tagline: "Precision Engineered Fasteners for Industrial Strength",
      image: "/nails.png",
      description:
        "Cold-forged, heat-treated steel nails built for precision, corrosion resistance, and durability — designed for demanding industrial and fabrication use.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/homepage/banner_video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Engineering Strength.
            <br /> Delivering Precision.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            From TMT Bars to precision Link EDGE and Adhunik Nails — we design
            materials that build the foundation of modern infrastructure.
          </p>

          {/* SCROLL BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="px-6 py-3 text-lg font-medium border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            See Our Products ↓
          </motion.button>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <div ref={productSectionRef}>
        {products.map((product, index) => {
          const isReversed = index % 2 === 1;
          const alignLeft = index === 1;

          return (
            <section
              key={product.id}
              className={`relative min-h-[90vh] flex flex-col md:flex-row items-center ${
                isReversed ? "md:flex-row-reverse" : ""
              } ${index % 2 === 0 ? "bg-neutral-950" : "bg-black"}`}
            >
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[70vh]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 px-10 md:px-20 py-12 ${
                  alignLeft
                    ? "text-left md:pl-20"
                    : isReversed
                      ? "text-right md:pl-32 md:pr-10"
                      : ""
                }`}
              >
                <h2 className="text-4xl font-bold mb-3 text-blue-400">
                  {product.name}
                </h2>
                <h3 className="text-xl italic text-gray-300 mb-6">
                  {product.tagline}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                <div
                  className={`flex gap-6 ${
                    alignLeft
                      ? "justify-start"
                      : isReversed
                        ? "justify-end"
                        : "justify-start"
                  }`}
                >
                  {/* ✅ ENQUIRY PAGE LINK */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/enquiry?product=${encodeURIComponent(
                        product.name,
                      )}`}
                      className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded-md inline-block"
                    >
                      Enquire Now
                    </Link>
                  </motion.div>

                  {/* ✅ PRODUCT DETAILS LINK */}
                  <Link
                    href={`/products/${product.id}`}
                    className="text-blue-400 font-medium hover:underline flex items-center transition-all duration-300 hover:text-blue-300"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* CTA SECTION */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-semibold mb-4">
            Built for the Future of Infrastructure
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Adhunik’s advanced metallurgical expertise and manufacturing
            precision empower industries to construct stronger, safer, and more
            sustainable structures across India.
          </p>
          <Link href="/enquiry">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold hover:bg-gray-100 transition rounded-full">
              Connect with Our Engineering Team
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
