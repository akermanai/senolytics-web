import Link from "next/link";

export const metadata = { title: "AI Innovation Lab — senolytics.ai" };

const useCases = [
  { company: "Financial Service Company", desc: "Developing a fresh credit score model that projects with over 95% accuracy the likelihood of a customer repaying unsecured loans on time." },
  { company: "Market Intelligence Provider", desc: "Analyze the report consumers and build a matrix of additional values the company can provide based on their information and current market position." },
  { company: "Global Affiliate Platform", desc: "Analyze thousands of affiliate funnels and identify new clusters with earning potential and weak clusters that wear out the network profits." },
  { company: "International eCommerce Brand", desc: "Analyze and improve a complex omni-channel environment. We train models and managed to reduce acquisition costs by 27%." },
];

export default function AIInnovationLabPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#03032e] pt-32 pb-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-black text-white mb-6">AI Innovation Lab</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10">
            Our AI Lab is the place where the rubber meets the road. The Lab is open for businesses that already use our Conversion Intelligence products and want to get to the next level of AI-based success.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">Request Beta Access</Link>
        </div>
      </section>

      {/* What is the Lab */}
      <section className="bg-[#f6fcff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#03032e] mb-6">AI Innovation Lab</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Senolytics.ai state-of-the-art innovation lab puts the power of the world&apos;s most substantial AI models to work for your business. Everybody has access to ChatGPT and can write very nice prompts. But more is needed to build a robust competitive edge for companies operating in a competitive environment.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">The secret lay in the training phase!</p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Our experts develop proprietary training techniques that produce game-changing results for companies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#03032e] mb-6">What do we do in the AI Lab?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#027fff] font-bold mt-0.5">→</span>
                  We customize our proprietary models to help your business find the answers to predefined challenges, validate assumptions and identify new profit opportunities.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#027fff] font-bold mt-0.5">→</span>
                  We utilize a rapid prototyping and fail-fast methodology, so we can quickly see initial results.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#027fff] font-bold mt-0.5">→</span>
                  We can also develop a neural network-based model that uses supervised learning and reinforcement learning techniques to establish progressive efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#03032e] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">How Companies Are Using AI Innovation Lab</h2>
          <p className="text-gray-400 mb-12">Here are some recent examples of how companies use our AI innovation lab to thrive:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map(u => (
              <div key={u.company} className="bg-[#06063f] border border-white/10 rounded-2xl p-8">
                <div className="text-[#027fff] font-semibold text-sm uppercase tracking-widest mb-3">{u.company}</div>
                <p className="text-gray-300 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="bg-[#027fff] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">AI Projection Lab is in Closed Beta</h2>
          <p className="text-blue-100 text-lg mb-8">
            Currently our AI lab is open for companies operating in the financial services niche only.
          </p>
          <Link href="/contact" className="bg-white text-[#027fff] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Request More Information</Link>
        </div>
      </section>
    </>
  );
}
