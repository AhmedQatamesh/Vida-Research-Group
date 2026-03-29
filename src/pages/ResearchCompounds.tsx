import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Beaker, Search, SlidersHorizontal, FileCheck } from "lucide-react";
import compoundsHero from "@/assets/compounds-hero.jpg";
import api from "@/lib/woocommerce";

export default function ResearchCompoundsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("name-asc");
  const [allCompounds, setAllCompounds] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All Categories"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("products?per_page=100").then(response => {
      if (Array.isArray(response.data)) {
        setAllCompounds(response.data);
        const cats = ["All Categories", ...Array.from(new Set(
          response.data.flatMap((p: any) => p.categories?.map((c: any) => c.name) || [])
        ))] as string[];
        setCategories(cats);
      }
      setLoading(false);
    }).catch(error => {
      console.error("❌ WooCommerce Error:", error);
      setLoading(false);
    });
  }, []);

  const filtered = allCompounds
    .filter((c) => category === "All Categories" || c.categories?.some((cat: any) => cat.name === category))
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.sku?.includes(search))
    .sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "price-asc") return parseFloat(a.price || 0) - parseFloat(b.price || 0);
      return parseFloat(b.price || 0) - parseFloat(a.price || 0);
    });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-52 lg:h-64 overflow-hidden">
        <img src={compoundsHero} alt="Research Compounds" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">Research Compounds</h1>
            <p className="text-primary-foreground/60 mt-2">High-purity materials for scientific investigation</p>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name or SKU..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A–Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z–A)</SelectItem>
                <SelectItem value="price-asc">Price (Low–High)</SelectItem>
                <SelectItem value="price-desc">Price (High–Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted animate-pulse rounded-lg" style={{ paddingBottom: '150%' }} />
              ))}
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} compound{filtered.length !== 1 ? "s" : ""} found</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((c: any) => (
                  <Card key={c.id} className="group hover:shadow-lg transition-shadow border border-border bg-card">
                    <CardContent className="p-0">
                      <div className="relative w-full" style={{ paddingBottom: '150%' }}>
                        {c.images?.[0]?.src ? (
                          <img src={c.images[0].src} alt={c.name} className="absolute inset-0 w-full h-full object-contain p-4" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Beaker className="h-14 w-14 text-muted-foreground/30" />
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-teal bg-teal-muted px-2 py-0.5 rounded">
                            {c.categories?.[0]?.name || "Compound"}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                            <FileCheck className="h-3 w-3" /> COA
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-teal transition-colors">{c.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">SKU: {c.sku} · {c.stock_status === "instock" ? "In Stock" : "Out of Stock"}</p>
                        <div className="flex justify-between items-center mt-4">
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
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}