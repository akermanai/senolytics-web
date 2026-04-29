import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — senolytics.ai",
  description: "Get in touch with the Senolytics.ai team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[#03032e] pt-32 pb-28 overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="label block mb-4">Get in Touch</span>
              <h1 className="heading-xl mb-6">
                Let&apos;s Talk About<br />
                <span className="text-[#f59e0b]">Your Data Challenge</span>
              </h1>
              <p className="body-lg mb-8">
                Whether you want to explore LeadShield, discuss a custom AI engagement, or
                just understand if we&apos;re the right fit — send us a message and we&apos;ll
                respond within one business day.
              </p>
              <div className="space-y-4 text-[#9ca3b8]">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 flex items-center justify-center text-[#f59e0b] text-sm">✉</span>
                  <a href="mailto:team@senolytics.ai" className="text-[#f59e0b] hover:underline">team@senolytics.ai</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 flex items-center justify-center text-[#f59e0b] text-sm">📍</span>
                  <span>Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 flex items-center justify-center text-[#f59e0b] text-sm">🏢</span>
                  <span>Bontida Limited · Reg. HE431123</span>
                </div>
              </div>
            </div>

            {/* Right — contact card */}
            <div className="card-dark border border-[#f59e0b]/15">
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              <div className="space-y-5">
                <div>
                  <label className="text-[#9ca3b8] text-sm font-medium block mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-[#9ca3b8]/50 focus:outline-none focus:border-[#f59e0b]/50 transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="text-[#9ca3b8] text-sm font-medium block mb-2">Work Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-[#9ca3b8]/50 focus:outline-none focus:border-[#f59e0b]/50 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="text-[#9ca3b8] text-sm font-medium block mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-[#9ca3b8]/50 focus:outline-none focus:border-[#f59e0b]/50 transition-colors"
                    placeholder="Acme Financial Ltd"
                  />
                </div>
                <div>
                  <label className="text-[#9ca3b8] text-sm font-medium block mb-2">What are you looking for?</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-[#9ca3b8]/50 focus:outline-none focus:border-[#f59e0b]/50 transition-colors resize-none"
                    placeholder="Tell us about your data challenge or the product you want to explore..."
                  />
                </div>
                <a
                  href="mailto:team@senolytics.ai"
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                </a>
                <p className="text-[#9ca3b8] text-xs text-center">
                  Or email us directly at{" "}
                  <a href="mailto:team@senolytics.ai" className="text-[#f59e0b] hover:underline">
                    team@senolytics.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
