import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — senolytics.ai",
  description:
    "Senolytics.ai is a data R&D company building AI products for conversion intelligence. Meet the team behind the platform.",
};

const team = [
  {
    name: "George Antoniades",
    role: "Business Hero",
    bio: "A passionate leader with over 25 years of experience in international business management. George is a business regulatory expert who develops and maintains relationships with banks and international investors.",
    img: "george.jpg",
  },
  {
    name: "Sixtine Vervial",
    role: "Data Hero",
    bio: "Data Scientist with experience at JustWatch, Duproprio, Zalando, Snowplow Analytics and more — covering infrastructure design, data engineering, ETL development and stack review.",
    img: "Sixtine-Vervial.jpg",
  },
  {
    name: "Polina Nesterenko",
    role: "Legal Hero",
    bio: "PhD in Law, LL.M in Mediation, AML Compliance Officer. Hands-on experience with cross-border transactions, M&A, fraud prevention and compliance frameworks.",
    img: "polina.jpg",
  },
  {
    name: "Martin Olney",
    role: "Strategy Hero",
    bio: "Business strategist specialising in disruptive technology adoption, startups, sustainable competitive advantage, differentiators and niche marketing.",
    img: "Martin.jpg",
  },
  {
    name: "Loredana Mir",
    role: "Accounting Hero",
    bio: "ACCA, MSc. Senior financial analyst working with the world's most significant accounting firms. Results-oriented, proactively challenging the status quo.",
    img: "Loredana.jpg",
  },
  {
    name: "Avner Nissani",
    role: "Data Hero",
    bio: "Specialties: Data Modeling, Data Warehouses, Analytics, Data Mining, Machine Learning, Big Data, SQL Server, AWS, Kafka and Data Streaming.",
    img: "avner_nissani.jpg",
  },
  {
    name: "David Hennessy",
    role: "Development Hero",
    bio: "Full-stack developer with 15+ years helping companies build complex web applications. Particularly passionate about leveraging AI to drive traffic and conversion growth.",
    img: "davie-hennessy.jpg",
  },
  {
    name: "Rudi Rudiak",
    role: "R & SQL Hero",
    bio: "Senior data analyst with vast experience in R scripts, ETL automation, data cleaning and structuring with R & SQL, and building executive dashboards.",
    img: "Rudi_edit.png",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#03032e] pt-32 pb-20 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="label block mb-4">The Company</span>
          <h1 className="heading-xl mb-6">About Senolytics.ai</h1>
          <p className="body-lg max-w-2xl">
            A data research and development company with a strong business focus —
            building AI products that deliver measurable results fast.
          </p>
        </div>
      </section>

      {/* ── Mission & HQ ── */}
      <section className="bg-[#06063f] section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glow">
              <div className="blue-line" />
              <h2 className="heading-md mb-5">Mission</h2>
              <p className="body-md">
                Senolytics.ai is a data research and development company with a strong
                business focus. All our products are designed to establish a measurable
                business optimisation fast. We train the world&apos;s most powerful AI
                models, including OpenAI (ChatGPT), to help your business profit more,
                reduce the cost of acquisition, gain a competitive edge and prevent fraud.
              </p>
            </div>
            <div className="card-glow">
              <div className="blue-line" />
              <h2 className="heading-md mb-5">Made in Cyprus</h2>
              <p className="body-md">
                Senolytics.ai is headquartered in Cyprus — a small island that attracts
                many great minds. We enjoy the sun, the fresh food and the friendly people.
                We are a nomad-based company: our team works worldwide and we never limit
                our talent acquisition to one physical location. Want to join?{" "}
                <a
                  href="mailto:team@senolytics.ai"
                  className="text-[#027fff] hover:underline"
                >
                  Send us an email.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-[#03032e] section">
        <div className="max-w-6xl mx-auto px-6">
          <span className="label block mb-4">Our People</span>
          <h2 className="heading-lg mb-4">Meet the Team</h2>
          <p className="body-md mb-14 max-w-2xl">
            Our team comprises operational professionals and scientific advisors, including
            PhD-level scientists and engineers with experience across some of the world&apos;s
            most prominent universities and technology companies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="card-glow text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-[#027fff]/30">
                  <Image
                    src={`/images/${m.img}`}
                    alt={m.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="label mb-2">{m.role}</div>
                <h3 className="text-white font-bold mb-3">{m.name}</h3>
                <p className="body-md 