"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

Not long ago, the world witnessed...

(Your same content)
      `,
    },
    {
      category: "TMT Bars",
      title: "Concrete Vs. Steel: How Do They Stack Up?",
      excerpt:
        "Concrete and steel are both vital in construction. But which one stands taller?",
      content: `### Concrete Vs Steel\nContent coming soon...`,
    },
    {
      category: "TMT Bars",
      title: "What Makes Adhunik the Best TMT Bar?",
      excerpt:
        "Discover why Adhunik’s TMT bars set the gold standard in strength and durability.",
      content: `### Why Adhunik?\nContent coming soon...`,
    },
  ];

  const handleOverlayClick = (e: any) => {
    if (e.target.id === "overlay-bg") setSelectedPost(null);
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* HERO SECTION */}
      <section className="relative h-[32vh] sm:h-[40vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-neutral-900 to-black px-4">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Insights & Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-sm sm:text-base max-w-lg px-2"
        >
          Discover expert insights into TMT bars, construction materials, and
          modern steel innovation.
        </motion.p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-20 mt-10 sm:mt-16">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:shadow-blue-900/20 transition-all cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <p className="text-blue-400 text-xs sm:text-sm mb-2 font-medium">
              {post.category}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-snug">
              {post.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <span className="text-blue-500 text-xs sm:text-sm font-medium hover:underline">
              Read More →
            </span>
          </motion.article>
        ))}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            id="overlay-bg"
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex justify-center items-start z-50 overflow-y-auto py-10 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-gray-300 shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              <p className="text-blue-400 text-xs sm:text-sm font-medium mb-2">
                {selectedPost.category}
              </p>

              <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-snug">
                {selectedPost.title}
              </h2>

              {/* CONTENT */}
              <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed">
                {selectedPost.content
                  .split("\n")
                  .map((line: string, i: number) =>
                    line.trim().startsWith("###") ? (
                      <h3
                        key={i}
                        className="text-xl sm:text-2xl text-blue-400 font-semibold mt-6 mb-2"
                      >
                        {line.replace("###", "").trim()}
                      </h3>
                    ) : (
                      <p key={i} className="mb-3">
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
