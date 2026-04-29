import Link from "next/link";

export const metadata = { title: "Lead Shield — senolytics.ai" };

const stats = [
  { value: "+67%", label: "Increased Lead Accuracy", desc: "LeadShield helps businesses validate phone numbers and emails before purchasing leads, increasing lead accuracy by 67%." },
  { value: "97%+", label: "Fraud Prevention", desc: "The platform's AI models identify and prevent phone, email, and IP-related frauds, helping businesses avoid fraudulent activities." },
  { value: "100ms", label: "Real-Time Validation", desc: "LeadShield real-time phone and email validation helps businesses confirm phone number ownership and avoid leads creating fake accounts." },
];

const features = [
  { title: "Identity Match", desc: "Confirm phone number ownership in realtime. Protect against creating fake accounts during onboarding by matching user-provided data against authoritative mobile carrier data and other phone number-based data sources." },
  { title: "Live Activity", desc: "Validate phone numbers and emails in your contact list are valid, accurate, and reachable. Get the live connectivity status, porting, and roaming information of a mobile phone number via a live HLR (Home Location Register) query." },
  { title: "Disposable Phone Number Risk", desc: "Assess the fraud risk of a temporary or disposable phone number. Returns a risk score that a phone number is a \"burner phone number\" used to bypass SMS verification flows. Identify line type information such as non-fixed VoIP, mobile, landline, and more." },
  { title: "SMS Pumping Risk", desc: "Assess the risk that a phone number is used for pumping SMS traffic instead of legitimate use. Harness the power of our network to detect non-legitimate account registration use, including SMS traffic pumping fraud (also known as Artificially Inflated Traffic Fraud)." },
];

export default function LeadShieldPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#03032e] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-black text-white mb-6 tracking-tight">LEADSHEILD</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            The platform offers businesses operating in highly regulated markets a way to confidently validate phone numbers, emails, and IPs to increase lead prospecting accuracy, and protect against fraud.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">Request More Information</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#027fff] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map(s => (
              <div key={s.value} className="bg-white/10 rounded-2xl p-8">
                <div className="text-5xl font-black text-white mb-3">{s.value}</div>
                <div className="text-blue-100 font-semibold mb-3">{s.label}</div>
                <p className="text-blue-100/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#03032e] mb-4">SOC 2 Type II and ISO 27001 Data Centres</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Senolytics.ai dedicated data centers are located in Falkenstein, Germany and operated 100% by renewable energy. Data of our EU and UK customers never leave the EU. We maintain redundancy and security standards above the requirements for GDPR and FCA-regulated industries.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f6fcff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#03032e] mb-4">LeadShield Features</h2>
          <p className="text-gray-500 mb-12">Here are the 4 main features of LeadShield</p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map(f => (
              <div key={f.title} className="card border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#027fff]/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-[#027fff] rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-[#03032e] mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Scorecards */}
      <section className="bg-[#03032e] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Senolytics Fraud Prevention Scorecards</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Companies operating in the financial niche use credit-score to assess if a person is eligible for a loan. We have created a similar concept to help data-driven businesses prevent frauds related to Mobile Numbers, Email addresses and IPs.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Fraud Prevention Score Cards are calculated in real-time based on a comprehensive set of data points. We develop three scorecards: <span className="text-[#027fff] font-semibold">MNFS</span> (Mobile Number Fraud Score), <span className="text-[#027fff] font-semibold">EMFS</span> (Email Fraud Score) and <span className="text-[#027fff] font-semibold">IPFS</span> (IP Fraud Score).
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our Fraud Scores represent the certainty a given Mobile phone, email or IP address was involved in recent fraud activity. The Fraud Score is calculated based on over 30 data points, mobile reverse lookups, partnerships with the most prominent shopping platforms and many millions of fraud-related databases obtained from the dark net.
              </p>
            </div>
            <div className="bg-[#06063f] border border-white/10 rounded-2xl p-8 font-mono text-sm">
              <div className="text-gray-400 mb-4">// Sample response</div>
              <div className="space-y-2">
                <div><span className="text-gray-500">Result</span></div>
                <div className="pl-4"><span className="text-[#027fff]">MNFS</span> <span className="text-gray-400">(Mobile Number Fraud Score):</span> <span className="text-red-400 font-bold">85</span></div>
                <div className="pl-4"><span className="text-[#027fff]">EMFS</span> <span className="text-gray-400">(Email Fraud Score):</span> <span className="text-orange-400 font-bold">75</span></div>
                <div className="pl-4"><span className="text-[#027fff]">IPFS</span> <span className="text-gray-400">(IP Fraud Score):</span> <span className="text-red-400 font-bold">90</span></div>
                <div className="pl-4 text-yellow-400">Data recently leaked</div>
                <div className="mt-4 pl-4"><span className="text-gray-400">Recommendation:</span> <span className="text-red-400 font-bold">DECLINE</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-[#027fff] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Get Our Most Accurate Phone &amp; Email Validation for Less Than €0.1 Per Check.</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-4">
            You can use our LeadShield L6 Enterprise edition for less than €0.1 per complete check. Full email, mobile phone, and IP validation takes less than 0.2 seconds.
          </p>
          <p className="text-white font-semibold mb-8">No monthly subscription, no hidden fees and no contract required.</p>
          <Link href="/contact" className="bg-white text-[#027fff] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">Request More Information</Link>
        </div>
      </section>
    </>
  );
}
