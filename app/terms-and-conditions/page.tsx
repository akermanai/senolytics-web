export const metadata = {
  title: "Terms and Conditions — senolytics.ai",
  description: "Terms and conditions governing use of Senolytics.ai products and website.",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-[#03032e] pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-[#f59e0b] text-xs font-bold uppercase tracking-[0.15em] block mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">Terms and Conditions</h1>
        <p className="text-[#9ca3b8] mb-12">Last updated: January 2024</p>
        <div className="space-y-10 text-[#9ca3b8] leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-xl mb-4">1. About These Terms</h2>
            <p>These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the senolytics.ai website and any products or services offered by <strong className="text-white">Bontida Limited</strong> (trading as Senolytics.ai), a company registered in Cyprus under number HE431123, with its registered office at Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus.</p>
            <p className="mt-3">By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">2. Services</h2>
            <p>Senolytics.ai provides AI-powered data intelligence services, including but not limited to real-time phone, email and IP validation (LeadShield), funnel optimisation, and custom AI model development. The specific terms of any service engagement are set out in a separate Order Form or Service Agreement between Bontida Limited and the customer.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">3. Use of the Website</h2>
            <p>You may use this website for lawful purposes only. You must not use the website:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>In any way that violates applicable local, national or international law or regulation.</li>
              <li>To transmit unsolicited or unauthorised advertising or promotional material.</li>
              <li>To attempt to gain unauthorised access to any part of our systems or infrastructure.</li>
              <li>To scrape, harvest or otherwise extract data from the website without our written consent.</li>
              <li>To transmit any data, send or upload any material that is harmful, offensive, or otherwise objectionable.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">4. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, images and software — is the property of Bontida Limited or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works without our prior written consent.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">5. API and Product Use</h2>
            <p>Access to and use of our API products (including LeadShield) is governed by separate API Terms and any applicable Service Agreement. In the absence of a specific agreement, use of our API is restricted to legitimate business purposes and subject to our fair-use policy. We reserve the right to suspend access for any use that, in our sole discretion, constitutes abuse or poses a security or compliance risk.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">6. Disclaimers</h2>
            <p>Our website and services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            <p className="mt-3">While we take all reasonable steps to ensure the accuracy of our data and services, we do not warrant that the information or outputs provided are complete, accurate, or suitable for your specific use case. Fraud scores and validation signals are probabilistic indicators, not guarantees.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Bontida Limited shall not be liable for any indirect, incidental, special, consequential or punitive damages, including but not limited to loss of profits, loss of data, or business interruption, arising from your use of or inability to use our services or website.</p>
            <p className="mt-3">Our total aggregate liability to you for any claim arising out of or relating to these Terms or our services shall not exceed the greater of (a) the fees paid by you to us in the 12 months preceding the claim, or (b) €500.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">8. Privacy</h2>
            <p>Your use of our website is also governed by our <a href="/privacy-policy" className="text-[#f59e0b] hover:underline">Privacy Policy</a> and <a href="/cookie-policy" className="text-[#f59e0b] hover:underline">Cookie Policy</a>, which are incorporated into these Terms by reference.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Cyprus. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Cyprus, without prejudice to any mandatory consumer protection rights you may have in your country of residence.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">10. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of significant changes by posting a notice on this page. Continued use of our website or services after such changes constitutes your acceptance of the updated Terms.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl mb-4">11. Contact</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:team@senolytics.ai" className="text-[#f59e0b] hover:underline">team@senolytics.ai</a>.</p>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p><strong className="text-white">Bontida Limited</strong> (trading as Senolytics.ai)<br />Zinonos Kitieos 9, Egkomi 2406, Nicosia, Cyprus<br />Registration: HE431123<br /><a href="mailto:team@senolytics.ai" className="text-[#f59e0b] hover:underline">team@senolytics.ai</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
