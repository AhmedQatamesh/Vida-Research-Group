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
import {
  PrivacyPolicy,
  TermsConditions,
  ShippingPayments,
  RefundsReturns,
  RUODisclaimer,
  AccessibilityStatement,
} from "./pages/LegalPages";
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
            <Route path="/ruo-disclaimer" element={<RUODisclaimer />} />
            <Route path="/accessibility" element={<AccessibilityStatement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;