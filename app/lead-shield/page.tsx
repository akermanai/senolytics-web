import Link from "next/link";

export const metadata = {
  title: "Lead Shield — senolytics.ai",
  description:
    "Real-time phone, email and IP validation. 97%+ fraud detection accuracy for financial services and competitive niches.",
};

const stats = [
  {
    value: "+67%",
    label: "Increased Lead Accuracy",
    desc: "LeadShield helps businesses validate phone numbers and emails before purchasing leads, increasing lead accuracy by 67%.",
  },
  {
    value: "97%+",
    label: "Fraud Prevention",
    desc: "Our AI models identify and prevent phone, email, and IP-related frauds, protecting businesses from fraudulent activity.",
  },
  {
    value: "100ms",
    label: "Real-Time Validation",
    desc: "Real-time phone and email validation confirms phone number ownership and catches fake account creation attempts instantly.",
  },
];

const features = [
  {
    title: "Identity Match",
    desc: "Confirm phone number ownership in real time. Protect against fake account creation during onboarding by matching user-provided data against authoritative mobile carrier data and other phone number-based sources.",
  },
  {
    title: "Live Activity",
    desc: "Validate phone numbers and emails in your contact list are valid, accurate, and reachable. Get live connectivity status, porting, and roaming information via a live HLR (Home Location Register) query.",
  },
  {
    title: "Disposable Phone Number Risk",
    desc: 'Assess the fraud risk of a temporary or disposable phone number. Returns a risk score for "burner" phones used to bypass SMS verification. Identify line type: non-fixed VoIP, mobile, landline, and more.',
  },
  {
    title: "SMS Pumping Risk",
    desc: "Assess the risk that a phone number is used for pumping SMS traffic instead of legitimate use. Detect non-legitimate account registrations, including Artificially Inflated Traffic Fraud (AITF).",
  },
];

export default function LeadShieldPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <span className="badge mb-6 inline-flex">Real-Time Lead Validation</span>
          <h1 className="heading-xl mb-6">LeadShield</h1>
          <p className="body-lg max-w-3xl mx-auto mb-10">
            The platform offers businesses operating in highly regulated markets a way to
            confidently validate phone numbers, emails, and IPs — increasing lead
            prospecting accuracy and protecting against fraud.
          </p>
          <Link href="/contact" className="btn-primary">
            Request More Information
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#06063f] border-y border-[rgba(2,127,255,0.15)] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="card-dark text-center">
                <div className="stat-value mb-2">{s.value}</div>
                <div className="stat-label mb-3">{s.label}</div>
                <p className="stat-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data Centers ── */}
      <section className="bg-[#03032e] section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Infrastructure</span>
          <h2 className="heading-md mb-6">SOC 2 Type II and ISO 27001 Data Centres</h2>
          <p className="body-md">
            Senolytics.ai dedicated data centers are located in Falkenstein, Germany and
            operated 100% by renewable energy. Data of our EU and UK customers never leave
            the EU. We maintain redundancy and security standards above the requirements
            for GDPR and FCA-regulated industries.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Core Features</span>
          <h2 className="heading-lg mb-3">LeadShield Features</h2>
          <p className="body-md mb-12">Four layers of protection working in real time.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-glow">
                <div className="w-2 h-8 bg-[#027fff] rounded-full mb-5" />
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="body-md">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fraud Scorecards ── */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-4">Fraud Intelligence</span>
              <h2 className="heading-lg mb-6">Fraud Prevention Scorecards</h2>
              <p className="body-md mb-4">
                Companies in financial services use credit scores to assess loan eligibility.
                We created a similar concept to help data-driven businesses prevent fraud
                related to mobile numbers, email addresses and IPs.
              </p>
              <p className="body-md mb-4">
                Our Fraud Prevention Scorecards are calculated in real time across a
                comprehensive set of data points. We develop three scorecards:{" "}
                <span className="text-[#027fff] font-semibold">MNFS</span> (Mobile Number
                Fraud Score),{" "}
                <span className="text-[#027fff] font-semibold">EMFS</span> (Email Fraud
                Score) and{" "}
                <span className="text-[#027fff] font-semibold">IPFS</span> (IP Fraud Score).
              </p>
              <p className="body-md">
                Scores are calculated based on over 30 data points, mobile reverse lookups,
                partnerships with major shopping platforms, and millions of fraud-related
                records from dark-net databases.
              </p>
            </div>
            <div className="card-dark font-mono text-sm">
              <div className="text-[#8b8fa8] mb-4 text-xs uppercase tracking-widest">
                // Sample API response
              </div>
              <div className="space-y-2">
                <div className="text-[#027fff]">{"{"}</div>
                <div className="pl-4">
                  <span className="text-[#8b8fa8]">&quot;phone&quot;</span>
                  <span className="text-white">: &quot;+44-XXXXXXX&quot;,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#8b8fa8]">&quot;MNFS&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-red-400 font-bold">85</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#8b8fa8]">&quot;EMFS&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-400 font-bold">72</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#8b8fa8]">&quot;IPFS&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-red-400 font-bold">90</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#8b8fa8]">&quot;dark_net_leak&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-400">true</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#8b8fa8]">&quot;recommendation&quot;</span>
                  <span className="text-white">: </span>
        