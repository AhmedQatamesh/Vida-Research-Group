import { useEffect, useState } from "react";
import api from "@/lib/woocommerce";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-lab.jpg";
import qualityImage from "@/assets/quality-lab.jpg";
import {
  ArrowRight,
  FlaskConical,
  Shield,
  FileCheck,
  Clock,
  CheckCircle2,
  Award,
  Microscope,
  FileText,
  Users,
  Beaker,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  { icon: FileCheck, label: "Lot Tracking", desc: "Full batch traceability" },
  { icon: Shield, label: "COA Availability", desc: "Every product documented" },
  { icon: Clock, label: "Controlled Handling", desc: "Temperature-monitored" },
  { icon: Users, label: "Support SLA", desc: "24-48 hr response time" },
];

const whyChoose = [
  { icon: Award, title: "Third-Party Verified", desc: "Independent lab testing with published COAs for every batch." },
  { icon: Microscope, title: "Research-Grade Purity", desc: "HPLC-verified compounds meeting strict analytical standards." },
  { icon: FileText, title: "Complete Documentation", desc: "COAs, MSDS, handling guides, and batch records readily available." },
  { icon: ShieldCheck, title: "Regulatory Awareness", desc: "Products labeled and handled per RUO compliance standards." },
];

export default function HomePage() {
  const [featuredCompounds, setFeaturedCompounds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("products?per_page=4").then(response => {
      if (Array.isArray(response.data)) {
        setFeaturedCompounds(response.data);
      }
      setLoading(false);
    }).catch(error => {
      console.error("❌ WooCommerce Error:", error);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/70 text-xs font-medium mb-6">
                <FlaskConical className="h-3.5 w-3.5" />
                Research Use Only Compounds
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Precision Compounds for{" "}
                <span className="text-teal-light">Scientific Discovery</span>
              </h1>
              <p className="text-lg text-primary-foreground/60 max-w-lg mb-8 leading-relaxed">
                VIDA Research Group delivers high-purity, lot-tracked research compounds with complete documentation for the scientific community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-teal hover:bg-teal-light text-primary-foreground font-semibold px-6">
                  <Link to="/research-compounds">
                    Browse Compounds <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold">
                  <Link to="/quality-testing">View Quality Standards</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="VIDA Research Laboratory" className="w-full h-[420px] object-cover" width={1024} height={768} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-muted flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Purity Verified</p>
                    <p className="text-sm font-semibold text-foreground">≥ 98% HPLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-teal-muted flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trusted by Researchers Worldwide
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            VIDA Research Group is a U.S.-based supplier of high-purity reference compounds, peptides, and research materials.
            Every product is third-party tested, lot-tracked, and supported by complete certificates of analysis.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { num: "500+", label: "Compounds Available" },
              { num: "99.2%", label: "Avg. Purity Rating" },
              { num: "10K+", label: "Orders Fulfilled" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-teal font-heading">{s.num}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Compounds */}
      <section className="py-20 bg-slate-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Featured Research Compounds</h2>
              <p className="text-muted-foreground mt-2">High-purity materials with full documentation</p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link to="/research-compounds">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted animate-pulse rounded-lg" style={{ paddingBottom: '150%' }} />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCompounds.map((c: any) => (
                <Card key={c.id} className="group hover:shadow-lg transition-shadow border border-border bg-card">
                  <CardContent className="p-0">
                    <div className="relative w-full" style={{ paddingBottom: '150%' }}>
                      {c.images?.[0]?.src ? (
                        <img src={c.images[0].src} alt={c.name} className="absolute inset-0 w-full h-full object-contain p-4" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Beaker className="h-16 w-16 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-teal bg-teal-muted px-2 py-0.5 rounded">
                        {c.categories?.[0]?.name || "Compound"}
                      </span>
                      <h3 className="font-heading font-semibold text-foreground mt-2 mb-1 group-hover:text-teal transition-colors">{c.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">SKU: {c.sku} · Stock: {c.stock_status === "instock" ? "In Stock" : "Out of Stock"}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-heading font-bold text-foreground">${c.price}</span>
                        <Button asChild size="sm" variant="outline" className="text-xs">
                          <Link to={`/product/${c.slug}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/research-compounds">View All Compounds</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src={qualityImage} alt="Quality Control Lab" className="w-full h-[360px] object-cover" loading="lazy" width={1200} height={600} />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Uncompromising Quality Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every compound undergoes rigorous HPLC analysis, mass spectrometry verification, and identity confirmation
                before release. Our QC pipeline ensures lot-to-lot consistency and full traceability.
              </p>
              <ul className="space-y-3 mb-8">
                {["HPLC purity analysis on every batch", "Third-party independent verification", "Complete chain of custody documentation", "Temperature-controlled storage & shipping"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary hover:bg-navy-light text-primary-foreground">
                <Link to="/quality-testing">Learn About Our QC Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Preview */}
      <section className="py-20 bg-slate-surface">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <FileText className="h-12 w-12 text-teal mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Complete Documentation Access</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Certificates of Analysis, MSDS, handling guides, and batch records — all available for download.
            Maintain compliance and traceability with our comprehensive documentation library.
          </p>
          <Button asChild className="bg-teal hover:bg-teal-light text-primary-foreground">
            <Link to="/documentation">Browse Documentation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Why Choose VIDA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Why Choose VIDA Research Group</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center">
                <div className="h-14 w-14 rounded-xl bg-teal-muted flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-teal" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Advance Your Research?
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
            Browse our catalog of high-purity compounds or request documentation for your next study.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-teal hover:bg-teal-light text-primary-foreground font-semibold">
              <Link to="/research-compounds">Browse Compounds</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}