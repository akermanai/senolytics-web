import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Funnel Optimization — senolytics.ai",
  description: "Visualize traffic flow, identify cracks and stop losing customers. AI and NLP-powered funnel intelligence for regulated markets.",
};

export default function FunnelOptimizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-20 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 badge mb-6">
                <span className="w-2 h-2 bg-[#f59e0b] rounded-full" style={{animation:"pulse 2s infinite"}} />
                Closed Beta
              </div>
              <h1 className="heading-xl mb-6">AI Funnel Optimization</h1>
              <p className="body-lg mb-10">
                Visualize the traffic flow in your conversion funnels, identify cracks and
                stop losing customers. Our Funnel Optimization product uses the most
                advanced AI and NLP libraries to help you fix the essential things much faster.
              </p>
              <Link href="/contact" className="btn-primary">Request Beta Access</Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#f59e0b]/10 rounded-3xl blur-3xl" />
                <Image
                  src="/images/ai-funnel-optimization-image.png"
                  alt="AI Funnel Optimization platform"
                  width={500}
                  height={420}
                  className="relative rounded-2xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
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
                Stop losing valuable conversions due to cracks in your conversion funnels.
                Google Analytics, tag manager and GSC produce many events related to user
                activity on your website. But with so many details, businesses fail to
                detect and fix the main cracks in their funnels and continue to lose
                expensive conversions.
              </p>
              <p className="body-md mb-4">
                Senolytics.ai Funnel Intelligence utilizes advanced AI libraries explicitly
                trained to detect cracks in any conversion funnel.
              </p>
              <p className="body-md">
                Using NLP, the results of Funnel Intelligence analysis are presented in
                human easy-to-read language that allows businesses to get essential things
                fixed much faster.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f59e0b]/10 blur-3xl rounded-full scale-75" />
                <Image
                  src="/images/funnel-intelligence-utilizes.png"
                  alt="Funnel Intelligence AI analysis"
                  width={420}
                  height={420}
                  className="relative rounded-2xl border border-[rgba(245,158,11,0.15)] w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="bg-[#03032e] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Beta Programme</span>
          <h2 className="heading-lg mb-4">AI Funnel Optimization is in Closed Beta</h2>
          <p className="body-lg max-w-2xl mx-auto mb-10">
            Ready to see what happens in your conversion funnels? Apply to join our beta.
          </p>
          <Link href="/contact" className="btn-primary">Request More Information</Link>
        </div>
      </section>
    </>
  );
}
