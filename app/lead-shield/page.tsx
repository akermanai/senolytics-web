import Link from "next/link";

export const metadata = {
  title: "Lead Shield — senolytics.ai",
  description: "Real-time phone, email and IP validation API. Block fraudulent leads before they enter your funnel with 97%+ accuracy.",
};

const features = [
  { title: "Phone Validation", desc: "Verify mobile numbers in real time. Detect invalid, ported, or high-risk numbers before they reach your CRM." },
  { title: "Email Validation", desc: "Check deliverability, domain reputation and disposable email usage instantly via API." },
  { title: "IP Intelligence", desc: "Identify VPNs, proxies, Tor exit nodes and high-risk geographies in under 100ms." },
  { title: "Fraud Scoring", desc: "Composite risk scores combining 40+ signals into a single actionable fraud probability score." },
  { title: "Real-Time API", desc: "Sub-100ms response times. RESTful JSON API with SDKs for Node.js, Python, PHP and more." },
  { title: "GDPR Compliant", desc: "All data processed in EU data centres. Full compliance with GDPR, FCA and ISO 27001 standards." },
];

export default function LeadShieldPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="w-2 h-2 bg-[#027fff] rounded-full" style={{animation:"pulse 2s infinite"}} />
            Live Product
          </div>
          <h1 className="heading-xl mb-6">Lead Shield</h1>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            Real-time phone, email and IP validation. Block fraudulent leads before
            they enter your funnel and protect your acquisition budget with 97%+ accuracy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get API Access</Link>
            <Link href="#developer" className="btn-outline">View Docs</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#06063f] border-y border-[rgba(2,127,255,0.15)] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "90M+", lbl: "Checks per month" },
              { val: "97%+", lbl: "Detection accuracy" },
              { val: "100ms", lbl: "API response time" },
              { val: "40+", lbl: "Risk signals" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="stat-value">{s.val}</div>
                <div className="stat-label">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Core Features</span>
          <h2 className="heading-lg mb-3">Everything You Need to Stop Fraud</h2>
          <p className="body-md mb-12 max-w-2xl">
            Six validation layers working together to give you the most accurate
            lead quality signal available.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-glow">
                <div className="w-2 h-8 bg-[#027fff] rounded-full mb-5" />
                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                <p className="body-md">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer API */}
      <section id="developer" className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-4">Developer API</span>
              <h2 className="heading-lg mb-6">Made for Happy Developers</h2>
              <p className="body-lg mb-4">
                A clean, RESTful JSON API with sub-100ms response times.
                SDKs available for Node.js, Python, PHP, and more.
              </p>
              <p className="body-md mb-8">
                Detailed documentation, Postman collections, and sandbox environment
                included. Integrate in minutes, not days.
              </p>
              <Link href="/contact" className="btn-primary">Get API Key</Link>
            </div>
            <div>
              <div className="bg-[#03032e] rounded-xl border border-[rgba(2,127,255,0.2)] p-6 font-mono text-sm">
                <div className="text-[#8b8fa8] mb-3">// npm install leadsheild</div>
                <div className="text-[#027fff]">import</div>
                <span className="text-white"> LeadShield </span>
                <div className="text-[#027fff]">from</div>
                <span className="text-green-400"> &apos;leadshield&apos;</span>
                <div className="mt-3">
                  <span className="text-[#8b8fa8]">const</span>
                  <span className="text-white"> ls </span>
                  <span className="text-[#027fff]">=</span>
                  <span className="text-white"> new LeadShield(</span>
                  <span className="text-green-400">&apos;API_KEY&apos;</span>
                  <span className="text-white">)</span>
                </div>
                <div className="mt-3">
                  <span className="text-[#8b8fa8]">const</span>
                  <span className="text-white"> result </span>
                  <span className="text-[#027fff]">=</span>
                  <span className="text-[#8b8fa8]"> await </span>
                  <span className="text-white">ls.validate(</span>
                  <span className="text-[#8b8fa8]">{"{"}</span>
                  <div className="pl-4">
                    <span className="text-white">phone: </span>
                    <span className="text-green-400">&apos;+447700900123&apos;</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-white">email: </span>
                    <span className="text-green-400">&apos;user@example.com&apos;</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-white">ip: </span>
                    <span className="text-green-400">&apos;203.0.113.42&apos;</span>
                  </div>
                  <span className="text-[#8b8fa8]">{"}"}</span>
                  <span className="text-white">)</span>
                </div>
                <div className="mt-3 text-[#027fff]">
                  {"// { score: 0.97, valid: true, signals: {...} }"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03032e] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Get Started</span>
          <h2 className="heading-lg mb-6">Start Validating in Minutes</h2>
          <p className="body-lg max-w-2xl mx-auto mb-10">
            Join companies already using Lead Shield to protect their acquisition
            budget and improve lead quality.
          </p>
          <Link href="/contact" className="btn-primary">Request API Access</Link>
        </div>
      </section>
    </>
  );
}
