"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const posts = [
    {
      category: "TMT Bars",
      title: "Role of TMT Bars in Earthquake Resistance",
      excerpt:
        "TMT bars are the gold standard for earthquake-proof buildings. Learn how they protect modern constructions from seismic shocks.",
      content: `
### Role of TMT Bars in Earthquake Resistance

Not long ago, the world witnessed in shock a severe seismic activity on **25 April 2015**, when a devastating earthquake sent shock-waves across one of India’s neighboring countries, **Nepal**.

The widespread destruction not only brought more than **6 lakh structures** down to the dust, but it also claimed over **9 thousand precious lives** in and around Nepal’s capital city, **Kathmandu**.

Interestingly, research shows that the impact of the 2015 tremor was significantly less in Indian states bordering Nepal. Experts say this is because most Indian buildings use **TMT bars**, which provide enhanced seismic resistance.

#### Outstanding Seismic Performance
Top-class TMT bars possess key qualities like **ductility**, **elongation**, and **strength** — which help retain the structure’s integrity during earthquakes by absorbing shock without breaking.

TMT bars have a **soft ferrite-pearlite core** and a **robust martensite outer layer**. During tremors, the inner core allows flexibility while the outer layer restores structural shape.

#### Selecting Earthquake-Resistant TMT Bars
Premium manufacturers like **Adhunik** use **Tempcore Belgium technology** to produce high-strength TMT bars from **virgin iron ore**, ensuring ideal yield strength and flexibility for seismic zones.

#### How to Verify Earthquake-Proof Quality
The **Bureau of Indian Standards (BIS)** recommends grades like **Fe-415**, **Fe-500D**, and **Fe-600**. Among them, **Fe-415** offers the perfect mix of strength and ductility.

Adhunik TMT bars are **IS:1786:2008 certified**, meeting BIS standards for earthquake-resistant construction.

With **over 56%** of India’s land prone to seismic activity (as per the **National Centre of Seismology**), it’s essential to choose the right TMT bars to safeguard your home and family.
      `,
    },
    {
      category: "TMT Bars",
      title: "Concrete Vs. Steel: How Do They Stack Up?",
      excerpt:
        "Concrete and steel are both vital in construction. But which one stands taller in strength, cost, and sustainability? Find out.",
      content: `
### Concrete Vs. Steel: How Do They Stack Up?

Content coming soon...
      `,
    },
    {
      category: "TMT Bars",
      title: "What Makes Adhunik the Best TMT Bar You Can Choose?",
      excerpt:
        "Discover why Adhunik’s TMT bars set the gold standard in strength, corrosion resistance, and durability.",
      content: `
### What Makes Adhunik the Best TMT Bar You Can Choose?

Full content coming soon...
      `,
    },
  ];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "overlay-bg") {
      setSelectedPost(null);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-neutral-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Insights & Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Explore the latest in construction technology, TMT insights, and
          Adhunik’s journey toward a stronger, sustainable future.
        </motion.p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 mt-16">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-900/30 transition-all cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <p className="text-blue-400 text-sm mb-2 font-medium">
              {post.category}
            </p>
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <span className="text-blue-500 text-sm font-medium hover:underline">
              Read More →
            </span>
          </motion.article>
        ))}
      </section>

      {/* BIG PREVIEW (MODAL) */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            id="overlay-bg"
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex justify-center items-center z-50 overflow-y-auto py-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-3xl p-10 text-gray-300 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-light"
              >
                ✕
              </button>

              <p className="text-blue-400 text-sm font-medium mb-2">
                {selectedPost.category}
              </p>
              <h2 className="text-4xl font-bold mb-6 text-white">
                {selectedPost.title}
              </h2>

              {/* MARKDOWN-LIKE CONTENT */}
              <div className="prose prose-invert max-w-none leading-relaxed">
                {selectedPost.content
                  .split("\n")
                  .map((line: string, i: number) =>
                    line.trim().startsWith("###") ? (
                      <h3
                        key={i}
                        className="text-2xl text-blue-400 font-semibold mt-6 mb-2"
                      >
                        {line.replace("###", "").trim()}
                      </h3>
                    ) : line.trim().startsWith("####") ? (
                      <h4
                        key={i}
                        className="text-xl text-blue-300 font-medium mt-5 mb-2"
                      >
                        {line.replace("####", "").trim()}
                      </h4>
                    ) : (
                      <p key={i} className="mb-4">
                        {line}
                      </p>
                    ),
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
