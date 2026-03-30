import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import ResearchCompounds from "./pages/ResearchCompounds";
import ProductPage from "./pages/ProductPage";
import QualityTesting from "./pages/QualityTesting";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { TermsConditions } from "./pages/LegalPages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundsReturns from "./pages/RefundsReturns";
import RuoDisclaimer from "./pages/RuoDisclaimer";
import ShippingPayments from "./pages/ShippingPayments";
import Accessibility from "./pages/Accessibility";
import CookieNotice from "./pages/CookieNotice";
import CopyrightIP from "./pages/CopyrightIP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <CookieBanner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research-compounds" element={<ResearchCompounds />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/quality-testing" element={<QualityTesting />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/shipping-payments" element={<ShippingPayments />} />
            <Route path="/refunds-returns" element={<RefundsReturns />} />
            <Route path="/ruo-disclaimer" element={<RuoDisclaimer />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/cookie-notice" element={<CookieNotice />} />
            <Route path="/copyright-ip" element={<CopyrightIP />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
