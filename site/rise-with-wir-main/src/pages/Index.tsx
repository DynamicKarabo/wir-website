import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Users, Globe, Handshake, BookOpen, Shield, Sparkles, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const heroImages = [
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.24.jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.24(1).jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.24(2).jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.24(3).jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.25.jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.25(1).jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.25(2).jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.26.jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.26(1).jpeg",
  "/gallery/WhatsApp Image 2026-03-05 at 17.56.26(2).jpeg",
];

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

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 sm:pt-0">
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Women in Resilience Gallery"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
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
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-7 rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl">
              <Link to="/partner">Partner With Us <Handshake className="w-6 h-6 ml-2" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* About Short */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[2.5rem] -rotate-2" />
              <img 
                src="/gallery/WhatsApp Image 2026-03-05 at 17.56.29.jpeg" 
                alt="Community gathering" 
                className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">
              About Women in Resilience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-medium">
              Women in Resilience (WIR) is a nonprofit organization dedicated to empowering women to overcome life’s hardships through faith, support, and community connection. 
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We understand that the journey through loss, grief, or extreme adversity is rarely linear. Through tailored workshops, intimate mentorship, and active outreach programs, WIR ensures no woman has to walk alone. We provide physical, emotional, and spiritual tools so every woman can rediscover her strength, realize her divine purpose, and spread hope within her family and community.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-xl px-8 py-6 font-bold">
              <Link to="/about">Read Our Full Story</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-hope-bg/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={100}>
            <Card className="h-full border-none shadow-xl bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-heading font-black mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  To create a supportive community where women find comfort, guidance, and strength in their faith while rebuilding their lives with renewed purpose.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card className="h-full border-none shadow-xl bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-heading font-black mb-6">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Empowering women to rise above adversity and reflect God's love and hope.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
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
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[10rem] -z-10" />
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Our Programs</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Our programs are designed to meet women where they are and walk with them toward a brighter future, restoring dignity and hope.</p>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: Sparkles, title: "Resilience Workshops", desc: "Interactive sessions offering emotional, spiritual, and practical tools for overcoming adversity." },
            { icon: Users, title: "Support Groups", desc: "Safe environments where women share experiences and uplift one another in faith." },
            { icon: BookOpen, title: "Empowerment Resources", desc: "Guides, devotionals, and materials that support women on their healing journey." },
            { icon: Handshake, title: "Outreach Initiatives", desc: "Partnerships and events providing mentorship and practical community support." },
          ].map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 100}>
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-[2rem] group overflow-hidden">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <p.icon className="w-8 h-8 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-black mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="text-center mt-16">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-7 text-lg font-bold shadow-xl">
              <Link to="/programs">Explore All Programs <ArrowRight className="w-6 h-6 ml-2" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Impact Numbers */}
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <AnimatedSection delay={100} direction="none">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-heading font-black text-secondary mb-4">5000+</div>
              <div className="text-xl text-white/80 font-medium max-w-[200px] mx-auto leading-tight">Women we aim to reach through our programs</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200} direction="none">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-heading font-black text-secondary mb-4">85%</div>
              <div className="text-xl text-white/80 font-medium max-w-[200px] mx-auto leading-tight">Target confidence improvement among participants</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300} direction="none">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-heading font-black text-secondary mb-4">Faith</div>
              <div className="text-xl text-white/80 font-medium max-w-[200px] mx-auto leading-tight">Centered support network community driven</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Leadership Highlight */}
    <section className="section-padding bg-hope-bg/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          <AnimatedSection direction="right" className="w-full md:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img 
                src="/nonhlanhla.jpg" 
                alt="Nonhlanhla Abegail Mokoroane" 
                className="relative rounded-[2.5rem] shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="w-full md:w-3/5">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6">
              Our Visionary
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 leading-tight">
              Nonhlanhla Abegail Mokoroane
            </h2>
            <p className="text-xl text-secondary font-bold mb-8">Visionary and Operations Director</p>
            <div className="relative mb-10">
              <Quote className="absolute -left-8 -top-8 w-16 h-16 text-primary/10 -z-10" />
              <p className="text-xl italic text-muted-foreground leading-relaxed">
                "Widowed at 34, she raised two children alone and found healing and purpose through faith and community. Her journey inspired the creation of Women in Resilience."
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-xl px-8 py-6 font-bold">
              <Link to="/leadership">Meet the Leadership Team</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Partner CTA */}
    <section className="relative py-32 overflow-hidden mx-4 md:mx-8 lg:mx-16 my-16 rounded-[3rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      <div className="relative container mx-auto px-4 text-center">
        <AnimatedSection>
          <Heart className="w-16 h-16 text-secondary mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
            Partner With Us to Uplift Women & Create Lasting Hope
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
            Your support transforms lives. Partner with Women in Resilience to strengthen communities and reflect God's love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-10 py-8 rounded-2xl font-black text-xl shadow-2xl hover:-translate-y-1 transition-all">
              <Link to="/partner">Become a Partner</Link>
            </Button>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-8 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              <Link to="/contact">Support Our Mission</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
  );
};

export default Index;
