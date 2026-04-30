import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Innovation Lab — senolytics.ai",
  description: "Our AI Lab is the place where the rubber meets the road. Proprietary model training for financial services and iGaming.",
};

const examples = [
  { company: "Financial Service Company", desc: "Developing a fresh credit score model that projects with over 95% accuracy the likelihood of a customer repaying unsecured loans on time." },
  { company: "Market Intelligence Provider", desc: "Analyze the report consumers and build a matrix of additional values the company can provide based on their information and current market position." },
  { company: "Global Affiliate Platform", desc: "Analyze thousands of affiliate funnels and identify new clusters with earning potential and weak clusters that wear out the network profits." },
  { company: "International eCommerce Brand", desc: "Analyze and improve a complex omni-channel environment. We train models and managed to reduce acquisition costs by 27%." },
];

export default function AIInnovationLabPage() {
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
              <h1 className="heading-xl mb-6">AI Innovation Lab</h1>
              <p className="body-lg mb-10">
                Our AI Lab is the place where the rubber meets the road. The Lab is open
                for businesses that already use our Conversion Intelligence products and
                want to get to the next level of AI-based success.
              </p>
              <Link href="/contact" className="btn-primary">Request Beta Access</Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#f59e0b]/10 rounded-3xl blur-3xl" />
                <Image
                  src="/images/ai-projection-lab-image.png"
                  alt="AI Innovation Lab"
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

      {/* What is it */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">What is the AI Lab?</span>
          <h2 className="heading-lg mb-6">Senolytics.ai State-of-the-Art Innovation Lab</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="body-md mb-4">
                Senolytics.ai state-of-the-art innovation lab puts the power of the
                world's most substantial AI models to work for your business. Everybody
                has access to ChatGPT and can write very nice prompts. But more is needed
                to build a robust competitive edge for companies operating in a competitive
                environment.
              </p>
              <p className="body-md font-semibold text-white">The secret lay in the training phase!</p>
            </div>
            <div>
              <p className="body-md mb-4">
                Our experts develop proprietary training techniques that produce
                game-changing results for companies.
              </p>
              <p className="body-md mb-4">
                We customize our proprietary models to help your business find the answers
                to predefined challenges, validate assumptions and identify new profit
                opportunities.
              </p>
              <p className="body-md">
                We utilize a rapid prototyping and fail-fast methodology, so we can
                quickly see initial results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Use Cases</span>
          <h2 className="heading-lg mb-12">How Companies Are Using the AI Innovation Lab</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((e) => (
              <div key={e.company} className="card-glow">
                <div className="w-2 h-8 bg-[#f59e0b] rounded-full mb-5" />
                <h3 className="text-white font-bold text-lg mb-3">{e.company}</h3>
                <p className="body-md">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06063f] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Apply for Closed Beta</span>
          <h2 className="heading-lg mb-6">AI Projection Lab is in Closed Beta</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            Currently our AI lab is open for companies operating in the financial services
            niche only.
          </p>
          <p className="text-white font-semibold mb-10">
            Currently accepting applications from financial services and iGaming companies.
          </p>
          <Link href="/contact" className="btn-primary">Request More Information</Link>
        </div>
      </section>
    </>
  );
}
