import LegalPage from "@/components/LegalPage";

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">VIDA Research Group is committed to providing a website that is accessible to the widest possible audience. Our goal is to align with generally recognized accessibility standards (such as WCAG 2.1 AA) where reasonably practicable.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Contact for Accessibility Issues</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">If you experience difficulty accessing any part of the Site, contact us at <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a> and include the page URL and a description of the issue. We will make reasonable efforts to address accessibility barriers.</p>
    </LegalPage>
  );
}
