export const metadata = {
  title: "Privacy Policy — senolytics.ai",
  description: "How Senolytics.ai (Bontida Limited) collects, uses and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#03032e] pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <span className="label block mb-4">Legal</span>
        <h1 className="heading-lg mb-3">Privacy Policy</h1>
        <p className="text-[#8b8fa8] mb-12">Last updated: January 2024</p>
        <div className="space-y-10 text-[#8b8fa8] leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-xl mb-4">1. Who We Are</h2>
            <p>Senolytics.ai is a brand of <strong className="text-white">Bontida Limited</strong>, a company registered in Cyprus (Registration Number: HE431123), with its registered office at Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus.</p>
            <p className="mt-3">For the purposes of GDPR, Bontida Limited is the data controller for personal data collected through this website and our services.</p>
            <p className="mt-3">Contact: <a href="mailto:team@senolytics.ai" className="text-[#027fff] hover:underline">team@senolytics.ai</a></p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">2. What Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-white">Contact information</strong> — name, email address, company name, phone number, provided when you complete our contact form or subscribe to communications.</li>
              <li><strong className="text-white">Usage data</strong> — IP address, browser type, pages visited, time on site, referral source, collected automatically via cookies and analytics tools.</li>
              <li><strong className="text-white">API usage data</strong> — if you use our LeadShield or other API products, we log query metadata (timestamps, query volumes, response codes) for billing, security and service improvement purposes.</li>
              <li><strong className="text-white">Communications</strong> — the content of emails or messages you send to us.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">3. How We Use Your Data</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>To respond to enquiries and provide the services you have requested.</li>
              <li>To manage our business relationship with you.</li>
              <li>To send product updates, newsletters or marketing communications where you have consented.</li>
              <li>To improve our website and services through analytics.</li>
              <li>To fulfil legal and regulatory obligations.</li>
              <li>To detect and prevent fraud and security incidents.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">4. Legal Basis for Processing</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-white">Contract</strong> — where processing is necessary to provide services you have requested.</li>
              <li><strong className="text-white">Legitimate interests</strong> — for improving our services, marketing to existing customers, and fraud prevention.</li>
              <li><strong className="text-white">Consent</strong> — where you have explicitly agreed, e.g. to receive marketing emails or to accept cookies.</li>
              <li><strong className="text-white">Legal obligation</strong> — where we must process data to comply with applicable law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">5. Data Retention</h2>
            <p>We retain personal data only for as long as necessary for the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 3 years. API usage logs are retained for up to 2 years. You may request deletion at any time by contacting us.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">6. Data Storage and Security</h2>
            <p>Our data is hosted in SOC 2 Type II and ISO 27001 certified data centres in Falkenstein, Germany, operated 100% by renewable energy. Data of EU and UK customers does not leave the EU. We employ appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">7. Third-Party Sharing</h2>
            <p>We do not sell your personal data. We may share data with trusted service providers who assist in operating our website and services (such as hosting, analytics and email delivery), under strict data processing agreements. We may disclose data to legal authorities where required by law.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">8. Your Rights</h2>
            <p>Under GDPR you have the right to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Access the personal data we hold about you.</li>
              <li>Rectify inaccurate or incomplete data.</li>
              <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Restrict or object to certain processing.</li>
              <li>Data portability — receive your data in a machine-readable format.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
              <li>Lodge a complaint with the relevant supervisory authority.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:team@senolytics.ai" className="text-[#027fff] hover:underline">team@senolytics.ai</a>. We will respond within 30 days.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">9. Cookies</h2>
            <p>We use cookies and similar tracking technologies to improve your experience. Please see our <a href="/cookie-policy" className="text-[#027fff] hover:underline">Cookie Policy</a> for full details.</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Continued use of our services after such changes constitutes acceptance of the updated policy.</p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p><strong className="text-white">Bontida Limited</strong> (trading as Senolytics.ai)<br />Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus<br />Registration: HE431123<br /><a href="mailto:team@senolytics.ai" className="text-[#027fff] hover:underline">team@senolytics.ai</a></p>
          </div>

        </div>
      </div>
    </section>
  );
}
