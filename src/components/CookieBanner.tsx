import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "vida_cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-primary-foreground/10 px-4 py-4 md:py-5"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex-1 text-sm text-primary-foreground/70 leading-relaxed pr-4">
          <span className="font-semibold text-primary-foreground">Cookie Notice — </span>
          We use essential cookies for sessions, security, and shopping cart functionality, and optional analytics cookies to understand site usage. You can manage cookies through your browser settings; blocking them may affect functionality.{" "}
          <a href="/privacy-policy" className="underline underline-offset-2 hover:text-primary-foreground transition-colors">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-navy"
          >
            Got it
          </button>
          <button
            onClick={accept}
            aria-label="Dismiss cookie notice"
            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-navy rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
