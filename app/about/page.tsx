import Link from "next/link";

export const metadata = {
  title: "About — senolytics.ai",
  description: "Senolytics.ai is a data research and AI company focused on fraud prevention and lead intelligence for regulated industries.",
};

const team = [
  {
    name: "Valencio Akerman",
    role: "Co-Founder & CEO",
    bio: "Strategy, partnerships and product direction. Background in fintech and lead generation.",
  },
  {
    name: "Ofer Akerman",
    role: "Co-Founder & CTO",
    bio: "Machine learning, API infrastructure and data engineering. Built fraud detection systems for major financial institutions.",
  },
];

const values = [
  { title: "Accuracy Above All", desc: "A wrong signal is worse than no signal. We only ship a data point when we can back it with evidence." },
  { title: "Built for Compliance", desc: "GDPR, FCA, ISO 27001. Not bolt-ons — these are design constraints we build around from day one." },
  { title: "Developer First", desc: "Clean APIs, honest documentation, no magic black boxes. If you can't understand what the score means, it's useless." },
  { title: "Privacy by Design", desc: "We process only what is necessary. EU data stays in the EU. No data sold, no profiling for advertising." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-24 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="label block mb-4">Who We Are</span>
          <h1 className="heading-xl mb-6 max-w-3xl">
            The Intelligence Layer for{" "}
            <span className="text-[#f59e0b]">Regulated Industries</span>
          </h1>
          <p className="body-lg max-w-2xl">
            Senolytics.ai is a data research and artificial intelligence company.
            We build fraud intelligence and lead validation tools for businesses
            that cannot afford to act on bad data.
          </p>
        </div>
      </section>

      {/* Mission + Focus */}
      <section className="bg-[#07073a] section border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">Our Mission</h2>
              <p className="body-md mb-4">
                Enterprise-grade fraud intelligence was, until recently, only available to
                the largest banks and data brokers. We rebuilt that capability as a clean
                API so any business — regardless of size — can validate a lead or detect
                fraud in under 100 milliseconds.
              </p>
              <p className="body-md">
                We measure success in two ways: the fraud that never entered a customer's
                funnel, and the legitimate leads that didn't get blocked by a false positive.
              </p>
            </div>
            <div className="card-dark">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">Our Focus</h2>
              <p className="body-md mb-4">
                We focus on industries where data quality has a direct financial consequence:
                financial services, insurance, fintech, and high-volume lead generation.
              </p>
              <p className="body-md">
                Our products are used by businesses that buy, sell, or act on contact data
                at scale — and where a single fraudulent phone number or disposable email
                can cost hundreds of pounds in wasted media spend or compliance exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="label block mb-3">The Team</span>
            <h2 className="heading-lg">People Behind the Platform</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card-glow">
                <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 border-2 border-[#f59e0b]/30 flex items-center justify-center mb-5 text-2xl font-black text-[#f59e0b]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#f59e0b] text-sm font-semibold mb-4">{member.role}</p>
                <p className="body-md">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#07073a] section border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="label block mb-3">Our Principles</span>
            <h2 className="heading-lg">How We Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-dark flex gap-5">
                <div className="w-1.5 bg-[#f59e0b] rounded-full shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                  <p className="body-md">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="bg-[#03032e] section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">The Company</span>
          <h2 className="heading-md mb-6">Bontida Limited</h2>
          <p className="body-md mb-6">
            Senolytics.ai is a trading name of Bontida Limited, a company registered in
            Cyprus (Registration Number HE431123). Our registered office is at Zinonos
            Kitieos 9, Egkomi 2406, Nicosia, Cyprus.
          </p>
          <p className="body-md mb-10">
            Data of EU and UK customers is processed exclusively in our ISO 27001 and
            SOC 2 Type II certified data centres in Falkenstein, Germany, operated on
            100% renewable energy.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
