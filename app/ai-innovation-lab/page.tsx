import Link from "next/link";

export const metadata = {
  title: "AI Innovation Lab — senolytics.ai",
  description:
    "Train proprietary AI models on your data. Rapid prototyping, fail-fast methodology. Currently in closed beta for financial services.",
};

const useCases = [
  {
    company: "Financial Service Company",
    desc: "Developing a fresh credit score model that projects with over 95% accuracy the likelihood of a customer repaying unsecured loans on time.",
  },
  {
    company: "Market Intelligence Provider",
    desc: "Analyse consumer reports and build a matrix of additional values the company can provide based on their information and current market position.",
  },
  {
    company: "Global Affiliate Platform",
    desc: "Analyse thousands of affiliate funnels and identify new clusters with earning potential and weak clusters that erode network profits.",
  },
  {
    company: "International eCommerce Brand",
    desc: "Analyse and improve a complex omni-channel environment. Training models reduced acquisition costs by 27%.",
  },
];

export default function AIInnovationLabPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <span className="badge mb-6 inline-flex">Closed Beta · Financial Services</span>
          <h1 className="heading-xl mb-6">AI Innovation Lab</h1>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            Our AI Lab is where the rubber meets the road. Open for businesses that already
            use our Conversion Intelligence products and want to reach the next level of
            AI-driven competitive advantage.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Beta Access
          </Link>
        </div>
      </section>

      {/* ── What is the Lab ── */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="label block mb-4">The Lab</span>
              <h2 className="heading-lg mb-6">Beyond the Prompt</h2>
              <p className="body-md mb-4">
                Senolytics.ai puts the power of the world&apos;s most substantial AI models
                to work for your business. Everybody has access to ChatGPT and can write
                effective prompts. But prompts alone are not enough to build a robust
                competitive edge.
              </p>
              <p className="text-white font-semibold text-lg mb-3">
                The secret lies in the training phase.
              </p>
              <p className="body-md">
                Our experts develop proprietary training techniques and fine-tuning
                pipelines that produce game-changing results for companies in competitive
                markets.
              </p>
            </div>
            <div>
              <span className="label block mb-4">What We Do</span>
              <h2 className="heading-lg mb-6">Inside the Lab</h2>
              <ul className="space-y-5">
                {[
                  "Customise proprietary models to answer your specific business challenges, validate assumptions and identify new profit opportunities.",
                  "Rapid prototyping and fail-fast methodology — initial results visible within days, not months.",
                  "Neural network models using supervised learning and reinforcement learning techniques for progressive efficiency gains.",
                ].map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="text-[#027fff] font-bold text-lg mt-0.5 shrink-0">→</span>
                    <p className="body-md">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Case Studies</span>
          <h2 className="heading-lg mb-3">How Companies Use the AI Lab</h2>
          <p className="body-md mb-12">
            Recent examples of how companies use our AI Innovation Lab to thrive:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((u) => (
              <div key={u.company} className="card-glow">
                <div className="label mb-4">{u.company}</div>
                <p className="body-md">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="label block mb-4">Our Process</span>
            <h2 className="heading-lg">How the Lab Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap