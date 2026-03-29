import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import vidaLogo from "@/assets/vida-logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={vidaLogo} alt="VIDA Research Group" className="h-12 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Premium research compounds for scientific investigation. All products are intended for research use only.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Research Compounds", path: "/research-compounds" },
                { label: "Quality & Testing", path: "/quality-testing" },
                { label: "Documentation", path: "/documentation" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms & Conditions", path: "/terms-conditions" },
                { label: "Shipping & Payments", path: "/shipping-payments" },
                { label: "Refunds & Returns", path: "/refunds-returns" },
                { label: "RUO Disclaimer", path: "/ruo-disclaimer" },
                { label: "Accessibility", path: "/accessibility" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/50">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>245 Hamilton Avenue<br />Princeton, NJ 08540</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Phone className="h-4 w-4 shrink-0" />
                <span>929-500-6096</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@vidaresearchgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} VIDA Research Group. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 text-center md:text-right max-w-lg">
            All products are for research use only (RUO). Not for human consumption, diagnostic, or therapeutic use.
          </p>
        </div>
      </div>
    </footer>
  );
}