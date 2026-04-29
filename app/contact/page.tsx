"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-[#03032e] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <h1 className="text-5xl font-black text-white mb-6">Request More Information</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Talk to a member of the Senolytics team. We&apos;ll get back to you within 24 hours.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center text-[#f59e0b]">✉</div>
                  <a href="mailto:team@senolytics.ai" className="text-gray-300 hover:text-[#f59e0b] transition-colors">team@senolytics.ai</a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center text-[#f59e0b] shrink-0">📍</div>
                  <div className="text-gray-400 text-sm">
                    Bontida Limited<br />
                    Zinonos Kitieos 9, Egkomi 2406<br />
                    Nicosia, Cyprus
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#06063f] border border-white/10 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✓</div>
                  <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                  <p className="text-gray-400">Thank you for reaching out. We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Full Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#03032e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]/50"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#03032e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]/50"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Company</label>
                    <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-[#03032e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]/50"
                      placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Message</label>
                    <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#03032e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]/50 resize-none"
                      placeholder="Tell us about your business and what you need..." />
                  </div>
                  <button type="submit" className="w-full btn-primary justify-center py-3.5">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
