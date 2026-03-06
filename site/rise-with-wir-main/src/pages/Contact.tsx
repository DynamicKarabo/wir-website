import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Get In Touch" 
        subtitle="We're here to listen, support, and walk with you." 
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Info & Imagery */}
            <AnimatedSection direction="right" className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
                  Let's Start a <span className="text-primary">Conversation</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Whether you have questions about our programs, want to volunteer, or need support, we are ready to connect with you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-lg mb-1">Phone / WhatsApp</h4>
                    <p className="text-muted-foreground font-medium">061 138 2660</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground font-medium">womeninresilience@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:col-span-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-lg mb-1">Office Address</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      28A Caledon Drive, Norkem Park Ext 4<br />
                      Kempton Park, Gauteng, 1618
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/contact_community_imagery_1772813932406.png" 
                  alt="Community support" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="left">
              <Card className="border-none shadow-2xl rounded-[3rem] bg-white overflow-hidden p-2">
                <CardContent className="p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    <h3 className="text-3xl font-heading font-black">Send a Message</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                        <Input required className="rounded-2xl border-muted bg-muted/30 focus:bg-white h-14 text-lg font-medium" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                        <Input required type="email" className="rounded-2xl border-muted bg-muted/30 focus:bg-white h-14 text-lg font-medium" placeholder="jane@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                      <Input required className="rounded-2xl border-muted bg-muted/30 focus:bg-white h-14 text-lg font-medium" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-wider text-muted-foreground ml-1">Your Message</label>
                      <Textarea required className="rounded-2xl border-muted bg-muted/30 focus:bg-white min-h-[150px] text-lg font-medium" placeholder="Write your message here..." />
                    </div>
                    <Button disabled={isSubmitting} type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-16 rounded-2xl font-black text-xl shadow-xl flex gap-3">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="w-6 h-6" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-hope-bg/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.840781745266!2d28.23238!3d-26.06915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95101a7428383b%3A0xc34346ed60842797!2s28A%20Caledon%20Dr%2C%20Norkem%20Park%2C%20Kempton%20Park%2C%201618%2C%20South%20Africa!5e0!3m2!1sen!2ske!4v1709745000000!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="py-16 text-center">
        <AnimatedSection>
          <p className="text-2xl md:text-3xl font-heading font-black text-primary/80">
            Empowering Women. Strengthening Faith. Building Resilience.
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Contact;
