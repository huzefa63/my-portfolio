"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">Huzefa</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-4 text-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-blue-400 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
