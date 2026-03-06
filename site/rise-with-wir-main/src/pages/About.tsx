import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Compass, Anchor, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Shield, title: "Resilience", desc: "Empowering women to overcome challenges with strength." },
  { icon: Heart, title: "Faith", desc: "Trusting in spiritual guidance and hope." },
  { icon: Users, title: "Support", desc: "Creating safe spaces where women uplift one another." },
  { icon: Anchor, title: "Unity", desc: "Building strong communities of encouragement." },
  { icon: Compass, title: "Courage", desc: "Helping women face adversity with confidence." },
];

const About = () => (
  <div className="min-h-screen">
    <PageHero 
      title="About Women in Resilience" 
      subtitle="Faith · Resilience · Community connection." 
    />

    {/* Opening Section */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 leading-tight">Guided by Faith, Driven by Purpose</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Women in Resilience (WIR) is a faith-centered nonprofit organization dedicated to empowering women facing adversity. Founded on the belief that no woman should walk through hardship alone, we provide a sanctuary of hope, healing, and practical support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the profound impact of loss, grief, and vulnerability. That is why our programs are designed not just to assist, but to deeply restore—encouraging women to rebuild their lives with dignity, spiritual strength, and the unyielding support of a sisterhood that truly cares.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img 
                src="/gallery/WhatsApp Image 2026-03-05 at 17.56.28(5).jpeg" 
                alt="Women supporting each other" 
                className="relative rounded-[2.5rem] shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-hope-bg/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection direction="right">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border-none h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] transition-all group-hover:scale-110" />
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                To create a compassionate community where women receive support, spiritual encouragement, and practical resources to rebuild their lives.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We actively walk alongside widows, single mothers, and vulnerable women. Through targeted community outreach, faith-based counseling, and skills development, we aim to bridge the gap between despair and sustainable independence.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={200}>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border-none h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem] transition-all group-hover:scale-110" />
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Empowering women to rise above adversity, rediscover strength through faith, and reflect hope within their communities.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We envision a world where every woman, regardless of her past hardships, is equipped to lead a thriving, purpose-driven life. We strive to be a beacon of light, fostering generations of resilient women who inspire change.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">The principles that guide every interaction and program at Women in Resilience.</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100}>
              <Card className="h-full text-center border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white group overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <v.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-black mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Image CTA Section */}
    <section className="section-padding bg-background pb-24">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
            <img 
              src="/gallery/WhatsApp Image 2026-03-05 at 17.56.27(3).jpeg" 
              alt="Confident smiling woman" 
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
              <div className="p-8 md:p-16 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">Join Our Sisterhood</h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-medium">
                  We are more than an organization; we are a family. Whether you need support or wish to lend a helping hand, there is always a place for you here.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <Link to="/contact">Get Involved Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
