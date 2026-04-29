import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#06063f] border-t border-[rgba(2,127,255,0.15)] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            {/* Text logo — matches Header */}
            <Link href="/" className="inline-flex items-baseline gap-0 mb-5 block">
              <span className="text-white font-black text-xl tracking-tight">senolytics</span>
              <span className="text-[#027fff] font-black text-xl">.ai</span>
            </Link>
            <p className="text-[#8b8fa8] text-sm leading-relaxed mb-3">
              Senolytics.ai is a brand of Bontida Limited<br />
              Registration: HE431123<br />
              Zinonos Kitieos 9, Egkomi 2406<br />
              Nicosia, Cyprus
            </p>
            <a
              href="mailto:team@senolytics.ai"
              className="text-[#027fff] text-sm hover:underline"
            >
              team@senolytics.ai
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/lead-shield" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  Lead Shield
                </Link>
              </li>
              <li>
                <Link href="/funnel-optimization" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  Funnel Optimization
                </Link>
              </li>
              <li>
                <Link href="/ai-innovation-lab" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  AI Innovation Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-[#8b8fa8] hover:text-white text-sm transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[rgba(2,127,255,0.1)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#8b8fa8] text-xs">
          <span>© {new Date().getFullYear()} Bontida Limited. Proudly made in sunny Cyprus.</span>
          <span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            {" · "}
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            {" · "}
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
