import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Beaker, ShoppingCart, FileText, AlertTriangle, ChevronLeft, Minus, Plus, CheckCircle2 } from "lucide-react";
import api from "@/lib/woocommerce";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;
    api.get(`products?slug=${id}`).then(response => {
      if (Array.isArray(response.data) && response.data.length > 0) {
        const p = response.data[0];
        setProduct(p);
        if (p.related_ids?.length > 0) {
          api.get(`products?include=${p.related_ids.slice(0, 4).join(",")}`).then(r => {
            if (Array.isArray(r.data)) setRelatedProducts(r.data);
          });
        }
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.src,
        slug: product.slug,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto" />
            <div className="h-96 bg-muted rounded" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Button asChild className="mt-4">
            <Link to="/research-compounds">Back to Compounds</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/research-compounds" className="hover:text-foreground flex items-center gap-1">
              <ChevronLeft className="h-3 w-3" /> Research Compounds
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative w-full bg-muted rounded-xl overflow-hidden" style={{ paddingBottom: '150%' }}>
                {product.images?.[selectedImage]?.src ? (
                  <img
                    src={product.images[selectedImage].src}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-6"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Beaker className="h-24 w-24 text-muted-foreground/20" />
                  </div>
                )}
              </div>
              {product.images?.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {product.images.map((img: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === i ? "border-teal" : "border-border"}`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <Badge className="bg-teal-muted text-teal border-0 mb-3">
                {product.categories?.[0]?.name || "Compound"}
              </Badge>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-sm text-muted-foreground mb-4">SKU: {product.sku}</p>

              <div className="flex items-center gap-3 mb-6">
                {product.sale_price ? (
                  <>
                    <p className="text-3xl font-heading font-bold text-foreground">${product.sale_price}</p>
                    <p className="text-xl font-heading text-muted-foreground line-through">${product.regular_price}</p>
                  </>
                ) : (
                  <p className="text-3xl font-heading font-bold text-foreground">${product.price}</p>
                )}
              </div>

              <div
                className="text-muted-foreground leading-relaxed mb-6 text-sm"
                dangerouslySetInnerHTML={{ __html: product.short_description || product.description || "" }}
              />

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { l: "Stock Status", v: product.stock_status === "instock" ? "In Stock" : "Out of Stock" },
                  { l: "Stock Qty", v: product.stock_quantity ?? "N/A" },
                  { l: "Weight", v: product.weight || "N/A" },
                  { l: "Type", v: product.type || "Simple" },
                ].map((item) => (
                  <div key={item.l} className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">{item.l}</p>
                    <p className="text-sm font-semibold text-foreground">{item.v}</p>
                  </div>
                ))}
              </div>

              {/* Quantity & Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button className="p-2.5 hover:bg-muted" onClick={() => setQty(Math.max(1, qty - 1))}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 font-medium text-sm">{qty}</span>
                  <button className="p-2.5 hover:bg-muted" onClick={() => setQty(qty + 1)}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  size="lg"
                  className={`flex-1 gap-2 text-primary-foreground transition-colors ${added ? "bg-green-600 hover:bg-green-700" : "bg-teal hover:bg-teal-light"}`}
                  onClick={handleAddToCart}
                  disabled={product.stock_status !== "instock"}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {added ? "Added to Cart! ✓" : product.stock_status !== "instock" ? "Out of Stock" : "Add to Cart"}
                </Button>
              </div>

              <Button variant="outline" className="w-full gap-2 mb-6">
                <FileText className="h-4 w-4" /> Request COA / Documentation
              </Button>

              {/* RUO Notice */}
              <div className="bg-muted border border-border rounded-lg p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Research Use Only</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    This product is intended solely for laboratory research purposes. Not for human consumption, diagnostic, or therapeutic use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" className="mt-16">
            <TabsList className="bg-muted w-full justify-start">
              <TabsTrigger value="details">Scientific Details</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="handling">Handling & Storage</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Product Specifications</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        ["SKU", product.sku],
                        ["Type", product.type],
                        ["Weight", product.weight || "N/A"],
                        ["Stock Status", product.stock_status === "instock" ? "In Stock" : "Out of Stock"],
                        ["Stock Quantity", product.stock_quantity ?? "N/A"],
                        ["Tags", product.tags?.map((t: any) => t.name).join(", ") || "N/A"],
                      ].map(([k, v]) => (
                        <tr key={k} className="border-b border-border">
                          <td className="py-2.5 text-muted-foreground font-medium">{k}</td>
                          <td className="py-2.5 text-foreground">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Quality Assurance</h3>
                  <ul className="space-y-3">
                    {["HPLC purity verification", "Mass spectrometry confirmation", "Endotoxin testing", "Third-party lab validation"].map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-teal shrink-0" /> {i}
                      </li>
                    ))}
                  </ul>
                  {product.description && (
                    <div className="mt-6">
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Description</h3>
                      <div
                        className="text-sm text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="documentation" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Certificate of Analysis (COA)", "Material Safety Data Sheet (MSDS)", "Product Specification Sheet"].map((doc) => (
                  <Card key={doc} className="border border-border">
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-8 w-8 text-teal" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{doc}</p>
                        <p className="text-xs text-muted-foreground">PDF Document</p>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">Download</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="handling" className="mt-6">
              <div className="max-w-2xl space-y-4">
                {[
                  { t: "Storage Conditions", d: "Store in a cool, dry place. Keep container tightly sealed. Protect from light and moisture." },
                  { t: "Handling Precautions", d: "Handle with appropriate laboratory PPE including gloves, lab coat, and safety glasses. Use in a well-ventilated area." },
                  { t: "Shipping", d: "Shipped with appropriate cold chain packaging. Tracking and temperature monitoring included with all orders." },
                ].map((s) => (
                  <div key={s.t} className="bg-muted rounded-lg p-5">
                    <h4 className="font-heading font-semibold text-foreground mb-2">{s.t}</h4>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Compounds</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((c: any) => (
                  <Card key={c.id} className="group hover:shadow-md transition-shadow border border-border">
                    <CardContent className="p-0">
                      <div className="relative w-full" style={{ paddingBottom: '150%' }}>
                        {c.images?.[0]?.src ? (
                          <img src={c.images[0].src} alt={c.name} className="absolute inset-0 w-full h-full object-contain p-4" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Beaker className="h-10 w-10 text-muted-foreground/30" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-teal transition-colors">{c.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{c.stock_status === "instock" ? "In Stock" : "Out of Stock"}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="font-bold text-foreground text-sm">${c.price}</span>
                          <Button asChild size="sm" variant="ghost" className="text-xs text-teal">
                            <Link to={`/product/${c.slug}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}