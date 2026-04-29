import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About — senolytics.ai" };

const team = [
  { name: "George Antoniades", role: "BUSINESS HERO", bio: "A passionate leader with over 25 years of experience in international business management. George is a business regulatory magician. He develops and maintains business relationships with banks and international investors.", img: "george.jpg" },
  { name: "Sixtine Vervial", role: "DATA HERO", bio: "As a Data Scientist, I worked along with JustWatch GmbH (Germany), Duproprio (Canada), Smunch (Germany), TheStoreFront (France), Zalando (Germany), Optimothai (Thailand), Snowplow Analytics (United Kingdom) covering tasks along the data value pipeline: infrastructure design, data engineering, and stack review and ETL development.", img: "Sixtine-Vervial.jpg" },
  { name: "Polina Nesterenko", role: "LEGAL HERO", bio: "PhD in Law, LL.M Student in Mediation, AML Compliance Officer. Polina brings valuable hands-on experience with cross-border transactions, shareholder disputes, and mergers & acquisitions. She also consults about Anti-Money Laundering, fraud prevention and compliance framework.", img: "polina.jpg" },
  { name: "Martin Olney", role: "STRATEGY HERO", bio: "Martin is a business strategist. He understands, at a deep level, the nuances of disruptive technology adoption, startups, sustainable competitive advantage, differentiators and niche marketing.", img: "Martin.jpg" },
  { name: "Loredana Mir", role: "ACCOUNTING HERO", bio: "Loredana Mir, ACCA, MSc is a senior financial analyst. Loredana is an ambitious, resilient, results-oriented financial analyst. She works with the world's most significant accounting firms to proactively challenge the status quo, create new ideas and work towards implementing them.", img: "Loredana.jpg" },
  { name: "Avner Nissani", role: "DATA HERO", bio: "Specialties: Data Modeling, Developing and Implementing Data Warehouses, Analytics, Data Mining, Machine Learning, Big Data, Data Architecture, SQL Server, AWS, Kafka, Data Streaming.", img: "avner_nissani.jpg" },
  { name: "David Hennessy", role: "DEVELOPMENT HERO", bio: "Davie is a full-stack developer with over 15 years of experience helping companies and agencies build complex web apps and web applications. He is particularly passionate about leveraging Artificial Intelligence to drive traffic growth.", img: "davie-hennessy.jpg" },
  { name: "Rudi Rudiak", role: "R & SQL HERO", bio: "Rudi is a senior data analyst with vast experience developing R scripts, refining ETLs, automating data processing, and focusing on data cleaning and structuring with R & SQL and building executive dashboards.", img: "Rudi_edit.png" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#03032e] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-black text-white mb-6">About</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#027fff] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-white mb-6">Mission</h2>
              <p className="text-blue-100 leading-relaxed">
                Senolytics.ai is a data research and development company with a strong business focus. All our products are designed to establish a measurable business optimization fast. We train the world&apos;s most powerful AI models, including OpenAI (ChatGPT), to help your business profit more, reduce the cost of acquisition, gain a competitive edge and prevent fraud.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-black text-white mb-6">Made in Cyprus</h2>
              <p className="text-blue-100 leading-relaxed">
                Senolytics.ai is headquartered in Cyprus. We love Cyprus. It is a small Island that attracts many great minds. We enjoy the sun, the fresh food and the friendly people. We are a nomad-based company, our team works worldwide, and we never limit our talent acquisition to one physical location. If you want to join Senolytics.ai please send us an email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f6fcff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#03032e] mb-4">Meet the Team</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            Our team comprises operational people and scientific advisors, including PhD-level scientists and engineers with experience across some of the world&apos;s most prominent universities and technology companies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(m => (
              <div key={m.name} className="card border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
                  <Image src={`/images/${m.img}`} alt={m.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div className="text-[#027fff] text-xs font-bold uppercase tracking-widest mb-1">
                  SENOLYTICS.AI {m.role}
                </div>
                <h3 className="font-bold text-[#03032e] mb-3">{m.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#03032e] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">We&apos;d love to hear from you.</h2>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">Contact Senolytics</Link>
        </div>
      </section>
    </>
  );
}
