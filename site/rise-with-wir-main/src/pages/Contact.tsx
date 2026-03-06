import { useState } from "react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thank you for reaching out. We'll respond within 48 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out with questions, partnership inquiries, or prayer requests." />

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" maxLength={255} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What is this about?" maxLength={200} />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message..." maxLength={1000} rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
                </form>
              </AnimatedSection>
            </div>

            {/* Info */}
            <div className="md:col-span-2">
              <AnimatedSection delay={150}>
                <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Office</h4>
                      <p className="text-sm text-muted-foreground">123 Hope Avenue, Westlands<br />Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">info@womeninresilience.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="text-sm text-muted-foreground">Mon – Fri: 8:00 AM – 5:00 PM<br />Sat: 9:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="YouTube">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 w-full h-48 rounded-xl bg-muted flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">📍 Map placeholder</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
