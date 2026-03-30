import LegalPage from "@/components/LegalPage";

export default function CookieNotice() {
  return (
    <LegalPage title="Cookie Notice">
      <p className="text-muted-foreground text-sm"><strong>Last Updated:</strong> February 24, 2026</p>
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">This Cookie Notice explains how cookies and similar technologies are used on the Site.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">1. What Are Cookies?</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Cookies are small text files stored on your device that help websites function and improve user experience.</p>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">2. How We Use Cookies</h2>
      <ul className="text-muted-foreground text-sm leading-relaxed list-disc pl-5 space-y-1 mt-2">
        <li><strong>Essential cookies:</strong> required for sessions, security, and shopping cart functionality.</li>
        <li><strong>Performance/analytics cookies (if enabled):</strong> used to understand site usage and improve performance.</li>
      </ul>

      <h2 className="font-heading text-lg font-semibold text-foreground mt-6">3. Your Choices</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">You can manage cookies through your browser settings. Blocking cookies may impact functionality.</p>
    </LegalPage>
  );
}
