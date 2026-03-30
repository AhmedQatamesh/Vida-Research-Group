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

        {/* Full compliance block */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 space-y-3">
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            <strong className="text-primary-foreground/70">Research Use Only:</strong> Products are designated Research Use Only and supplied solely for laboratory, analytical, or scientific research purposes by qualified professionals. Products are not intended for human or animal use.
          </p>
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            Statements on this Site have not been evaluated by the U.S. Food and Drug Administration. Products are not intended to diagnose, treat, cure, mitigate, or prevent any disease.
          </p>
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            VIDA Research Group is a chemical supplier and is not a compounding pharmacy under Section 503A of the Federal Food, Drug, and Cosmetic Act and is not an outsourcing facility under Section 503B of the Federal Food, Drug, and Cosmetic Act.
          </p>
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            <strong className="text-primary-foreground/70">21+ only:</strong> Purchases are restricted to individuals 21 years of age or older.
          </p>
        </div>

        {/* Copyright & IP notice */}
        <div className="border-t border-primary-foreground/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} VIDA Research Group. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 text-left md:text-right max-w-lg leading-relaxed">
            All content on this Site — including text, graphics, logos, images, and design elements — is owned by or licensed to VIDA Research Group and protected by intellectual property laws. Unauthorized reproduction or use is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}
