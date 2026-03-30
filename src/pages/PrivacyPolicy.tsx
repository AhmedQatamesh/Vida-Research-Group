import LegalPage from "@/components/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">
        This Privacy Policy explains how <strong>VIDA Research Group</strong> ("VIDA," "we," "us," "our") collects, uses, discloses, and protects information when you visit <strong>https://vidaresearch.group</strong> (the "Site"), create an account, contact us, or make a purchase. This Policy is designed for a U.S.-only Research Use Only ("RUO") ecommerce operation.
      </p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Scope</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">This Policy applies to information collected through the Site and our customer-service channels (email and web forms). It does not apply to third-party websites or services linked from the Site.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. Information We Collect</h2>
      <h3 className="font-heading text-base font-semibold text-foreground mt-4">A. Information you provide</h3>
      <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1 mt-2">
        <li><strong>Account &amp; order information:</strong> name, billing/shipping address, email address, phone number (if provided), and order history.</li>
        <li><strong>Customer support communications:</strong> information you submit via web forms or email, including attachments you provide.</li>
        <li><strong>Eligibility attestation:</strong> confirmation that you meet our 21+ purchase requirement.</li>
      </ul>
      <h3 className="font-heading text-base font-semibold text-foreground mt-4">B. Information collected automatically</h3>
      <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1 mt-2">
        <li><strong>Device and usage data:</strong> IP address, browser type, device identifiers, operating system, pages viewed, time spent, referring/exit pages, and timestamps.</li>
        <li><strong>Log and security data:</strong> information used to maintain site security, detect abuse, and prevent fraud.</li>
        <li><strong>Cookies and similar technologies:</strong> used for core website functions (e.g., maintaining sessions and shopping cart state) and analytics (if enabled).</li>
      </ul>
      <h3 className="font-heading text-base font-semibold text-foreground mt-4">C. Payment information</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">Payments are processed by third-party payment processors. We receive confirmation and transaction metadata (e.g., payment status, transaction ID), but we do not store full payment card numbers on our servers.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. How We Use Information</h2>
      <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1 mt-2">
        <li>Process orders, payments, shipping, and provide customer support.</li>
        <li>Create and manage accounts and provide order history and account functionality.</li>
        <li>Send transactional messages (order confirmations, shipping updates, service notices).</li>
        <li>Prevent fraud, enforce our Terms &amp; Conditions, and maintain site security.</li>
        <li>Comply with applicable laws (e.g., tax and accounting requirements) and respond to lawful requests.</li>
        <li>Improve Site performance and user experience (including analytics where enabled).</li>
      </ul>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. How We Share Information</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We may share information with service providers (hosting, security, analytics if enabled), payment processors, shipping/logistics providers, and for legal/safety reasons. We do not sell personal information to data brokers.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">5. Cookies &amp; Your Choices</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">You can control cookies through your browser settings. Disabling cookies may limit cart and checkout functionality.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">6. Marketing Communications</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We may send marketing communications by email only if you opt in where required. You can unsubscribe at any time or contact us at <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a>.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">7. Data Retention</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We retain personal information as needed to fulfill orders, provide services, comply with legal and tax obligations, resolve disputes, and enforce agreements.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">8. Security</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We implement reasonable safeguards designed to protect information. No method of transmission or storage is completely secure.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">9. Children's Privacy</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">The Site is not directed to children. Purchasing is restricted to individuals 21 years of age or older.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">10. Your Rights (U.S.)</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Depending on your state, you may have rights to request access, correction, or deletion of certain personal information. Submit requests to <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a> with the subject line "Privacy Request." We may verify your identity.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">11. Updates</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We may update this Policy from time to time. Continued use indicates acceptance of the revised Policy.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">12. Contact</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Email: <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a><br />
        Website: <a href="https://vidaresearch.group" className="text-primary hover:underline">https://vidaresearch.group</a>
      </p>
    </LegalPage>
  );
}
