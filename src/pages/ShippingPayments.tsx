import LegalPage from "@/components/LegalPage";

export default function ShippingPayments() {
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
