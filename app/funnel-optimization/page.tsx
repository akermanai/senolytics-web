import Link from "next/link";

export const metadata = {
  title: "Funnel Optimization — senolytics.ai",
  description: "AI-powered funnel intelligence. Identify conversion bottlenecks and increase acquisition efficiency across every stage of your funnel.",
};

const capabilities = [
  { title: "Bottleneck Detection", desc: "AI models scan every step of your acquisition funnel and surface the precise drop-off points costing you conversions." },
  { title: "Cohort Analysis", desc: "Understand which user segments convert and why. Group users by behaviour, source, and signal to find your highest-value cohorts." },
  { title: "Predictive Scoring", desc: "Score each lead on conversion probability in real time. Prioritise your team on the leads most likely to convert." },
  { title: "A/B Recommendation Engine", desc: "The system automatically surfaces test hypotheses ranked by expected impact, so you always know what to test next." },
  { title: "Attribution Modelling", desc: "Move beyond last-click. Our multi-touch attribution models show the true contribution of every channel and touchpoint." },
  { title: "Stack Integration", desc: "Connects to your existing CRM, ad platforms and analytics stack. No rip-and-replace required." },
];

export default function FunnelOptimizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="w-2 h-2 bg-[#027fff] rounded-full" style={{animation:"pulse 2s infinite"}} />
            Currently in Beta
          </div>
          <h1 className="heading-xl mb-6">Funnel Optimization</h1>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            AI-powered funnel intelligence that identifies conversion bottlenecks and
            increases acquisition efficiency across every stage of your funnel.
          </p>
          <Link href="/contact" className="btn-primary">Request Beta Access</Link>
        </div>
      </section>

      {/* Platform */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-4">The Platform</span>
              <h2 className="heading-lg mb-6">Funnel Intelligence That Uses AI</h2>
              <p className="body-md mb-4">
                Our funnel optimisation product uses sophisticated AI models to analyse
                every stage of your customer acquisition funnel, identify weak points, and
                recommend data-driven improvements.
              </p>
              <p className="body-md mb-4">
                Designed specifically for businesses in ultra-competitive, highly regulated
                markets, the platform integrates seamlessly with your existing stack.
              </p>
              <p className="body-md">
                Unlike generic analytics tools, our models are trained on conversion data
                from financial services, iGaming, insurance and other regulated niches —
                so the intelligence is domain-specific from day one.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#027fff]/15 blur-3xl rounded-full scale-75" />
                <img
                  src="/images/funnel-intelligence-utilizes.png"
                  alt="Funnel Intelligence AI"
                  width={420}
                  className="relative rounded-2xl border border-[rgba(2,127,255,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Capabilities</span>
          <h2 className="heading-lg mb-3">What Funnel Optimization Does</h2>
          <p className="body-md mb-12 max-w-2xl">
            Six core capabilities, all powered by AI models trained on conversion data
            from competitive niches.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="card-glow">
                <div className="w-2 h-8 bg-[#027fff] rounded-full mb-5" />
                <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
                <p className="body-md">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="bg-[#06063f] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Beta Programme</span>
          <h2 className="heading-lg mb-4">Join the Beta</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            We are currently onboarding a limited number of beta partners. Beta access
            is free in exchange for feedback and collaboration on model improvement.
          </p>
          <p className="text-white font-semibold mb-10">
            Priority given to financial services, insurance and iGaming companies.
          </p>
          <Link href="/contact" className="btn-primary">Request Beta Access</Link>
        </div>
      </section>
    </>
  );
}
