"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-[6%] py-5 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-white/[0.06]"
          : "bg-background/88 backdrop-blur-lg border-b border-white/[0.06]"
      }`}
    >
      <div className="font-[family-name:var(--font-display)] text-3xl font-black text-foreground">
        TINKU DEKA<span className="text-accent">.</span>
      </div>

      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl text-foreground"
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      {isOpen && (
        <ul className="absolute top-[70px] right-0 w-full bg-background/97 backdrop-blur-lg flex flex-col gap-4 px-[6%] py-5 border-b border-border md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted text-sm hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
