"use client";

import Link from "next/link";
import Image from "next/image";
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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://cameronwitkowski.com/wp-content/uploads/2023/03/c.s.w.jpg"
            alt="Cameron S. Witkowski"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="font-semibold text-gray-800 hidden sm:block">Cameron S. Witkowski</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#1abc9c] transition-colors">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <Link href="/projects" className="hover:text-[#1abc9c] transition-colors flex items-center gap-1">
              Projects
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            {projectsOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg w-64 py-1 z-50">
                {projectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1abc9c] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/publications" className="hover:text-[#1abc9c] transition-colors">Publications</Link>

          <div
            className="relative"
            onMouseEnter={() => setWritingOpen(true)}
            onMouseLeave={() => setWritingOpen(false)}
          >
            <Link href="/writing" className="hover:text-[#1abc9c] transition-colors flex items-center gap-1">
              Writing
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            {writingOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg w-52 py-1 z-50">
                {writingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1abc9c] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://twitter.com/witkowski_cam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1abc9c] transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-1 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#1abc9c]">Home</Link>
          <div className="py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide mt-1">Projects</div>
          {projectLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="pl-3 py-1.5 hover:text-[#1abc9c]">
              {link.label}
            </Link>
          ))}
          <Link href="/publications" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#1abc9c]">Publications</Link>
          <div className="py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide mt-1">Writing</div>
          {writingLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="pl-3 py-1.5 hover:text-[#1abc9c]">
              {link.label}
            </Link>
          ))}
          <a href="https://twitter.com/witkowski_cam" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#1abc9c]">Twitter</a>
        </div>
      )}
    </nav>
  );
}
