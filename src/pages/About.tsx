import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Shield, Users, Building2, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Scientific Integrity", desc: "We prioritize analytical accuracy and transparent quality reporting in everything we do." },
  { icon: Target, title: "Research Focus", desc: "Every product and service is designed with the researcher's needs at the center." },
  { icon: Award, title: "Quality First", desc: "No compound leaves our facility without passing our rigorous multi-step QC pipeline." },
  { icon: Heart, title: "Trust & Transparency", desc: "Open access to documentation, testing data, and company practices builds lasting partnerships." },
];

const timeline = [
  { year: "2019", event: "Founded in San Diego, CA with a focus on peptide research compounds." },
  { year: "2020", event: "Expanded product line to include nucleotides and small molecules." },
  { year: "2021", event: "Achieved ISO-compliant quality management system certification." },
  { year: "2022", event: "Opened dedicated analytical laboratory for in-house HPLC and MS testing." },
  { year: "2023", event: "Surpassed 10,000 orders fulfilled for research institutions worldwide." },
  { year: "2024", event: "Launched comprehensive documentation portal and enhanced COA system." },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-navy py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">About VIDA Research Group</h1>
          <p className="text-primary-foreground/60 mt-2 max-w-xl">
            A trusted U.S.-based supplier of high-purity research compounds, committed to scientific excellence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-5 w-5 text-teal" />
                <span className="text-sm font-medium text-teal uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Empowering Scientific Discovery Through Quality
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VIDA Research Group was founded with a clear mission: to provide the scientific community with 
                research-grade compounds backed by uncompromising quality standards and complete documentation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in San Diego, California — one of the world's leading biotech hubs — we operate at the 
                intersection of analytical chemistry and scientific commerce. Our team brings decades of combined 
                experience in pharmaceutical research, quality assurance, and supply chain management.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Products Available" },
                { num: "50+", label: "Countries Served" },
                { num: "99.2%", label: "Avg. Purity" },
                { num: "10K+", label: "Orders Fulfilled" },
              ].map((s) => (
                <Card key={s.label} className="border border-border">
                  <CardContent className="p-6 text-center">
                    <p className="text-2xl font-bold text-teal font-heading">{s.num}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="border border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-xl bg-teal-muted flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6">
                <div className="shrink-0 w-16 text-right">
                  <span className="font-heading font-bold text-teal">{t.year}</span>
                </div>
                <div className="relative pb-6 border-l-2 border-border pl-6">
                  <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-teal" />
                  <p className="text-sm text-muted-foreground">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 bg-slate-surface">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Users className="h-10 w-10 text-teal mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our team of chemists, quality specialists, and research professionals is dedicated to supporting the scientific community.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Dr. Sarah Chen", role: "Chief Scientific Officer" },
              { name: "Michael Rivera", role: "Director of Quality" },
              { name: "Dr. James Park", role: "Head of Analytics" },
            ].map((m) => (
              <Card key={m.name} className="border border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-6 w-6 text-muted-foreground/40" />
                  </div>
                  <p className="font-heading font-semibold text-foreground text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Partner with VIDA Research Group</h2>
          <p className="text-primary-foreground/60 max-w-md mx-auto mb-6">Learn more about how we can support your research needs.</p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-light text-primary-foreground">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
