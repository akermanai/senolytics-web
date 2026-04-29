import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Funnel Optimization — senolytics.ai" };

export default function FunnelOptimizationPage() {
  return (
    <>
      <section className="bg-[#03032e] pt-32 pb-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-black text-white mb-6">Funnel Optimization</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10">
            Our AI-powered funnel optimization product is currently in Beta. It leverages cutting-edge machine learning to identify conversion bottlenecks and increase acquisition efficiency across every stage of your funnel.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#027fff]/20 border border-[#027fff]/30 rounded-full px-6 py-2 text-[#027fff] font-semibold text-sm mb-10">
            <span className="w-2 h-2 bg-[#027fff] rounded-full animate-pulse" />
            Currently in Beta
          </div>
          <div className="block">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Request Beta Access</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f6fcff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#03032e] mb-6">Funnel Intelligence that Utilizes AI</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our funnel optimization product uses sophisticated AI models to analyze every stage of your customer acquisition funnel, identify weak points, and recommend data-driven improvements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Designed specifically for businesses in ultra-competitive, highly regulated markets, the platform integrates seamlessly with your existing stack.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/funnel-intelligence-utilizes.png" alt="Funnel Intelligence" width={400} height={400} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
