export const metadata = {
  title: "Terms and Conditions — senolytics.ai",
  description: "Terms and conditions governing use of Senolytics.ai products and website.",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-[#03032e] pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-[#027fff] text-xs font-bold uppercase tracking-[0.15em] block mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">Terms and Conditions</h1>
        <p className="text-[#8b8fa8] mb-12">Last updated: January 2024</p>

        <div className="space-y-10 text-[#8b8fa8] leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-xl mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
              Senolytics.ai website and services operated by{" "}
              <strong className="text-white">Bontida Limited</strong> (Registration: HE431123),
              a company registered in Cyprus, with its registered office at Zinonos Kitieos 9,
              Egkomi 2406, Nicosia, Cyprus (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
            <p className="mt-3">
              By accessing our website or using any of our products, you agree to be bound by
              these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">2. Services</h2>
            <p>
              Senolytics.ai provides AI-based conversion intelligence products including, without
              limitation, LeadShield (phone, email and IP validation), Funnel Optimisation, and
              the AI Innovation Lab. Access to these products is subject to a separate service
              agreement or API subscription agreement, as applicable.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age and have the legal authority to enter into
              binding agreements on behalf of yourself or your organisation. By using our
              services, you represent and warrant that you meet these requirements.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Use our services for any unlawful purpose or in violation of any applicable law or regulation.</li>
              <li>Attempt to gain unauthorised access to our systems, data or networks.</li>
              <li>Use our API to conduct high-volume scraping or data harvesting beyond the agreed rate limits.</li>
              <li>Resell, redistribute or sublicense access to our services without our written consent.</li>
              <li>Use our services to harass, harm, or defraud any individual or organisation.</li>
              <li>Introduce viruses, malware or other harmful code into our systems.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos,
              software, AI models and data compilations, is the property of Bontida Limited or
              its licensors and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">6. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without any warranty of any kind, express or implied. We do not
              warrant that the services will be uninterrupted, error-free, or free of viruses or
              other harmful components. We make no warranty regarding the accuracy, completeness
              or reliability of any data or results produced by our AI models.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Bontida Limited shall not be
              liable for any indirect, incidental, special, consequential or punitive damages,
              or any loss of profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses, resulting from your
              use of our services.
            </p>
            <p className="mt-3">
              Our total aggregate liability to you for any claim arising out of or relating to
              these Terms or your use of our services shall not exceed the amounts paid by you
              to us in the three months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">8. Privacy</h2>
            <p>
              Your use of our services is also governed by our{" "}
              <a href="/privacy-policy" className="text-[#027fff] hover:underline">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              the Republic of Cyprus. Any disputes arising under or in connection with these
              Terms shall be subject to the exclusive jurisdiction of the courts of Cyprus.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">10. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              upon posting to this page with an updated date. Your continued use of our services
              after any changes constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">11. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at{" "}
              <a href="mailto:team@senolytics.ai" className="text-[#027fff] hover:underline">
                team@senolytics.ai
              </a>
              .
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p>
              <strong className="text-white">Bontida Limited</strong> (trading as Senolytics.ai)<br />
              Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus<br />
              Registration: HE431123<br />
              <a href="mailto:team@senolytics.ai" className="text-[#027fff] hover:underline">
                team@senolytics.ai
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
