import { useState } from "react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Heart, Users, Building, Church, Quote, CheckCircle, Star, Globe, Shield } from "lucide-react";

const tiers = [
  {
    icon: Heart,
    title: "Individual Partner",
    desc: "Support our mission through personal giving and prayer.",
    features: ["Monthly giving options", "Prayer partnership", "Impact updates", "Annual report"],
  },
  {
    icon: Building,
    title: "Corporate Partner",
    desc: "Align your organization with a mission that transforms lives.",
    features: ["CSR alignment", "Employee engagement", "Brand visibility", "Custom programs"],
  },
  {
    icon: Church,
    title: "Church / Ministry",
    desc: "Unite your congregation with our mission of resilience.",
    features: ["Joint outreach programs", "Guest speaking", "Missions support", "Resource sharing"],
  },
];

const benefits = [
  { icon: Globe, title: "Global Impact", desc: "Your support reaches vulnerable communities across Kenya." },
  { icon: Star, title: "Transparent Reporting", desc: "Detailed impact reports on how your contribution makes a difference." },
  { icon: Shield, title: "Trusted Stewardship", desc: "Every dollar is managed with integrity and accountability." },
  { icon: Users, title: "Community Connection", desc: "Join a network of like-minded partners committed to change." },
];

const Partner = () => {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We've received your partnership inquiry and will be in touch soon." });
    setForm({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <PageHero title="Partner With Us" subtitle="Together, we can empower more women to live with dignity and hope." />

      {/* Why Partner */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Why Partner With WIR?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Partnership Tiers</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 150}>
                <Card className="h-full border-none shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                      <t.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{t.desc}</p>
                    <ul className="space-y-2 text-left">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-warm">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="text-center">
              <Quote className="w-8 h-8 text-secondary mx-auto mb-4" />
              <p className="text-lg italic text-foreground/80 leading-relaxed mb-4">
                "Partnering with WIR has been one of the most meaningful investments our company has made. Seeing the real impact on women's lives is truly inspiring."
              </p>
              <p className="font-heading font-semibold">Michael Kariuki</p>
              <p className="text-sm text-muted-foreground">CEO, Horizon Enterprises</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-xl">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Become a Partner</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" maxLength={255} />
              </div>
              <div>
                <Label htmlFor="org">Organization</Label>
                <Input id="org" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Your organization (optional)" maxLength={200} />
              </div>
              <div>
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how you'd like to partner..." maxLength={1000} rows={4} />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Inquiry</Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Partner;
