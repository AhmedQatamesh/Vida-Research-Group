import LegalPage from "@/components/LegalPage";

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
