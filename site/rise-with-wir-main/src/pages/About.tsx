import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Gem, Eye, Target, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Faith", desc: "Grounded in love and spiritual strength." },
  { icon: Shield, title: "Resilience", desc: "Building strength to overcome adversity." },
  { icon: Users, title: "Community", desc: "Empowerment through togetherness." },
  { icon: Gem, title: "Dignity", desc: "Every woman deserves respect and honor." },
  { icon: BookOpen, title: "Integrity", desc: "Transparent and accountable in all we do." },
  { icon: Eye, title: "Compassion", desc: "Walking alongside those in need with empathy." },
];

const milestones = [
  { year: "2015", event: "Founded with a vision to support widowed women in Nairobi." },
  { year: "2017", event: "Launched the first Widow Support Group program serving 50 women." },
  { year: "2019", event: "Expanded Skills Training to 3 communities across Kenya." },
  { year: "2021", event: "Reached 1,000 women through faith and community programs." },
  { year: "2023", event: "Established partnerships with 40+ organizations worldwide." },
  { year: "2025", event: "Serving 2,500+ women across 45 communities." },
];

const About = () => (
  <div className="min-h-screen">
    <PageHero title="About Us" subtitle="Our story of faith, resilience, and community impact." />

    {/* Our Story */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Women in Resilience was born from a deep conviction that no woman should face the challenges of widowhood or vulnerability alone. Founded in 2015, our journey began in the heart of Nairobi, where a small group of women came together to support each other through faith and fellowship.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What started as weekly gatherings has grown into a comprehensive ministry reaching thousands of women across Kenya and beyond. Today, WIR stands as a testament to the power of community, faith, and the unbreakable spirit of resilient women.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Journey</h2>
        </AnimatedSection>
        <div className="space-y-0 relative">
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 100}>
              <div className={`relative flex items-start gap-6 pb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-[22px] md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background -translate-x-1/2 z-10" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm font-semibold text-secondary">{m.year}</span>
                  <p className="text-foreground mt-1">{m.event}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <Card className="h-full border-none shadow-sm bg-primary/5">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower widowed and vulnerable women through holistic faith-based programs, practical skills training, and community building — restoring dignity and creating pathways to self-sufficiency.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <Card className="h-full border-none shadow-sm bg-secondary/5">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every widowed and vulnerable woman is empowered to live with dignity, purpose, and hope — thriving as a valued member of her community.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding bg-warm">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100}>
              <Card className="h-full text-center border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
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
