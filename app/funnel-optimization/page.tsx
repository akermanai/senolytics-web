import Link from "next/link";

export const metadata = {
  title: "Funnel Optimisation — senolytics.ai",
  description: "AI-driven funnel analysis that identifies drop-off points, personalises user journeys and increases conversion rates.",
};

const capabilities = [
  { title: "Drop-Off Analysis", desc: "Identify exactly where users leave your funnel and why. Behaviour analytics combined with session data to pinpoint friction — not just where, but what causes it." },
  { title: "Lead Scoring at Entry", desc: "Score every inbound lead at the point of entry — before it touches your CRM. Prioritise high-intent, low-risk leads so your sales team focuses on what converts." },
  { title: "Dynamic Journey Personalisation", desc: "Adapt funnel paths in real time based on device, geography, lead source and risk profile. Show the right offer to the right person at the right step." },
  { title: "A/B Intelligence", desc: "Move beyond manual A/B testing. Our models identify which variants win for which audience segments — giving you multivariate insight without the sample size requirements." },
  { title: "CRM Integration", desc: "Connect directly to Salesforce, HubSpot or any CRM via API. Enriched lead data — including fraud score, quality tier and recommended treatment — appended automatically." },
  { title: "Conversion Reporting", desc: "Real-time dashboards showing validated lead volume, conversion rate by source, fraud block rate, and revenue impact. Metrics that connect to the P&L, not just analytics vanity." },
];

const results = [
  { value: "+34%", label: "Average Conversion Lift", desc: "Across client funnels in first 90 days" },
  { value: "−28%", label: "Cost Per Acquisition", desc: "By filtering low-quality leads at entry" },
  { value: "2×", label: "Sales Team Efficiency", desc: "More time on high-intent leads" },
];

export default function FunnelOptimisationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="badge mb-6 inline-flex">Conversion Intelligence</span>
          <h1 className="heading-xl mb-6 max-w-3xl">
            More Revenue from the{" "}
            <span className="text-[#f59e0b]">Leads You Already Have</span>
          </h1>
          <p className="body-lg max-w-2xl mb-10">
            AI-driven funnel analysis that identifies where you lose people, scores leads
            at entry, and personalises journeys to maximise conversion — without increasing
            your media spend.
          </p>
          <Link href="/contact" className="btn-primary">Request a Demo</Link>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#07073a] border-y border-white/[0.06] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {results.map((r) => (
              <div key={r.value} className="card-dark">
                <div className="stat-value mb-2">{r.value}</div>
                <div className="stat-label mb-2">{r.label}</div>
                <p className="stat-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">What We Do</span>
          <h2 className="heading-lg mb-3">Six Levers of Conversion</h2>
          <p className="body-md mb-12">Every lever is an API call or a dashboard — no new infrastructure required on your side.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="card-glow">
                <div className="blue-line" />
                <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
                <p className="body-md">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it fits */}
      <section className="bg-[#07073a] section border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Integration</span>
          <h2 className="heading-lg mb-6">Fits Inside Your Existing Stack</h2>
          <p className="body-lg mb-4">
            Funnel Optimisation connects via a single API endpoint. No page rebuilds, no
            tag manager gymnastics. Send us a lead event; we return an enriched object with
            score, tier and recommended treatment.
          </p>
          <p className="body-md mb-10">
            Native integrations available for Salesforce, HubSpot, ActiveCampaign, Zapier
            and Segment. Direct API for everything else.
          </p>
          <Link href="/contact" className="btn-primary">See Integration Docs</Link>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="bg-[#03032e] section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-dark border border-[#f59e0b]/20 text-center">
            <span className="inline-flex items-center gap-1.5 text-[#f59e0b] text-xs font-bold uppercase tracking-[0.15em] bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded-full px-3 py-1 mb-6">
              Currently in Beta
            </span>
            <h2 className="heading-lg mb-4">Join the Beta Programme</h2>
            <p className="body-lg mb-8">
              We are currently onboarding a limited number of beta clients for Funnel
              Optimisation. Beta participants receive 3 months at no cost in exchange for
              feedback and case study rights.
            </p>
            <Link href="/contact" className="btn-primary">Apply for Beta Access</Link>
          </div>
        </div>
      </section>
    </>
  );
}
