import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import vidaLogo from "@/assets/vida-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Research Compounds", path: "/research-compounds" },
  { label: "Quality & Testing", path: "/quality-testing" },
  { label: "Documentation", path: "/documentation" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={vidaLogo} alt="VIDA Research Group" className="h-10 lg:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-teal bg-teal-muted"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 border-teal text-teal hover:bg-teal-muted">
              <FileText className="h-4 w-4" />
              Request COA / Docs
            </Button>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-card border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md ${
                    location.pathname === item.path
                      ? "text-teal bg-teal-muted"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="outline" size="sm" className="mt-3 gap-2 border-teal text-teal">
                <FileText className="h-4 w-4" />
                Request COA / Docs
              </Button>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}