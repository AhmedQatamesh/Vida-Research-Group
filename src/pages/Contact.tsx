import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="bg-navy py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/60 mt-2">Get in touch with our team for inquiries, orders, or technical support.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Contact Information</h2>
              {[
                { icon: MapPin, label: "Address", value: "123 Research Blvd, Suite 400\nSan Diego, CA 92121" },
                { icon: Phone, label: "Phone", value: "(858) 555-0142" },
                { icon: Mail, label: "Email", value: "info@vidaresearch.com" },
                { icon: Clock, label: "Business Hours", value: "Mon–Fri: 8:00 AM – 5:00 PM PST" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-muted flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{c.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-muted rounded-xl h-48 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Map Placeholder</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border">
                <CardContent className="p-6 lg:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="h-16 w-16 rounded-full bg-teal-muted flex items-center justify-center mx-auto mb-4">
                        <Send className="h-7 w-7 text-teal" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent</h3>
                      <p className="text-muted-foreground">Thank you for contacting us. We'll respond within 24–48 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                      className="space-y-5"
                    >
                      <h2 className="font-heading text-xl font-bold text-foreground mb-2">Send a Message</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Smith" required />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@institution.edu" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org">Organization</Label>
                          <Input id="org" placeholder="University / Company" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Product inquiry, COA request, etc." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" rows={5} placeholder="How can we help you?" required />
                      </div>
                      <Button type="submit" size="lg" className="bg-teal hover:bg-teal-light text-primary-foreground w-full sm:w-auto">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
