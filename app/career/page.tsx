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
    role: "", // NEW FIELD
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
      <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-black px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight"
        >
          Careers at Adhunik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg mt-4 sm:mt-6 max-w-xl"
        >
          Join one of India’s fastest-growing industrial groups — where
          innovation, integrity, and excellence build the foundation for your
          success.
        </motion.p>
      </section>

      {/* JOB OPENING CARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-neutral-950 border border-neutral-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10 space-y-6 sm:space-y-8"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-3 sm:mb-4 leading-snug">
              Sales Executive / Sr. Executive / ASM / Manager
            </h2>
            <p className="text-gray-400 italic text-sm sm:text-base mb-2">
              Adhunik Industries Limited – Full Time | Bihar, West Bengal, Assam
              & Tripura
            </p>
          </div>

          <div className="text-gray-300 space-y-4 sm:space-y-6 leading-relaxed text-sm sm:text-base">
            <p>
              We’re looking for dynamic professionals with experience in{" "}
              <strong>
                Steel, Cement, Building Materials, or Iron industry.
              </strong>
            </p>

            <p>
              Candidates skilled in <strong>dealer management</strong>,{" "}
              <strong>distribution expansion</strong>, and{" "}
              <strong>revenue generation</strong> are preferred. Freshers
              welcome.
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm sm:text-base">
              <li>
                <strong>Salary:</strong> ₹96,000 – ₹9,60,000 per annum
              </li>
              <li>
                <strong>Industry:</strong> Iron & Steel
              </li>
              <li>
                <strong>Functional Area:</strong> Sales & Marketing
              </li>
              <li>
                <strong>Type:</strong> Permanent / Full-time
              </li>
            </ul>

            <div className="pt-4 sm:pt-6 border-t border-neutral-800">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
                Education & Skills
              </h3>
              <p>
                Graduates in <strong>Any Discipline</strong>,{" "}
                <strong>BBA</strong>, <strong>MBA</strong>, with strong
                communication & leadership skills.
              </p>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-neutral-800">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
                Company Profile
              </h3>
              <p>
                Adhunik Industries Ltd. (AIL) is a leading steel manufacturer in
                Eastern India, producing <strong>TMT Bars</strong>,{" "}
                <strong>Rounds</strong>, and <strong>Wire Rods</strong>.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-gray-500">
                Website:{" "}
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
      <section className="bg-gradient-to-t from-neutral-950 to-black py-16 sm:py-24 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-blue-400"
          >
            Career Form
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-neutral-900/60 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-neutral-800 shadow-lg"
          >
            {/* TEXT INPUTS */}
            {[
              { label: "Name", name: "name" },
              { label: "Address", name: "address" },
              { label: "Date of Birth", name: "dob", type: "date" },
              { label: "Email", name: "email", type: "email" },
              { label: "Qualification", name: "qualification" },
              { label: "Experience", name: "experience" },
            ].map(({ label, name, type = "text" }) => (
              <div key={name}>
                <label className="block mb-2 text-gray-400 text-sm sm:text-base">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={(form as any)[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            ))}

            {/* ROLE DROPDOWN */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-400 text-sm sm:text-base">
                Applying For
              </label>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white outline-none focus:border-blue-500 text-sm sm:text-base"
                required
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option value="Sales Executive">Sales Executive</option>
                <option value="Senior Executive">Senior Executive</option>
                <option value="Area Sales Manager">
                  Area Sales Manager (ASM)
                </option>
                <option value="Manager">Manager</option>
                <option value="Business Development">
                  Business Development
                </option>
                <option value="Marketing">Marketing</option>
                <option value="Fresher - Any Role">Fresher – Any Role</option>
              </select>
            </div>

            {/* FILE UPLOAD */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-400 text-sm sm:text-base">
                Attach Resume
              </label>
              <input
                type="file"
                name="resume"
                accept=".doc,.docx,.odt,.pdf,.rtf"
                onChange={handleChange}
                className="w-full text-gray-300 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition text-sm sm:text-base"
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
