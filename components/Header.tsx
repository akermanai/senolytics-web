"use client";
import { useState } from "react";
import Link from "next/link";

const productsLinks = [
  { href: "/lead-shield", label: "Lead Shield" },
  { href: "/funnel-optimization", label: "Funnel Optimization" },
  { href: "/ai-innovation-lab", label: "AI Innovation Lab" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#03032e]/95 backdrop-blur-sm border-b border-[rgba(2,127,255,0.1)]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-baseline gap-0">
          <span className="text-white font-black text-xl tracking-tight">senolytics</span>
          <span className="text-[#027fff] font-black text-xl">.ai</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-[#8b8fa8] hover:text-white transition-colors">Home</Link>

          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="text-sm text-[#8b8fa8] hover:text-white transition-colors flex items-center gap-1">
              AI Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-[#06063f] border border-[rgba(2,127,255,0.2)] rounded-xl shadow-2xl py-2">
                {productsLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-[#8b8fa8] hover:text-white hover:bg-[rgba(2,127,255,0.05)] transition-colors">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="text-sm text-[#8b8fa8] hover:text-white transition-colors flex items-center gap-1">
              Company
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-[#06063f] border border-[rgba(2,127,255,0.2)] rounded-xl shadow-2xl py-2">
                {companyLinks.map(l => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-[#8b8fa8] hover:text-white hover:bg-[rgba(2,127,255,0.05)] transition-colors">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="btn-primary text-sm py-2 px-5">Request Info</Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#06063f] border-t border-[rgba(2,127,255,0.1)] px-6 py-4 space-y-3">
          <Link href="/" className="block text-[#8b8fa8] hover:text-white py-1" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="text-xs text-[#027fff] uppercase tracking-widest mt-3 mb-1">AI Products</div>
          {productsLinks.map(l => <Link key={l.href} href={l.href} className="block text-[#8b8fa8] hover:text-white py-1 pl-2" onClick={() => setMobileOpen(false)}>{l.label}</Link>)}
          <div className="text-xs text-[#027fff] uppercase tracking-widest mt-3 mb-1">Company</div>
          {companyLinks.map(l => <Link key={l.href} href={l.href} className="block text-[#8b8fa8] hover:text-white py-1 pl-2" onClick={() => setMobileOpen(false)}>{l.label}</Link>)}
          <Link href="/contact" className="btn-primary text-sm mt-3 w-full justify-center block text-center" onClick={() => setMobileOpen(false)}>Request Info</Link>
        </div>
      )}
    </header>
  );
}
