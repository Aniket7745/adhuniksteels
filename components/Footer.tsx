"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-800 ">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Incredible Industries Ltd.
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Precision. Trust. Innovation.
              <br />
              Delivering high-quality steel products to build India’s future.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/our-companies"
                  className="hover:text-white transition"
                >
                  Our Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/investors-corner"
                  className="hover:text-white transition"
                >
                  Investors Corner
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
              Reach Us
            </h4>
            <ul className="text-sm space-y-2 text-neutral-400">
              <li>Adhunik Industries Ltd. 14 N.S. Road, Kolkata – 700001</li>
              <li>info@adhunikgroup.com</li>
              <li>+91 33 2243 4350</li>
            </ul>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 mt-14 mb-8"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} Incredible Industries Ltd. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition">
              ●
            </span>
            <span className="hover:text-white cursor-pointer transition">
              ○
            </span>
            <span className="hover:text-white cursor-pointer transition">
              ◆
            </span>
            <span className="hover:text-white cursor-pointer transition">
              ✦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
