import Layout from "@/components/Layout";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

function LegalPage({ title, children }: LegalPageProps) {
  return (
    <Layout>
      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground">{title}</h1>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm prose-slate">
          {children}
        </div>
      </section>
    </Layout>
  );
}

export function PrivacyPolicy() {
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

export function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> January 2024</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Acceptance of Terms</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">By accessing or using the VIDA Research Group website and purchasing products, you agree to be bound by these terms and conditions.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. Research Use Only</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All products are sold exclusively for laboratory research purposes. By purchasing, you confirm that products will not be used for human consumption, diagnostic, or therapeutic purposes.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Ordering &amp; Payment</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All orders are subject to availability and acceptance. Prices are listed in USD and may change without notice. Payment is required at the time of order.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. Limitation of Liability</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">VIDA Research Group shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products.</p>
    </LegalPage>
  );
}

export function ShippingPayments() {
  return (
    <LegalPage title="Shipping & Payments Policy">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Order Processing</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Orders are processed on business days (excluding holidays). Processing time is separate from carrier transit time.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. Shipping (U.S. Only)</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We ship to U.S. addresses only. Shipping options and rates are shown at checkout.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Delivery Estimates; Carrier Delays</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Delivery dates are estimates and not guaranteed. We are not responsible for delays caused by carriers, weather, or service disruptions.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. Risk of Loss; Address Accuracy</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Risk of loss transfers when the order is tendered to the carrier, unless otherwise required by law. You are responsible for accurate shipping details and receiving deliveries.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">5. Temperature/Handling Considerations (RUO Materials)</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Some RUO materials may be sensitive to environmental conditions during transit. You agree to promptly inspect deliveries upon receipt.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">6. Payments</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Payments are processed through third-party payment providers. We may refuse or cancel orders for suspected fraud or RUO non-compliance.</p>
    </LegalPage>
  );
}

export function RefundsReturns() {
  return (
    <LegalPage title="Refunds & Returns Policy">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. All Sales Final; No Refunds</h2>
      <p className="text-muted-foreground text-sm leading-relaxed font-semibold">ALL SALES ARE FINAL. NO RETURNS. NO REFUNDS.</p>
      <p className="text-muted-foreground text-sm leading-relaxed">Due to the nature of RUO materials and quality control requirements, we do not accept returns or provide refunds to the maximum extent permitted by law.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. Damaged, Missing, or Incorrect Items</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">If your order arrives damaged, leaking, incomplete, or incorrect, notify us within <strong>48 hours</strong> of delivery at <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a>. Include your order number and clear photos of the outer package, labels, and items received. If verified, we may provide a replacement or store credit at our discretion.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Chargebacks</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Contact us first to resolve issues. Improper chargebacks may result in account suspension and refusal of future orders.</p>
    </LegalPage>
  );
}

export function RUODisclaimer() {
  return (
    <LegalPage title="Research Use Only Disclaimer">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Research Use Only; Not for Human or Animal Use</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All products sold by VIDA Research Group are designated <strong>Research Use Only (RUO)</strong> and are supplied solely for laboratory, analytical, or scientific research purposes by qualified professionals. Products are <strong>not intended for human or animal consumption</strong> or any clinical, diagnostic, therapeutic, veterinary, household, cosmetic, or food use.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. No Disease Claims; FDA Statement</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Information on this Site has not been evaluated by the U.S. Food and Drug Administration. Products are not intended to diagnose, treat, cure, mitigate, or prevent any disease.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Not a Compounding Pharmacy / Not an Outsourcing Facility</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">VIDA Research Group is a chemical supplier and is not a compounding pharmacy under Section 503A of the Federal Food, Drug, and Cosmetic Act and is not an outsourcing facility under Section 503B of the Federal Food, Drug, and Cosmetic Act.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. Eligibility</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Purchases are restricted to individuals 21 years of age or older.</p>
    </LegalPage>
  );
}

export function AccessibilityStatement() {
  return (
    <LegalPage title="Accessibility Statement">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">VIDA Research Group is committed to providing a website that is accessible to the widest possible audience. Our goal is to align with generally recognized accessibility standards (such as WCAG 2.1 AA) where reasonably practicable.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Contact for Accessibility Issues</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">If you experience difficulty accessing any part of the Site, contact us at <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a> and include the page URL and a description of the issue. We will make reasonable efforts to address accessibility barriers.</p>
    </LegalPage>
  );
}
