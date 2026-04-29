"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  {
    label: "Products",
    children: [
      { label: "LeadShield", href: "/lead-shield", desc: "Phone, email & IP validation" },
      { label: "Funnel Optimisation", href: "/funnel-optimization", desc: "AI conversion intelligence" },
      { label: "AI Innovation Lab", href: "/ai-innovation-lab", desc: "Custom AI solutions" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#03032e]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tight">
          <span className="text-white">senolytics</span>
          <span className="text-[#f59e0b]">.ai</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  className="btn-ghost text-sm"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  {item.label}
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open && (
                  <div
                    className="absolute top-full left-0 pt-2 w-64"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div className="bg-[#07073a] border border-white/[0.08] rounded-xl p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-3 rounded-lg hover:bg-white/[0.05] transition-colors"
                        >
                          <span className="text-white text-sm font-semibold">{child.label}</span>
                          <span className="text-[#9ca3b8] text-xs mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href!} className="btn-ghost text-sm">
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact" className="ml-3 btn-primary text-sm py-2">
            Get Started
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#07073a] border-t border-white/[0.06] px-6 py-4 space-y-2">
          <Link href="/lead-shield" className="block py-2 text-[#9ca3b8] hover:text-white">LeadShield</Link>
          <Link href="/funnel-optimization" className="block py-2 text-[#9ca3b8] hover:text-white">Funnel Optimisation</Link>
          <Link href="/ai-innovation-lab" className="block py-2 text-[#9ca3b8] hover:text-white">AI Innovation Lab</Link>
          <Link href="/about" className="block py-2 text-[#9ca3b8] hover:text-white">About</Link>
          <Link href="/contact" className="block py-2 text-[#9ca3b8] hover:text-white">Contact</Link>
          <Link href="/contact" className="btn-primary text-sm mt-2 inline-flex">Get Started</Link>
        </div>
      )}
    </header>
  );
}
