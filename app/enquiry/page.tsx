"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your enquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/homepage/banner_video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-6xl font-bold mb-4 text-blue-400">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you’re looking for TMT Bars, Link EDGE, or Adhunik Nails —
            our team is here to help. Fill out the form below and we’ll get back
            to you shortly.
          </p>
        </motion.div>
      </section>

      {/* ENQUIRY FORM SECTION */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl font-semibold text-center mb-10 text-blue-400">
            Enquiry Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-10 shadow-xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Product Interested In
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Product</option>
                <option value="TMT Bars">TMT Bars</option>
                <option value="Link EDGE">Link EDGE</option>
                <option value="Adhunik Nails">Adhunik Nails</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your requirements or questions..."
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300"
              >
                Submit Enquiry
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
