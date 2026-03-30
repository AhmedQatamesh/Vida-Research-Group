import Layout from "@/components/Layout";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <Layout>
      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground">{title}</h1>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm prose-slate">
          {children}
        </div>
      </section>
    </Layout>
  );
}
