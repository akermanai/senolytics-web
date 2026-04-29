import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#03032e] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image src="/images/senolytics-footer-logo.png" alt="senolytics.ai" width={140} height={36} className="h-8 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Senolytics.ai Is a Brand of Bontida Limited<br />
              Registration: HE431123<br />
              Zinonos Kitieos 9, Egkomi 2406<br />
              Nicosia Cyprus
            </p>
            <a href="mailto:team@senolytics.ai" className="text-[#027fff] text-sm mt-3 inline-block hover:underline">team@senolytics.ai</a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/lead-shield" className="text-gray-400 hover:text-white text-sm transition-colors">Lead Shield</Link></li>
              <li><Link href="/funnel-optimization" className="text-gray-400 hover:text-white text-sm transition-colors">Funnel Optimization</Link></li>
              <li><Link href="/ai-innovation-lab" className="text-gray-400 hover:text-white text-sm transition-colors">AI Innovation Lab</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2023 Bontida Limited. Proudly made in sunny Cyprus
        </div>
      </div>
    </footer>
  );
}
