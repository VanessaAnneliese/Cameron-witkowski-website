"use client";

import Link from "next/link";
import { useState } from "react";

const projectLinks = [
  { href: "/projects/masters-thesis", label: "Masters Thesis" },
  { href: "/projects/undergrad-thesis", label: "Undergrad Thesis" },
  { href: "/projects/drone-reactor-inspection", label: "Drone Reactor Inspection" },
  { href: "/projects/sexually-selected-computer-code", label: "Sexually Selected Computer Code" },
  { href: "/projects/dynamics-of-probabilistic-neurons", label: "Dynamics of Probabilistic Neurons" },
  { href: "/projects/minimax-chess-engine", label: "Minimax Chess Engine" },
  { href: "/projects/telescope", label: "Telescope" },
];

const writingLinks = [
  { href: "/writing/logic-as-space", label: "Logic as Space" },
  { href: "/writing/some-ideas-about-things", label: "Some Ideas About Things" },
  { href: "/writing/the-sun", label: "The Sun" },
];

export default function Nav() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [writingOpen, setWritingOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-black tracking-tight" style={{ fontFamily: "var(--font-inter)" }}>
          C.S.W
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          <Link href="/" className="text-[#1abc9c] font-medium hover:text-[#16a085] transition-colors">
            Home
          </Link>

          <div className="relative" onMouseEnter={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors cursor-pointer">
              Projects
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {projectsOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg w-64 py-1 z-50">
                {projectLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1abc9c] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/publications" className="hover:text-gray-900 transition-colors">Publications</Link>

          <div className="relative" onMouseEnter={() => setWritingOpen(true)} onMouseLeave={() => setWritingOpen(false)}>
            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors cursor-pointer">
              Writing
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {writingOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg w-52 py-1 z-50">
                {writingLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1abc9c] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="https://twitter.com/witkowski_cam" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            Twitter
          </a>

          {/* Search icon */}
          <button className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Search">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-3 flex flex-col gap-1 text-sm text-gray-700">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 text-[#1abc9c] font-medium">Home</Link>
          <p className="py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Projects</p>
          {projectLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="pl-3 py-1.5 hover:text-[#1abc9c]">{link.label}</Link>
          ))}
          <Link href="/publications" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#1abc9c]">Publications</Link>
          <p className="py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Writing</p>
          {writingLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="pl-3 py-1.5 hover:text-[#1abc9c]">{link.label}</Link>
          ))}
          <a href="https://twitter.com/witkowski_cam" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#1abc9c]">Twitter</a>
        </div>
      )}
    </nav>
  );
}
