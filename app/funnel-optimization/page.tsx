import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Funnel Optimization — senolytics.ai",
  description:
    "AI-powered funnel intelligence. Identify conversion bottlenecks and increase acquisition efficiency across every stage of your funnel.",
};

const capabilities = [
  {
    title: "Bottleneck Detection",
    desc: "AI models scan every step of your acquisition funnel and surface the precise drop-off points costing you conversions.",
  },
  {
    title: "Cohort Analysis",
    desc: "Understand which user segments convert and why. Group users by behaviour, source, and signal to find your highest-value cohorts.",
  },
  {
    title: "Predictive Scoring",
    desc: "Score each lead on conversion probability in real time. Prioritise your team's effort on the leads most likely to convert.",
  },
  {
    title: "A/B Recommendation Engine",
    desc: "The system automatically surfaces test hypotheses ranked by expected impact, so you always know what to test next.",
  },
  {
    title: "Attribution Modelling",
    desc: "Move beyond last-click. Our multi-touch attribution models show the true contribution of every channel and touchpoint.",
  },
  {
    title: "Stack Integration",
    desc: "Connects to your existing CRM, ad platforms and analytics stack. No rip-and-replace required.",
  },
];

export default function FunnelOptimizationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="w-2 h-2 bg-[#027fff] rounded-full animate-pulse" />
            Currently in Beta
          </div>
          <h1 className="heading-xl mb-6">Funnel Optimization</h1>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            AI-powered funnel intelligence that identifies conversion bottlenecks and
            increases acquisition efficiency across every stage of your funnel — designed
            for ultra-competitive, regulated markets.
          </p>
          <Link href="/contact" className="btn-primary">
      