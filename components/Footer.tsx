import Link from "next/link";

const products = [
  { label: "LeadShield", href: "/lead-shield" },
  { label: "Funnel Optimisation", href: "/funnel-optimization" },
  { label: "AI Innovation Lab", href: "/ai-innovation-lab" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07073a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-black tracking-tight mb-4">
              <span className="text-white">senolytics</span>
              <span className="text-[#f59e0b]">.ai</span>
            </div>
            <p className="text-[#9ca3b8] text-sm leading-relaxed mb-4">
              AI-powered lead intelligence and fraud prevention for financial services and
              regulated industries.
            </p>
            <a
              href="mailto:team@senolytics.ai"
              className="text-[#f59e0b] text-sm hover:underline"
            >
              team@senolytics.ai
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9ca3b8] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9ca3b8] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#9ca3b8] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[#9ca3b8] text-sm">
            © {new Date().getFullYear()} Bontida Limited (trading as Senolytics.ai) · Reg. HE431123 · Nicosia, Cyprus
          </p>
          <p className="text-[#9ca3b8] text-xs">
            EU Data Centres · GDPR Compliant · ISO 27001
          </p>
        </div>
      </div>
    </footer>
  );
}
