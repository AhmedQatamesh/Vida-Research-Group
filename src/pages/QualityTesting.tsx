import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Microscope, FlaskConical, Thermometer, FileCheck, Award, BadgeCheck } from "lucide-react";
import qualityImage from "@/assets/quality-lab.jpg";

const qcSteps = [
  { icon: FlaskConical, title: "Raw Material Sourcing", desc: "Compounds are sourced from vetted, GMP-compliant manufacturers with documented supply chains." },
  { icon: Microscope, title: "HPLC Purity Analysis", desc: "Every batch undergoes High-Performance Liquid Chromatography to verify purity meets specifications." },
  { icon: Shield, title: "Mass Spectrometry", desc: "Identity confirmation via LC-MS/MS ensures molecular integrity and absence of impurities." },
  { icon: BadgeCheck, title: "Third-Party Verification", desc: "Independent laboratories validate our results, ensuring unbiased quality confirmation." },
  { icon: Thermometer, title: "Stability Testing", desc: "Accelerated stability studies confirm shelf-life claims under recommended storage conditions." },
  { icon: FileCheck, title: "Documentation & Release", desc: "Comprehensive COA generated, lot recorded, and product released only after passing all QC checkpoints." },
];

const standards = [
  { title: "Purity Standards", items: ["≥95% minimum purity threshold", "HPLC-UV and HPLC-MS verification", "Endotoxin screening for peptides", "Heavy metals analysis"] },
  { title: "Handling Standards", items: ["Temperature-controlled storage", "Desiccated environments", "Light-protected packaging", "Cold-chain shipping available"] },
  { title: "Documentation Practices", items: ["Lot-specific COAs", "MSDS for all products", "Batch records maintained 5+ years", "Full chain of custody"] },
];

export default function QualityTestingPage() {
  return (
    <Layout>
      <section className="relative h-52 lg:h-64 overflow-hidden">
        <img src={qualityImage} alt="Quality Testing Lab" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">Quality & Testing</h1>
            <p className="text-primary-foreground/60 mt-2">Our commitment to analytical rigor and traceability</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <Award className="h-12 w-12 text-teal mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Uncompromising Analytical Standards</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every compound sold by VIDA Research Group undergoes a rigorous multi-step quality control pipeline. 
            From raw material sourcing to final release, our process ensures consistent purity, identity, and documentation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">Quality Control Pipeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcSteps.map((step, i) => (
              <Card key={step.title} className="border border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-teal-muted flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-teal" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">Standards & Practices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((s) => (
              <div key={s.title}>
                <h3 className="font-heading font-semibold text-foreground mb-4">{s.title}</h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
