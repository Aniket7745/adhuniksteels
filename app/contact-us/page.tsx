"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err: { [key: string]: string } = {};
    if (!form.name.trim()) err.name = "Enter your name";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Enter a valid email";
    if (!form.message.trim()) err.message = "Message cannot be empty";
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <main className="bg-black text-neutral-200 pt-24 pb-16">
      {/* HEADER */}
      <section className="text-center px-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mt-4"
        >
          We'd love to hear from you. Our team will respond within 48 hours.
        </motion.p>
      </section>

      {/* GRID WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE — FORM */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4 text-white">
            Send a Message
          </h2>

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col text-sm">
              <span className="text-neutral-400 mb-1">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`rounded-lg bg-neutral-950/60 border px-3 py-2 focus:border-blue-500 outline-none ${
                  errors.name ? "border-red-500" : "border-neutral-800"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <span className="text-xs text-red-400 mt-1">{errors.name}</span>
              )}
            </label>

            <label className="flex flex-col text-sm">
              <span className="text-neutral-400 mb-1">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className={`rounded-lg bg-neutral-950/60 border px-3 py-2 focus:border-blue-500 outline-none ${
                  errors.email ? "border-red-500" : "border-neutral-800"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-xs text-red-400 mt-1">
                  {errors.email}
                </span>
              )}
            </label>
          </div>

          {/* SUBJECT */}
          <label className="flex flex-col text-sm mt-4">
            <span className="text-neutral-400 mb-1">Subject (optional)</span>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="rounded-lg bg-neutral-950/60 border border-neutral-800 px-3 py-2 focus:border-blue-500 outline-none"
              placeholder="Quick subject"
            />
          </label>

          {/* MESSAGE */}
          <label className="flex flex-col text-sm mt-4">
            <span className="text-neutral-400 mb-1">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="How can we help?"
              className={`rounded-lg bg-neutral-950/60 border px-3 py-2 resize-none focus:border-blue-500 outline-none ${
                errors.message ? "border-red-500" : "border-neutral-800"
              }`}
            ></textarea>
            {errors.message && (
              <span className="text-xs text-red-400 mt-1">
                {errors.message}
              </span>
            )}
          </label>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2.5 rounded-lg text-sm font-medium"
            >
              {submitted ? "Sending..." : "Send Message"}
            </button>

            <button
              type="button"
              onClick={() =>
                setForm({ name: "", email: "", subject: "", message: "" })
              }
              className="text-neutral-400 hover:text-neutral-200 text-sm"
            >
              Reset
            </button>
          </div>

          <p className="text-xs text-neutral-500 mt-3">
            By submitting you agree to our{" "}
            <a className="text-blue-400 hover:underline" href="/privacy-policy">
              Privacy Policy
            </a>
            .
          </p>
        </motion.form>

        {/* RIGHT SIDE — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* OFFICE CARD */}
          <div className="rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Office Address
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Adhunik Industries Ltd.
              <br />
              14 N.S. Road, 3rd Floor
              <br />
              Kolkata – 700001, West Bengal, India
            </p>

            <a
              href="https://maps.app.goo.gl/"
              target="_blank"
              className="inline-block text-blue-400 hover:underline mt-3 text-sm"
            >
              View on Google Maps →
            </a>
          </div>

          {/* CONTACT CARD */}
          <div className="rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

            <div className="space-y-2 text-sm text-neutral-300">
              <p>
                <span className="text-neutral-400">Phone:</span>{" "}
                <a href="tel:+913322434350" className="hover:text-white">
                  +91 33 2243 4350
                </a>
              </p>

              <p>
                <span className="text-neutral-400">Email:</span>{" "}
                <a
                  href="mailto:info@adhunikgroup.com"
                  className="hover:text-white"
                >
                  info@adhunikgroup.com
                </a>
              </p>

              <p>
                <span className="text-neutral-400">Hours:</span> Mon–Fri,
                9AM–6PM
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="w-9 h-9 rounded-md bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-300">
                T
              </div>
              <div className="w-9 h-9 rounded-md bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-300">
                in
              </div>
              <div className="w-9 h-9 rounded-md bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-300">
                ▶
              </div>
            </div>
          </div>

          {/* CAREERS CARD */}
          <div className="rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur-xl p-5 shadow-lg text-sm text-neutral-300">
            <strong className="text-white">Interested in joining?</strong>
            <p className="mt-1">
              Visit our{" "}
              <a href="/career" className="text-blue-400 hover:underline">
                Careers page
              </a>{" "}
              for openings.
            </p>
          </div>
        </motion.div>
      </div>

      {/* FOOTER LINE */}
      <div className="text-center text-xs text-neutral-600 mt-12">
        © {new Date().getFullYear()} Adhunik Industries Ltd. All rights
        reserved.
      </div>
    </main>
  );
}
