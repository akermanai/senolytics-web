import Link from "next/link";

export const metadata = {
  title: "AI Innovation Lab — senolytics.ai",
  description: "Train proprietary AI models on your own data. Rapid prototyping. Currently open for financial services and iGaming.",
};

const process = [
  { step: "01", title: "Discovery", desc: "Deep-dive into your business objectives, existing data assets, and competitive landscape. We identify where AI will move the needle fastest." },
  { step: "02", title: "Model Design", desc: "Our data scientists design a model architecture tailored to your specific domain, data structure, and conversion goals." },
  { step: "03", title: "Rapid Prototype", desc: "Within weeks, not months, you have a working model you can test against real traffic. We iterate fast with your feedback." },
  { step: "04", title: "Optimise & Deploy", desc: "Once validated, we optimise for performance and scale, then deploy to your infrastructure or ours — your choice." },
];

export default function AIInnovationLabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="w-2 h-2 bg-[#027fff] rounded-full" style={{animation:"pulse 2s infinite"}} />
            Closed Beta
          </div>
          <h1 className="heading-xl mb-6">AI Innovation Lab</h1>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            Train proprietary AI models on your own data. Our rapid prototyping
            methodology takes you from concept to live model in weeks.
          </p>
          <Link href="/contact" className="btn-primary">Apply for Access</Link>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-4">What is the AI Lab?</span>
              <h2 className="heading-lg mb-6">Your Own Proprietary AI Models</h2>
              <p className="body-md mb-4">
                The AI Innovation Lab is a bespoke engagement where Senolytics.ai data
                scientists work alongside your team to design, train and deploy custom
                AI models built on your own proprietary data.
              </p>
              <p className="body-md mb-4">
                Unlike off-the-shelf AI tools, models trained on your own data reflect
                your specific customer base, market dynamics and conversion patterns.
              </p>
              <p className="body-md">
                Currently operating in closed beta with a select group of partners in
                financial services and iGaming.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "6–12", lbl: "Weeks to first model" },
                { val: "100%", lbl: "Your data, your IP" },
                { val: "EU", lbl: "Data stays in EU" },
                { val: "24/7", lbl: "Model monitoring" },
              ].map((s) => (
                <div key={s.lbl} className="card-glow text-center py-6">
                  <div className="text-3xl font-black text-white mb-1">{s.val}</div>
                  <div className="stat-label">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">The Process</span>
          <h2 className="heading-lg mb-12">From Discovery to Deployment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((p) => (
              <div key={p.step} className="card-glow">
                <span className="text-5xl font-black text-[#f59e0b]/20 block mb-3">{p.step}</span>
                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06063f] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Apply for Closed Beta</span>
          <h2 className="heading-lg mb-6">Build Your Competitive Moat</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            A proprietary AI model trained on your data is one of the most durable
            competitive advantages you can build. Let&apos;s build it together.
          </p>
          <p className="text-white font-semibold mb-10">
            Currently accepting applications from financial services and iGaming companies.
          </p>
          <Link href="/contact" className="btn-primary">Apply Now</Link>
        </div>
      </section>
    </>
  );
}
