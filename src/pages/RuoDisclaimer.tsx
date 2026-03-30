import LegalPage from "@/components/LegalPage";

export default function RuoDisclaimer() {
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
