import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — senolytics.ai",
  description: "Senolytics.ai is a data R&D company building AI products for conversion intelligence. Meet the team behind the platform.",
};

const team = [
  { name: "George Antoniades", role: "Business Hero", bio: "A passionate leader with over 25 years of experience in international business management. George is a business regulatory expert who develops and maintains relationships with banks and international investors.", img: "george.jpg" },
  { name: "Sixtine Vervial", role: "Data Hero", bio: "Data Scientist with experience at JustWatch, Duproprio, Zalando, Snowplow Analytics and more — covering infrastructure design, data engineering, ETL development and stack review.", img: "Sixtine-Vervial.jpg" },
  { name: "Polina Nesterenko", role: "Legal Hero", bio: "PhD in Law, LL.M in Mediation, AML Compliance Officer. Hands-on experience with cross-border transactions, M&A, fraud prevention and compliance frameworks.", img: "polina.jpg" },
  { name: "Martin Olney", role: "Strategy Hero", bio: "Business strategist specialising in disruptive technology adoption, startups, sustainable competitive advantage, differentiators and niche marketing.", img: "Martin.jpg" },
  { name: "Loredana Mir", role: "Accounting Hero", bio: "ACCA, MSc. Senior financial analyst working with the world's most significant accounting firms. Results-oriented, proactively challenging the status quo.", img: "Loredana.jpg" },
  { name: "Avner Nissani", role: "Data Hero", bio: "Specialties: Data Modeling, Data Warehouses, Analytics, Data Mining, Machine Learning, Big Data, SQL Server, AWS, Kafka and Data Streaming.", img: "avner_nissani.jpg" },
  { name: "David Hennessy", role: "Development Hero", bio: "Full-stack developer with 15+ years helping companies build complex web applications. Particularly passionate about leveraging AI to drive traffic and conversion growth.", img: "davie-hennessy.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#03032e] pt-32 pb-24 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <span className="label block mb-4">About Us</span>
          <h1 className="heading-xl mb-6">The Team Behind Senolytics.ai</h1>
          <p className="body-lg max-w-3xl mx-auto">
            A focused team of data scientists, engineers, and business strategists
            building AI products for conversion intelligence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glow">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">Our Mission</h2>
              <p className="body-md mb-4">
                Senolytics.ai is a data research and development company with a strong
                business focus. All our products are designed to establish a measurable
                business optimisation fast.
              </p>
              <p className="body-md">
                We train the world&apos;s most powerful AI models to help businesses
                profit more, reduce the cost of acquisition, gain a competitive edge
                and prevent fraud.
              </p>
            </div>
            <div className="card-glow">
              <div className="blue-line" />
              <h2 className="heading-md mb-4">Our Focus</h2>
              <p className="body-md mb-4">
                Our team has vast experience with regulatory guidelines including GDPR,
                ISO 27001 and Financial Conduct Authority (FCA) standards.
              </p>
              <p className="body-md">
                We develop novel products, models and intellectual property specifically
                for businesses operating in ultra-competitive, regulated niches —
                financial services, iGaming, insurance and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">The Team</span>
          <h2 className="heading-lg mb-12">Meet the Heroes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="card-glow">
                <div className="relative mb-5">
                  <Image
                    src={"/images/" + m.img}
                    alt={m.name}
                    width={120}
                    height={120}
                    className="rounded-full ring-2 ring-[#f59e0b]/40"
                  />
                </div>
                <h3 className="text-white font-bold text-lg">{m.name}</h3>
                <p className="text-[#f59e0b] text-sm font-semibold mb-3">{m.role}</p>
                <p className="body-md text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="bg-[#06063f] section border-t border-[rgba(2,127,255,0.15)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label block mb-4">The Company</span>
              <h2 className="heading-lg mb-6">Bontida Limited</h2>
              <p className="body-lg mb-6">
                Senolytics.ai is a brand of Bontida Limited, a technology company
                registered in Cyprus, operating across European markets.
              </p>
              <p className="body-md mb-4">
                <strong className="text-white">Registration:</strong> HE431123<br />
                <strong className="text-white">Address:</strong> Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus
              </p>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2020", lbl: "Founded" },
                { val: "EU", lbl: "Based in Cyprus" },
                { val: "7+", lbl: "Team members" },
                { val: "3", lbl: "AI Products" },
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
    </>
  );
}
