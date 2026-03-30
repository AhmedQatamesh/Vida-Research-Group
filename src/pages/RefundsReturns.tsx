import LegalPage from "@/components/LegalPage";

export default function RefundsReturns() {
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
