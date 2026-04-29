import Link from "next/link";

export const metadata = {
  title: "Senolytics.ai — Conversion Intelligence",
  description: "AI-based products to help businesses boost conversion rates.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#03032e] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black text-white mb-4">senolytics<span className="text-[#027fff]">.ai</span></h1>
        <p className="text-[#8b8fa8] mb-8">Conversion Intelligence Powered by AI</p>
        <Link href="/lead-shield" className="btn-primary">Explore Products</Link>
      </div>
    </main>
  );
}
