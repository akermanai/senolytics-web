import Link from "next/link";

export const metadata = {
  title: "senolytics.ai — AI-Powered Data & Lead Intelligence",
  description: "AI-driven lead validation, fraud prevention and funnel optimisation for financial services, insurance and competitive industries.",
};

const stats = [
  { value: "97%+", label: "Fraud Detection Accuracy", desc: "Across phone, email and IP signals" },
  { value: "100ms", label: "API Response Time", desc: "Real-time validation at any scale" },
  { value: "40+", label: "Data Signals", desc: "Per lead validation request" },
  { value: "€0.1", label: "Per Complete Check", desc: "No subscription, no hidden fees" },
];

const products = [
  {
    tag: "Lead Validation",
    title: "LeadShield",
    desc: "Real-time phone, email and IP validation. Fraud scorecards with 40+ data points. Built for financial services and regulated industries.",
    href: "/lead-shield",
    accent: "amber",
  },
  {
    tag: "Conversion",
    title: "Funnel Optimisation",
    desc: "AI-driven funnel analysis that identifies drop-off points, personalises user journeys and increases conversion rates.",
    href: "/funnel-optimization",
    accent: "blue",
  },
  {
    tag: "Innovation",
    title: "AI Innovation Lab",
    desc: "Custom AI model development, NLP pipelines and machine learning solutions tailored to your industry and data.",
    href: "/ai-innovation-lab",
    accent: "blue",
  },
];

const whyAI = [
  {
    title: "Speed at Scale",
    desc: "Manual validation of leads, emails and phone numbers doesn't scale. AI processes millions of signals in real time — 100ms per check, 24/7, with no human bottleneck.",
  },
  {
    title: "Pattern Recognition",
    desc: "Fraud patterns evolve daily. Our models learn from dark-net leaks, carrier databases and fraud network activity — continuously updating without re-training cycles.",
  },
  {
    title: "Actionable Scores",
    desc: "Raw data is noise. We distil 40+ signals into a single, actionable score with a clear APPROVE / REVIEW / DECLINE recommendation your pipeline can act on immediately.",
  },
  {
    title: "Compliance Built In",
    desc: "All data processed in EU data centres. GDPR, FCA and ISO 27001 compliant by default. No data leaves the EU for EU and UK customers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-36 pb-32 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <span className="badge mb-6 inline-flex">AI-Powered Lead Intelligence</span>
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            Stop Fraud Before It<br />
            <span className="text-[#f59e0b]">Enters Your Funnel</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto mb-10">
            Real-time phone, email and IP validation for financial services, insurance and
            competitive lead-generation businesses. 97%+ fraud detection accuracy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/lead-shield" className="btn-primary">
              Explore LeadShield
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#07073a] border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">About Us</h2>
              <p className="body-md mb-4">
                Senolytics.ai is a data research and artificial intelligence company focused
                on building intelligence layers for businesses operating in high-risk and
                highly regulated industries.
              </p>
              <p className="body-md">
                We work with financial services firms, insurance companies and competitive
                lead generation businesses to protect their funnels and improve the quality
                of data they act on.
              </p>
            </div>
            <div className="card-dark">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">Our Mission</h2>
              <p className="body-md mb-4">
                Our mission is to democratise access to enterprise-grade fraud intelligence.
                Until recently, the kind of real-time, multi-signal fraud detection we offer
                was only available to the largest banks and data brokers.
              </p>
              <p className="body-md">
                We've rebuilt that capability as a clean API — so any business, regardless
                of size, can validate a lead or detect fraud in under 100 milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="bg-[#07073a] section border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="label block mb-3">Why It Works</span>
            <h2 className="heading-lg">Why AI — Not Rules</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyAI.map((item) => (
              <div key={item.title} className="card-glow">
                <div className="blue-line" />
                <h3 className="heading-md mb-3">{item.title}</h3>
                <p className="body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="label block mb-3">Our Products</span>
            <h2 className="heading-lg">Intelligence for Every Layer</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="card-glow group flex flex-col"
              >
                <span className={`inline-flex self-start text-xs font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-5 ${p.accent === "amber" ? "text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/25" : "text-[#027fff] bg-[#027fff]/10 border border-[#027fff]/25"}`}>
                  {p.tag}
                </span>
                <h3 className="heading-md mb-3">{p.title}</h3>
                <p className="body-md flex-1 mb-6">{p.desc}</p>
                <span className="text-[#f59e0b] text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-[#07073a] section border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Infrastructure</span>
          <h2 className="heading-lg mb-6">EU Data Centres · Renewable Energy</h2>
          <p className="body-lg mb-4">
            Our dedicated data centers are located in Falkenstein, Germany, operated 100% on
            renewable energy. Data of EU and UK customers never leaves the EU.
          </p>
          <p className="body-md">
            SOC 2 Type II · ISO 27001 · GDPR Compliant · FCA Ready
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03032e] section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-lg mb-4">Ready to Clean Your Funnel?</h2>
          <p className="body-lg mb-10">
            Talk to us about how LeadShield can reduce your fraud exposure and increase
            the quality of leads entering your pipeline.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
