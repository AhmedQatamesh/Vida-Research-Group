import LegalPage from "@/components/LegalPage";

export default function CopyrightIP() {
  return (
    <LegalPage title="Copyright & Intellectual Property Notice">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">© 2026 VIDA Research Group. All rights reserved.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. Ownership</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All content on the Site, including text, graphics, logos, images, product descriptions, downloadable documents, page layouts, and design elements, is owned by or licensed to VIDA Research Group and is protected by intellectual property laws.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. Limited License</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">You may view, download, and print pages from the Site for personal, non-commercial use related to lawful RUO purchasing and research evaluation. You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit Site content without prior written consent.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Trademarks</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">VIDA Research Group names, logos, and related marks are trademarks or trade dress of VIDA Research Group. Unauthorized use is prohibited.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">4. Reporting Infringement</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">If you believe content on the Site infringes your rights, contact <a href="mailto:Support@vidaresearch.group" className="text-primary hover:underline">Support@vidaresearch.group</a> with sufficient detail to identify the material and your claim.</p>
    </LegalPage>
  );
}
