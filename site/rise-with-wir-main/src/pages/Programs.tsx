import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BookOpen, Shield, Globe, ArrowRight, CheckCircle, Handshake } from "lucide-react";

const programs = [
  {
    icon: Users,
    title: "Widow Support Groups",
    desc: "Safe, nurturing spaces where widowed women gather for fellowship, emotional support, and shared healing. Our groups provide a foundation of belonging and mutual encouragement.",
    features: ["Weekly group meetings", "Peer mentoring", "Grief support sessions", "Community celebrations"],
  },
  {
    icon: BookOpen,
    title: "Skills Training & Empowerment",
    desc: "Equipping women with practical skills in entrepreneurship, financial literacy, tailoring, agriculture, and more — enabling them to build sustainable livelihoods.",
    features: ["Business training workshops", "Financial literacy classes", "Vocational skills", "Micro-enterprise support"],
  },
  {
    icon: Shield,
    title: "Faith & Counseling",
    desc: "Providing spiritual guidance, professional counseling, and holistic healing to help women process trauma, rebuild confidence, and rediscover purpose.",
    features: ["One-on-one counseling", "Bible study groups", "Spiritual retreats", "Prayer support networks"],
  },
  {
    icon: Globe,
    title: "Community Outreach",
    desc: "Extending our reach into underserved communities through health education, advocacy, and awareness campaigns that break stigma and create lasting change.",
    features: ["Health awareness campaigns", "Advocacy and rights education", "Community partnerships", "Youth mentorship"],
  },
];

const steps = [
  { num: "01", title: "Identify", desc: "We identify widowed and vulnerable women in communities across Kenya." },
  { num: "02", title: "Welcome", desc: "Women are welcomed into supportive groups and connected with resources." },
  { num: "03", title: "Empower", desc: "Through programs, training, and counseling, women gain skills and confidence." },
  { num: "04", title: "Transform", desc: "Women become leaders and advocates, transforming their communities." },
];

const Programs = () => (
  <div className="min-h-screen">
    <PageHero title="Our Programs" subtitle="Holistic programs designed to restore hope and build resilience." />

    {/* Programs Grid */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl space-y-10">
        {programs.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 100}>
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-10">
                    <p.icon className="w-20 h-20 text-primary/60" />
                  </div>
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-heading font-semibold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* How We Help */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">How We Help</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 150}>
              <div className="text-center">
                <div className="text-5xl font-heading font-bold text-secondary/30 mb-3">{s.num}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto text-center max-w-2xl">
        <AnimatedSection>
          <Handshake className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-heading font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-6">Whether you want to volunteer your time or support a program, there's a place for you in our mission.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/partner">Partner With Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Programs;
