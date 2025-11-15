"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Our Companies", path: "/our-companies" },
    { name: "Group of Companies", path: "/group-of-companies" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Investor's Corner", path: "/investors-corner" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          sticky top-0 z-[9999] w-full transition-all duration-300 backdrop-blur-md
          ${isScrolled ? "bg-white/80 shadow-sm" : "bg-white/95"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* MOBILE HEADER */}
          <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/" className="text-lg font-semibold text-neutral-900">
              Adhunik Steels
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md bg-blue-50 border border-blue-200 text-blue-600"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* LEFT → LOGO */}
            <Link href="/" className="text-lg font-semibold text-neutral-900">
              Adhunik Steels
            </Link>

            {/* CENTER LINKS */}
            <ul className="flex items-center gap-8 mx-auto text-sm font-medium">
              {links
                .filter((l) => l.name !== "Contact Us")
                .map((link) => {
                  const active = pathname === link.path;
                  return (
                    <li key={link.name} className="relative group">
                      <Link
                        href={link.path}
                        className={`
                          transition-all 
                          ${active ? "text-neutral-900 font-semibold" : "text-neutral-600"}
                          group-hover:text-neutral-900
                        `}
                      >
                        {link.name}
                      </Link>

                      {/* Animated underline */}
                      <span
                        className={`
                          absolute left-0 -bottom-1 h-[2px] w-full bg-neutral-900 rounded-full 
                          transition-all duration-300
                          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-40"}
                        `}
                      />
                    </li>
                  );
                })}
            </ul>

            {/* RIGHT → CONTACT BUTTON */}
            <Link
              href="/contact-us"
              className="px-5 py-2 bg-blue-600 text-white rounded-full shadow-sm 
                         text-sm font-medium hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`
          md:hidden fixed left-0 top-14 w-full bg-white shadow-xl 
          z-[99999] transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4 text-base font-medium">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block transition 
                    ${active ? "text-blue-600 font-semibold" : "text-neutral-700"}
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
