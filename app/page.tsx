import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Senolytics.ai — Conversion Intelligence Powered by AI",
  description: "AI-based products to help businesses in ultra-competitive markets boost conversion rates, reduce acquisition costs and prevent fraud.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge mb-6 inline-flex">Conversion Intelligence · AI-Powered</span>
              <h1 className="heading-xl mb-6">
                Turn Data Into<br />
                <span className="text-[#f59e0b]">Conversion Power</span>
              </h1>
              <p className="body-lg mb-10">
                We build innovative AI-based products to help businesses in
                ultra-competitive markets boost{" "}
                <span className="text-white font-semibold">conversion rates</span>,
                reduce{" "}
                <span className="text-white font-semibold">customer acquisition costs</span>{" "}
                and prevent <span className="text-white font-semibold">fraud</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/lead-shield" className="btn-primary">Explore Products</Link>
                <Link href="/contact" className="btn-outline">Request Information</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f59e0b]/10 blur-3xl rounded-full scale-75" />
                <Image
                  src="/images/conversion-intelligence.png"
                  alt="Conversion Intelligence AI"
                  width={480}
                  height={480}
                  className="relative rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#06063f] border-y border-[rgba(2,127,255,0.15)] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "90M+", lbl: "Phone checks / month" },
              { val: "+67%", lbl: "Lead accuracy gain" },
              { val: "97%+", lbl: "Fraud detection rate" },
              { val: "100ms", lbl: "Real-time validation" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="stat-value">{s.val}</div>
                <div className="stat-label">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glow">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">About Us</h2>
              <p className="body-md mb-4">
                Senolytics.ai is a data research and development company with a strong
                business focus. All our products are designed to establish a measurable
                business optimisation fast.
              </p>
              <p className="body-md">
                We train the world&apos;s most powerful AI models, including OpenAI
                (ChatGPT), to help your business profit more, reduce the cost of
                acquisition, gain a competitive edge and prevent fraud.
              </p>
            </div>
            <div className="card-glow">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">Built for Regulated Markets</h2>
              <p className="body-md">
                Our team has vast experience with regulatory guidelines including GDPR,
                ISO 27001 and Financial Conduct Authority (FCA) standards. We develop
                novel products, models and intellectual property specifically for
                businesses operating in ultra-competitive, regulated niches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-3">The AI Opportunity</span>
              <h2 className="heading-lg mb-6">Why AI — and Why Now</h2>
              <p className="body-lg mb-6">
                New algorithms and AI models demonstrate unprecedented power and skills.
                Whether you embrace the AI shift or not is the wrong question — it is
                happening, and it is happening fast.
              </p>
              <p className="text-white text-xl font-semibold">Is your business ready?</p>
            </div>
            <div>
              <span className="label block mb-3">Our Approach</span>
              <h2 className="heading-lg mb-6">How We Help</h2>
              <p className="body-lg">
                Our experienced data engineers and AI products help businesses leverage
                existing know-how to boost profitability, reduce the cost of acquisition
                and obtain a winning competitive position — especially in highly regulated niches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="label block mb-3">Our Products</span>
            <h2 className="heading-lg mb-4">Three Products, One Mission</h2>
            <p className="body-lg max-w-2xl">
              Real-time lead validation, funnel optimisation, and a proprietary
              model-training lab for enterprise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Lead Shield", tag: "Live", desc: "Validate mobile phones, emails and IPs in real time. Protect your business from lead fraud with 97%+ accuracy.", href: "/lead-shield" },
              { title: "Funnel Optimization", tag: "Beta", desc: "AI-powered funnel intelligence that identifies drop-off points and increases conversion across every acquisition step.", href: "/funnel-optimization" },
              { title: "AI Innovation Lab", tag: "Closed Beta", desc: "Train proprietary models on your own data. Rapid prototyping methodology. Currently open for financial services.", href: "/ai-innovation-lab" },
            ].map((p) => (
              <div key={p.title} className="card-glow flex flex-col">
                <div className="mb-4"><span className="badge">{p.tag}</span></div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="body-md flex-1 mb-6">{p.desc}</p>
                <Link href={p.href} className="text-[#f59e0b] font-semibold text-sm hover:text-[#fbbf24] transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Network */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-3">Senolytics AI Models</span>
              <h2 className="heading-lg mb-6">Unprecedented Power</h2>
              <p className="body-lg mb-6">
                We aim to become the best AI company for{" "}
                <span className="text-[#f59e0b] font-semibold">Conversion Intelligence</span>{" "}
                on earth. Our primary focus is helping companies in ultra-competitive and
                highly regulated markets improve conversion, reduce CAC and prevent fraud.
              </p>
              <p className="body-md">
                We deploy robust neural networks and technologies specifically trained to
                achieve concrete goals and show measurable results fast.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f59e0b]/10 blur-3xl rounded-full scale-75" />
                <Image
                  src="/images/senolytics-neural-netwrok.png"
                  alt="AI Neural Network"
                  width={460}
                  height={460}
                  className="relative rounded-2xl border border-[rgba(2,127,255,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f59e0b]/05 blur-3xl rounded-full scale-75" />
                <Image
                  src="/images/data-centers.jpg"
                  alt="Data Centers"
                  width={460}
                  height={340}
                  className="relative rounded-2xl border border-[rgba(2,127,255,0.15)]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="label block mb-3">Infrastructure</span>
              <h2 className="heading-lg mb-6">Enterprise-Grade Security</h2>
              <p className="body-lg mb-4">
                Our data is hosted in SOC 2 Type II and ISO 27001 certified data centres
                in Falkenstein, Germany, operated 100% by renewable energy.
              </p>
              <p className="body-md">
                Data of EU and UK customers does not leave the EU. We comply with GDPR,
                FCA and ISO 27001 standards to give you enterprise-grade confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06063f] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Get Started</span>
          <h2 className="heading-lg mb-6">Ready to Boost Conversion?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-10">
            Our team is ready to show you how Senolytics.ai products can transform
            your acquisition funnel. Request a demo today.
          </p>
          <Link href="/contact" className="btn-primary">Request a Demo</Link>
        </div>
      </section>
    </>
  );
}
