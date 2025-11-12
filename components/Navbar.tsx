"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Detect scroll to dim navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
    { name: "Investor's Corner", path: "/investors-corner" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300
        ${
          isHovered
            ? "bg-white/90 border-neutral-300"
            : isScrolled
              ? "bg-white/40 border-neutral-200"
              : "bg-white/80 border-neutral-200"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-14">
        {/* LOGO LEFT */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900 hover:opacity-80 transition"
        >
          Adhunik Steels
        </Link>

        {/* CENTER LINKS */}
        <ul className="flex items-center gap-6 text-sm font-medium">
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

        {/* RIGHT SPACER FOR BALANCE */}
        <div className="w-10" />
      </div>
    </nav>
  );
}
