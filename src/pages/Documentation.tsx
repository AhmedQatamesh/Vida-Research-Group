import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search, Download, Filter } from "lucide-react";

const documents = [
  { name: "BPC-157 Acetate COA – Lot V2024-0812", type: "COA", product: "BPC-157 Acetate", lot: "V2024-0812", date: "2024-08-12" },
  { name: "TB-500 Fragment COA – Lot V2024-0715", type: "COA", product: "TB-500 Fragment", lot: "V2024-0715", date: "2024-07-15" },
  { name: "GHK-Cu Complex COA – Lot V2024-0901", type: "COA", product: "GHK-Cu Complex", lot: "V2024-0901", date: "2024-09-01" },
  { name: "NAD+ Sodium Salt COA – Lot V2024-0620", type: "COA", product: "NAD+ Sodium Salt", lot: "V2024-0620", date: "2024-06-20" },
  { name: "BPC-157 Acetate MSDS", type: "MSDS", product: "BPC-157 Acetate", lot: "—", date: "2024-01-15" },
  { name: "TB-500 Fragment MSDS", type: "MSDS", product: "TB-500 Fragment", lot: "—", date: "2024-01-15" },
  { name: "General Handling Guidelines", type: "Guide", product: "All Products", lot: "—", date: "2024-03-01" },
  { name: "Cold-Chain Shipping Protocol", type: "Guide", product: "All Products", lot: "—", date: "2024-02-10" },
  { name: "Peptide Storage Best Practices", type: "Guide", product: "Peptides", lot: "—", date: "2024-04-01" },
  { name: "Rapamycin COA – Lot V2024-1005", type: "COA", product: "Rapamycin", lot: "V2024-1005", date: "2024-10-05" },
  { name: "NMN Powder COA – Lot V2024-0830", type: "COA", product: "NMN Powder", lot: "V2024-0830", date: "2024-08-30" },
  { name: "Batch Record Template", type: "Record", product: "All Products", lot: "—", date: "2024-01-01" },
];

const docTypes = ["All Types", "COA", "MSDS", "Guide", "Record"];

export default function DocumentationPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filtered = documents
    .filter((d) => typeFilter === "All Types" || d.type === typeFilter)
    .filter((d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.product.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <section className="bg-navy py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">Documentation</h1>
          <p className="text-primary-foreground/60 mt-2 max-w-xl">
            Access COAs, MSDS, handling guides, and batch records. All documentation is organized by product and lot number.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {docTypes.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            {filtered.map((doc, i) => (
              <Card key={i} className="border border-border bg-card hover:shadow-sm transition-shadow">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-teal-muted flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{doc.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {doc.type} · {doc.product} · {doc.lot !== "—" ? `Lot: ${doc.lot} · ` : ""}{doc.date}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1.5 text-xs shrink-0">
                    <Download className="h-3.5 w-3.5" /> Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No documents found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
