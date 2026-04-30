import Image from "next/image";
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
    desc: "LeadSheild helps businesses validate phone numbers and emails before purchasing leads, increasing lead accuracy by 67%.",
  },
  {
    value: "97%+",
    label: "Fraud Prevention",
    desc: "The platform\u2019s AI models identify and prevent phone, email, and IP-related frauds, helping businesses avoid fraudulent activities.",
  },
  {
    value: "100ms",
    label: "Real-Time Validation",
    desc: "LeadShield real-time phone and email validation helps businesses confirm phone number ownership and avoid leads creating fake accounts.",
  },
];

const features = [
  {
    title: "Identity Match",
    desc: "Confirm phone number ownership in realtime. Protect against creating fake accounts during onboarding by matching user-provided data against authoritative mobile carrier data and other phone number-based data sources.",
  },
  {
    title: "Live Activity",
    desc: "Validate phone numbers and emails in your contact list are valid, accurate, and reachable. Get the live connectivity status, porting, and roaming information of a mobile phone number via a live HLR (Home Location Register) query.",
  },
  {
    title: "Disposable Phone Number Risk",
    desc: "Assess the fraud risk of a temporary or disposable phone number. Returns a risk score that a phone number is a \u201cburner phone number\u201d used to bypass SMS verification flows. Identify line type information such as non-fixed VoIP, mobile, landline, and more.",
  },
  {
    title: "SMS Pumping Risk",
    desc: "Assess the risk that a phone number is used for pumping SMS traffic instead of legitimate use. Harness the power of our network to detect non-legitimate account registration use, including SMS traffic pumping fraud (also known as Artificially Inflated Traffic Fraud).",
  },
];

export default function LeadShieldPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#03032e] pt-32 pb-20 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-6 inline-flex">Real-Time Lead Validation</span>
              <h1 className="heading-xl mb-6">LeadShield</h1>
              <p className="body-lg mb-10">
                The platform offers businesses operating in highly regulated markets a way to
                confidently validate phone numbers, emails, and IPs to increase lead
                prospecting accuracy, and protect against fraud.
              </p>
              <Link href="/contact" className="btn-primary">
                Request More Information
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#f59e0b]/10 rounded-3xl blur-3xl" />
                <Image
                  src="/images/banner-leadsheild-image.png"
                  alt="LeadShield neural network validation platform"
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
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="label block mb-4">Infrastructure</span>
          <h2 className="heading-md mb-6">SOC 2 Type II and ISO 27001 Data Centres</h2>
          <p className="body-md max-w-3xl mx-auto mb-10">
            Senolytics.ai dedicated data centers are located in Falkenstein, Germany and
            operated 100% by renewable energy. Data of our EU and UK customers never leave
            the EU. We maintain redundancy and security standards above the requirements
            for GDPR and FCA-regulated industries.
          </p>
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute inset-0 bg-[#f59e0b]/5 rounded-2xl blur-2xl" />
            <Image
              src="/images/data-centers.jpg"
              alt="SOC 2 Type II and ISO 27001 certified data centres in Falkenstein Germany"
              width={800}
              height={400}
              className="relative rounded-2xl w-full h-auto border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Core Features</span>
          <h2 className="heading-lg mb-3">LeadShield Features</h2>
          <p className="body-md mb-12">Here are the 4 main features of LeadShield</p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-glow">
                <div className="w-2 h-8 bg-[#f59e0b] rounded-full mb-5" />
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
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="label block mb-4">Fraud Intelligence</span>
              <h2 className="heading-lg mb-6">Senolytics Fraud Prevention Scorecards</h2>
              <p className="body-md mb-4">
                Companies operating in the financial niche use credit-score to assess if a
                person is eligible for a loan. We have created a similar concept to help
                data-driven businesses prevent frauds related to Mobile Numbers, Email
                addresses and IPs.
              </p>
              <p className="body-md mb-4">
                Our Fraud Prevention Score Cards are calculated in real-time based on a
                comprehensive set of data points. We develop three scorecards:{" "}
                <span className="text-[#f59e0b] font-semibold">MNFS</span> (Mobile Number
                Fraud Score),{" "}
                <span className="text-[#f59e0b] font-semibold">EMFS</span> (Email Fraud
                Score) and{" "}
                <span className="text-[#f59e0b] font-semibold">IPFS</span> (IP Fraud Score).
              </p>
              <p className="body-md mb-4">
                Our Fraud Scores represent the certainty a given Mobile phone, email or IP
                address was involved in recent fraud activity.
              </p>
              <p className="body-md">
                The Fraud Score is calculated based on over 30 data points, mobile reverse
                lookups, partnerships with the most prominent shopping platforms and many
                millions of fraud-related databases obtained from the dark net. You get a
                simple score between 0 and 100, representing the suspicious fraud level.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-dark p-3 flex flex-col items-center">
                  <p className="text-[#8b8fa8] text-xs uppercase tracking-widest mb-3">MNFS</p>
                  <Image
                    src="/images/mobile-fraud-scorejpg.png"
                    alt="MNFS Mobile Number Fraud Score gauge"
                    width={200}
                    height={160}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="card-dark p-3 flex flex-col items-center">
                  <p className="text-[#8b8fa8] text-xs uppercase tracking-widest mb-3">EMFS</p>
                  <Image
                    src="/images/email-fraud-score-1.png"
                    alt="EMFS Email Fraud Score gauge"
                    width={200}
                    height={160}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="card-dark p-4 flex flex-col items-center">
                <p className="text-[#8b8fa8] text-xs uppercase tracking-widest mb-3">Result</p>
                <Image
                  src="/images/result-image.png"
                  alt="LeadShield fraud detection result showing DECLINE recommendation"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-sm text-center space-y-1">
                  <p className="text-white">MNFS (Mobile Number Fraud Score): <span className="text-red-400 font-bold">85</span></p>
                  <p className="text-white">EMFS (Email Fraud Score): <span className="text-orange-400 font-bold">75</span></p>
                  <p className="text-white">IPFS (IP Fraud Score): <span className="text-red-400 font-bold">90</span></p>
                  <p className="text-[#8b8fa8]">Data recently leaked</p>
                  <p className="text-red-400 font-bold">Recommendation: DECLINE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Developer API ── */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-4">Developer API</span>
              <h2 className="heading-lg mb-6">Made for Happy Developers</h2>
              <p className="body-md mb-6">
                The LeadShield platform has an easy-to-integrate API. Upon creating a free
                account, you can access our API documentation with many JSON example
                requests, responses and complete code examples in PHP and Python.
              </p>
              <p className="body-md">
                Ready to save thousands upon thousands of Euros per month by validating
                your businesses leads in real-time?
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#f59e0b]/5 rounded-2xl blur-2xl" />
              <Image
                src="/images/image-code.jpg"
                alt="LeadShield API code example"
                width={600}
                height={400}
                className="relative rounded-2xl w-full h-auto border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="bg-[#03032e] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="label block mb-4">Pricing</span>
          <h2 className="heading-lg mb-4">
            Get Our Most Accurate Phone &amp; Email Validation for Less Than $0.1 Per Check
          </h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            Yes, you read it right. You can use our LeadShield L6 Enterprise edition for
            less than $0.1 per complete check. And the great thing about it is that full
            email, mobile phone, and IP validation takes less than 0.2 seconds.
          </p>
          <p className="text-white font-semibold mb-10">
            Get as many credits as you need · No monthly subscription · No hidden fees · No contract required
          </p>
          <Link href="/contact" className="btn-primary">
            Request More Information
          </Link>
        </div>
      </section>
    </>
  );
}
