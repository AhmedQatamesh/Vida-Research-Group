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
      <p className="text-muted-foreground text-sm">Last updated: January 2024</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Information We Collect</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We collect information you provide directly, including name, email, organization, shipping address, and payment information when placing an order. We also collect usage data through cookies and analytics tools.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. How We Use Your Information</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Your information is used to process orders, provide customer support, send order updates, and improve our services. We do not sell personal data to third parties.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Data Security</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We implement industry-standard security measures to protect your personal information, including SSL encryption, secure payment processing, and restricted data access.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. Contact</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">For privacy-related inquiries, contact us at privacy@vidaresearch.com.</p>
    </LegalPage>
  );
}

export function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions">
      <p className="text-muted-foreground text-sm">Last updated: January 2024</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Acceptance of Terms</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">By accessing or using the VIDA Research Group website and purchasing products, you agree to be bound by these terms and conditions.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. Research Use Only</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All products are sold exclusively for laboratory research purposes. By purchasing, you confirm that products will not be used for human consumption, diagnostic, or therapeutic purposes.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Ordering & Payment</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All orders are subject to availability and acceptance. Prices are listed in USD and may change without notice. Payment is required at the time of order.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. Limitation of Liability</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">VIDA Research Group shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products.</p>
    </LegalPage>
  );
}

export function ShippingPayments() {
  return (
    <LegalPage title="Shipping & Payments Policy">
      <p className="text-muted-foreground text-sm">Last updated: January 2024</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Shipping</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Orders are processed within 1–2 business days. Standard shipping takes 3–5 business days within the United States. Expedited and international shipping options are available. Temperature-sensitive products are shipped with cold-chain packaging.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Payments</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We accept major credit cards, ACH transfers, and purchase orders from verified institutions. All transactions are processed through secure, PCI-compliant payment systems.</p>
    </LegalPage>
  );
}

export function RefundsReturns() {
  return (
    <LegalPage title="Refunds & Returns Policy">
      <p className="text-muted-foreground text-sm">Last updated: January 2024</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Returns</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Due to the nature of research compounds, returns are accepted only for damaged, defective, or incorrectly shipped products. Contact us within 7 days of delivery.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Refunds</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Approved refunds are processed within 5–10 business days to the original payment method. Shipping costs are non-refundable unless the return is due to our error.</p>
    </LegalPage>
  );
}

export function RUODisclaimer() {
  return (
    <LegalPage title="Research Use Only Disclaimer">
      <p className="text-muted-foreground text-sm leading-relaxed">All products sold by VIDA Research Group are intended for Research Use Only (RUO). They are not intended for human consumption, clinical diagnosis, or therapeutic use.</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">Purchasers assume full responsibility for ensuring that all products are used in accordance with applicable federal, state, and local regulations. Products must be handled exclusively by qualified researchers in appropriate laboratory settings.</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">VIDA Research Group makes no claims regarding the safety or efficacy of any product for use in humans or animals. By purchasing, you acknowledge and agree to these terms.</p>
    </LegalPage>
  );
}

export function AccessibilityStatement() {
  return (
    <LegalPage title="Accessibility Statement">
      <p className="text-muted-foreground text-sm leading-relaxed">VIDA Research Group is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Measures Taken</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We strive to conform to WCAG 2.1 Level AA standards. Our website includes semantic HTML, keyboard navigation support, alt text for images, and sufficient color contrast ratios.</p>
      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Feedback</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">If you encounter accessibility barriers, please contact us at accessibility@vidaresearch.com so we can assist you and improve our website.</p>
    </LegalPage>
  );
}
