import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#03032e] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#027fff] text-sm font-semibold uppercase tracking-widest mb-4">Conversion Intelligence Powered by AI</p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                CONVERSION INTELLIGENCE<br />
                <span className="text-[#027fff]">POWERED BY AI</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We build innovative Artificial Intelligence-based products to help businesses operating in ultra-competitive markets boost <strong className="text-white">conversion rates</strong>, reduce <strong className="text-white">customer acquisition costs</strong> and prevent <strong className="text-white">fraud</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/lead-shield" className="btn-primary">Explore Products</Link>
                <Link href="/contact" className="btn-outline">Request Information</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/images/conversion-intelligence.png" alt="Conversion Intelligence" width={460} height={460} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#f6fcff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="card">
              <h2 className="text-3xl font-bold text-[#03032e] mb-4">ABOUT US</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Senolytics.ai is a data research and development company with a strong business focus. All our products are designed to establish a measurable business optimization fast.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We train the world&apos;s most powerful AI models, including OpenAI (ChatGPT), to help your business profit more, reduce the cost of acquisition, gain a competitive edge and prevent fraud.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#03032e] mb-4">READY FOR GDPR, FCA &amp; ISO27001</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team has a vast experience with regulative guidelines like GDPR, ISO27001 and Financial Conduct Authorities (FCA). We develop novel products, models and intellectual property specifically for businesses operating in ultra-competitive markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="bg-[#027fff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">WHY AI</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                New algorithms and AI models demonstrate unprecedented power and skills. If you like the AI rollercoaster ride or not is the wrong question. It is happening, and it is happening fast.
              </p>
              <p className="text-white text-xl font-semibold">Is your business ready?</p>
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-6">HOW WE HELP</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Our experienced data engineers and AI products help businesses leverage existing know-how to boost profitability, reduce the cost of acquisition and obtain a winning competitive position, especially in highly regulated niches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-[#f6fcff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#03032e] mb-4">OUR PRODUCTS</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Senolytics.ai develops three main products. Our AI-based LeadShield designed to validate mobile phones, emails and IPs in real time. Our funnel optimization product is now in Beta, and our AI innovation lab is training models for selected customers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lead Shield", desc: "Validate mobile phones, emails and IPs in real time. Protect your business from lead fraud.", href: "/lead-shield", icon: "🛡️" },
              { title: "Funnel Optimization", desc: "AI-powered funnel intelligence that increases conversion rates across your entire acquisition funnel.", href: "/funnel-optimization", icon: "📈" },
              { title: "AI Innovation Lab", desc: "Train proprietary models for your business. Closed beta for financial services companies.", href: "/ai-innovation-lab", icon: "🧪" },
            ].map(p => (
              <div key={p.title} className="card border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#03032e] mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                <Link href={p.href} className="text-[#027fff] font-semibold text-sm hover:underline">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Network / AI Models */}
      <section className="bg-[#03032e] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#027fff] text-sm font-semibold uppercase tracking-widest mb-4">Senolytics.AI Models</p>
              <h2 className="text-4xl font-black text-white mb-6">UNPRECEDENTED POWER</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We aim to become the best AI company for <span className="text-[#027fff] font-semibold">Conversion Intelligence</span> on earth. Our primary focus is helping companies operating in ultra-competitive and highly regulated markets improve conversion, reduce customer acquisition costs and prevent fraud.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We deploy robust neural networks and technologies specifically trained to achieve concrete goals that show measurable results fast.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/senolytics-neural-netwrok.png" alt="AI Neural Network" width={460} height={460} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/images/data-centers.jpg" alt="Data Centers" width={540} height={360} className="rounded-2xl w-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#03032e] mb-6">SOC 2 Type II and ISO 27001 Data Centres</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Senolytics.ai dedicated data centers are located in Falkenstein, Germany and operated 100% by renewable energy. Data of our EU and UK customers never leave the EU.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We maintain redundancy and security standards above the requirements for GDPR and FCA-regulated industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LeadShield CTA */}
      <section className="bg-[#027fff] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">FLAGSHIP AI PRODUCT</h2>
          <p className="text-blue-100 text-xl mb-2">LeadShield</p>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Protect your business from lead fraud and increase lead prospecting accuracy. With over 90M phones evaluated per month, LeadShield identifies and prevents frauds for financial services and other competitive niches.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lead-shield" className="bg-white text-[#027fff] font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">Learn how LeadShield works</Link>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Talk to the Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
