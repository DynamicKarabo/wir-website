import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Compass, Anchor, Sparkles } from "lucide-react";

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
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8">Guided by Faith, Driven by Purpose</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Women in Resilience (WIR) is a faith-centered nonprofit organization dedicated to empowering women facing adversity. Inspired by scripture and community support, WIR provides guidance, encouragement, and practical programs to help women rebuild their lives.
          </p>
        </AnimatedSection>
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
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                To create a compassionate community where women receive support, spiritual encouragement, and practical resources to rebuild their lives.
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
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Empowering women to rise above adversity, rediscover strength through faith, and reflect hope within their communities.
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
  </div>
);

export default About;
