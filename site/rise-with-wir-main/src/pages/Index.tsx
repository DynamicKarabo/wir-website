import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Users, Globe, Handshake, BookOpen, Shield, Sparkles, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Counter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let c = 0;
        const step = Math.max(1, Math.floor(end / 60));
        const timer = setInterval(() => {
          c += step;
          if (c >= end) { setCount(end); clearInterval(timer); }
          else setCount(c);
        }, 30);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-secondary">{count.toLocaleString()}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const programs = [
  { icon: Users, title: "Widow Support Groups", desc: "Safe spaces for widowed women to find community, healing, and shared strength." },
  { icon: BookOpen, title: "Skills Training", desc: "Practical training in entrepreneurship, finance, and vocational skills for independence." },
  { icon: Shield, title: "Faith & Counseling", desc: "Spiritual guidance and professional counseling to rebuild hope and resilience." },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/hero_women_support_1772813700782.png" 
          alt="Women supporting each other" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-background/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center max-w-5xl">
        <AnimatedSection>
          <span className="inline-block px-6 py-2 rounded-2xl bg-secondary/20 text-secondary text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm border border-secondary/30">
            Faith · Resilience · Community
          </span>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] mb-8 drop-shadow-sm">
            Together in Grief.<br />
            <span className="text-secondary">Together in Strength.</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed font-medium">
            Women in Resilience empowers widows and vulnerable women to rebuild their lives through faith, community, and resilience.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <p className="text-lg md:text-xl text-secondary italic font-serif mb-12 drop-shadow-sm">
            “A bruised reed he will not break.” – Matthew 12:20
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-7 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <Link to="/contact">Join Our Community</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-2xl font-bold backdrop-blur-sm transition-all hover:border-white/60">
              <Link to="/partner">Partner With Us <Handshake className="w-6 h-6 ml-2" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Mission */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <Sparkles className="w-8 h-8 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Women in Resilience exists to empower widowed and vulnerable women by providing holistic support through faith-based programs, skills training, and community building — restoring dignity and creating pathways to self-sufficiency.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Impact Numbers */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={2500} label="Women Served" suffix="+" />
          <Counter end={45} label="Communities Reached" />
          <Counter end={12} label="Active Programs" />
          <Counter end={80} label="Partners & Donors" suffix="+" />
        </div>
      </div>
    </section>

    {/* Programs Preview */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">What We Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our programs are designed to meet women where they are and walk with them toward a brighter future.</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {programs.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 150}>
              <Card className="h-full hover:shadow-lg transition-shadow border-none bg-card group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/programs">View All Programs <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Testimonial */}
    <section className="section-padding bg-warm">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shrink-0">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <div>
              <Quote className="w-8 h-8 text-secondary mb-3" />
              <p className="text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-4">
                "Through WIR, I found not just support, but a family. They helped me learn new skills, rebuild my confidence, and discover that my story isn't over — it's just beginning."
              </p>
              <p className="font-heading font-semibold">Grace Muthoni</p>
              <p className="text-sm text-muted-foreground">Program Graduate, Nairobi</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      <div className="relative container mx-auto px-4 text-center">
        <AnimatedSection>
          <Heart className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Your support transforms lives. Partner with us to empower more women toward resilience and independence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
              <Link to="/partner">Become a Partner</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
