"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for blur effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          sticky top-0 z-[9999] w-full backdrop-blur-xl border-b transition-all duration-300
          ${
            isHovered
              ? "bg-white/90 border-neutral-300"
              : isScrolled
                ? "bg-white/40 border-neutral-200"
                : "bg-white/80 border-neutral-200"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
          {/* LOGO */}
          <Link href="/" className="text-lg font-semibold text-neutral-900">
            Adhunik Steels
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.path}
                    className={`transition-all px-1 ${
                      isActive
                        ? "text-neutral-900 font-semibold"
                        : "text-neutral-600"
                    } group-hover:text-neutral-900`}
                  >
                    {link.name}
                  </Link>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-neutral-900 rounded-full"></span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* DARK OVERLAY BEHIND MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`
          md:hidden fixed left-0 top-14 w-full 
          bg-white shadow-xl
          z-[99999] transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4 text-base font-medium">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${
                    isActive
                      ? "text-neutral-900 font-semibold"
                      : "text-neutral-600"
                  }`}
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
