"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    dob: "",
    email: "",
    qualification: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Thank you for applying! Your form has been submitted successfully.");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-2 bg-gradient-to-b from-neutral-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Careers at Adhunik
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mt-6 max-w-2xl"
        >
          Join one of India’s fastest-growing industrial groups — where
          innovation, integrity, and excellence build the foundation for your
          success.
        </motion.p>
      </section>

      {/* JOB OPENING CARD */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-neutral-950 border border-neutral-800 rounded-3xl shadow-xl p-10 space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Sales Executive / Sr. Executive / ASM / Manager
            </h2>
            <p className="text-gray-400 italic mb-2">
              Adhunik Industries Limited – Full Time | Bihar, West Bengal, Assam
              & Tripura
            </p>
          </div>

          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p>
              We’re looking for dynamic professionals with experience in{" "}
              <strong>
                Steel, Cement, Building Materials, or Iron industry
              </strong>{" "}
              for our Sales, Retail, and Business Development divisions.
            </p>
            <p>
              Candidates with experience in <strong>dealer management</strong>,{" "}
              <strong>distribution network expansion</strong>, and{" "}
              <strong>revenue generation</strong> are preferred. Freshers with
              passion for growth are welcome too.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>
                <strong>Salary:</strong> ₹96,000 – ₹9,60,000 per annum
              </li>
              <li>
                <strong>Industry:</strong> Iron & Steel
              </li>
              <li>
                <strong>Functional Area:</strong> Sales, Marketing, Distribution
              </li>
              <li>
                <strong>Employment Type:</strong> Permanent / Full-time
              </li>
            </ul>

            <div className="pt-6 border-t border-neutral-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Education & Skills
              </h3>
              <p>
                Graduates in <strong>Any Discipline</strong>,{" "}
                <strong>BBA</strong>, or <strong>MBA in Marketing</strong> are
                encouraged to apply. Strong communication, leadership, and
                strategic sales skills are essential.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Company Profile
              </h3>
              <p>
                Adhunik Industries Ltd. (AIL) is a leading steel manufacturer in
                Eastern India, renowned for producing high-quality{" "}
                <strong>TMT Bars</strong>, <strong>Rounds</strong>, and{" "}
                <strong>Wire Rods</strong>. Backed by ISO 9001:2015, 14001:2015
                & OHSAS 18001:2007 certifications, AIL is listed on the BSE,
                NSE, and CSE.
              </p>
              <p className="mt-2">
                With cutting-edge technology and a strong R&D division, we
                ensure the finest quality products such as{" "}
                <strong>Fe 500 SD TMT Bars</strong> – designed for strength,
                flexibility, and long-term durability.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Visit:{" "}
                <a
                  href="https://www.adhunikindustries.com"
                  className="text-blue-400 hover:underline"
                >
                  www.adhunikindustries.com
                </a>{" "}
                | Mail:{" "}
                <a
                  href="mailto:subratochowdhury@adhunikgroup.co.in"
                  className="text-blue-400 hover:underline"
                >
                  subratochowdhury@adhunikgroup.co.in
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* APPLICATION FORM */}
      <section className="bg-gradient-to-t from-neutral-950 to-black py-24 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10 text-blue-400"
          >
            Career Form
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-neutral-900/60 p-10 rounded-3xl border border-neutral-800 shadow-lg"
          >
            <div>
              <label className="block mb-2 text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Experience</label>
              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-400">Attach Resume</label>
              <input
                type="file"
                name="resume"
                accept=".doc,.docx,.odt,.pdf,.rtf"
                onChange={handleChange}
                className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
