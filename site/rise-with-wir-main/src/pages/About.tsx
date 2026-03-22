import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Compass, Anchor, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Heart, title: "Gospel-Centered Restoration", desc: "We believe true healing begins with the finished work of Christ." },
  { icon: Compass, title: "Lordship Alignment", desc: "We pursue lives submitted to the authority and leadership of Jesus Christ." },
  { icon: Shield, title: "Biblical Integrity", desc: "All teaching, counsel, and structure must align with Scripture and the doctrine of the house." },
  { icon: Users, title: "Dignity and Honour", desc: "Every woman is treated with value, respect, and confidentiality." },
  { icon: Anchor, title: "Resilience Through Faith", desc: "We do not promote victim identity. We cultivate Kingdom identity." },
  { icon: Sparkles, title: "Generational Impact", desc: "We believe healed women build healthy families and influence future generations." },
  { icon: Shield, title: "Accountability and Covering", desc: "This ministry operates under the oversight and spiritual covering of Dominion Life Cathedral International." },
];

const About = () => (
  <div className="min-h-screen">
    <PageHero 
      title="About Women in Resilience" 
      subtitle="Gospel-centered restoration under the Lordship of Christ." 
    />

    {/* Opening Section */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 leading-tight">WOMEN IN RESILIENCE</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Women in Resilience is a strategic outreach expression of Dominion Life Cathedral International, advancing the house vision of transformed communities, cities and nations by restoring grieving women through the Gospel of Jesus Christ and establishing them as resilient Kingdom pillars under His Lordship.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We minister the Gospel, provide restoration, build supportive community, and empower grieving women towards renewed purpose.
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem] transition-all group-hover:scale-110" />
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Restored women living under the Lordship of Christ as resilient Kingdom pillars influencing families and communities.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We believe healed women build healthy families and influence future generations through Kingdom identity and biblical integrity.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={200}>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border-none h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] transition-all group-hover:scale-110" />
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                To minister the Gospel, provide restoration, build supportive community, and empower grieving women towards renewed purpose.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We serve under the covering of Dominion Life Cathedral International, offering gospel-centered restoration that establishes women as resilient Kingdom pillars.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Positioning Statement */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center bg-white shadow-xl rounded-[2.5rem] p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">Official Positioning Statement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Women in Resilience is a strategic outreach expression of Dominion Life Cathedral International, advancing the house vision of transformed communities, cities and nations by restoring grieving women through the Gospel of Jesus Christ and establishing them as resilient Kingdom pillars under His Lordship.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Core Values for Women in Resilience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">The principles that guide every interaction and program at Women in Resilience.</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
