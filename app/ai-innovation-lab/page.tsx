import Link from "next/link";

export const metadata = {
  title: "AI Innovation Lab — senolytics.ai",
  description: "Custom AI model development, NLP pipelines and machine learning solutions for financial services and regulated industries.",
};

const capabilities = [
  { title: "Custom Model Development", desc: "We build supervised and unsupervised ML models trained on your proprietary data. Classification, regression, anomaly detection — scoped to your problem, not a generic template." },
  { title: "NLP Pipelines", desc: "Named entity extraction, document classification, sentiment analysis and summarisation pipelines for high-volume document processing in regulated environments." },
  { title: "Fraud & Risk Scoring", desc: "Custom fraud models built on your historical data, combined with our proprietary signal network. Goes beyond our off-the-shelf MNFS/EMFS/IPFS scorecards." },
  { title: "Data Enrichment", desc: "Automated enrichment pipelines that append validated identity, behavioural and firmographic data to your existing records at scale." },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We audit your current data stack, identify the highest-value AI use cases, and scope a measurable outcome." },
  { num: "02", title: "Prototype", desc: "A working model trained on a representative sample of your data. We agree accuracy benchmarks before proceeding." },
  { num: "03", title: "Production", desc: "Model deployed to your infrastructure or ours, with monitoring, alerting and scheduled retraining." },
  { num: "04", title: "Iterate", desc: "Monthly model review. Drift detection, performance reporting and continuous improvement without re-scoping." },
];

const metrics = [
  { value: "4–8 wks", label: "Prototype to Production" },
  { value: "30+", label: "Data Signals per Model" },
  { value: "99.9%", label: "API Uptime SLA" },
  { value: "EU Only", label: "Data Residency" },
];

export default function AIInnovationLabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="badge mb-6 inline-flex">Custom AI Solutions</span>
          <h1 className="heading-xl mb-6 max-w-3xl">
            AI Built for Your{" "}
            <span className="text-[#f59e0b]">Business Problem</span>
          </h1>
          <p className="body-lg max-w-2xl mb-10">
            Off-the-shelf AI models are trained on generic data. We build custom machine
            learning pipelines trained on your data, for your industry, with accuracy
            benchmarks you agree before we start.
          </p>
          <Link href="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#07073a] border-y border-white/[0.06] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.value}>
                <div className="stat-value">{m.value}</div>
                <div className="stat-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">What We Build</span>
          <h2 className="heading-lg mb-3">Core Capabilities</h2>
          <p className="body-md mb-12">Every engagement produces a production-ready system, not a slide deck.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="card-glow">
                <div className="blue-line" />
                <h3 className="heading-md mb-3">{c.title}</h3>
                <p className="body-md">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#07073a] section border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="label block mb-3">How It Works</span>
            <h2 className="heading-lg">From Discovery to Production</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="card-dark">
                <div className="text-4xl font-black text-[#f59e0b] mb-4">{s.num}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="body-md">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#03032e] section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="label block mb-4">Get Started</span>
          <h2 className="heading-lg mb-4">Tell Us Your Data Problem</h2>
          <p className="body-lg mb-10">
            We scope every engagement with a fixed-price discovery session. No commitment
            beyond that until you see a working prototype.
          </p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  );
}
