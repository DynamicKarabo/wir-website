import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Heart, LineChart, Globe, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Globe,
    title: "Community Impact",
    desc: "Join a network that is directly transforming the lives of widows and vulnerable women in local communities."
  },
  {
    icon: LineChart,
    title: "Measurable Outcomes",
    desc: "We focus on data-driven results, ensuring that every partnership creates tangible change and growth."
  },
  {
    icon: Zap,
    title: "Scalable Programs",
    desc: "Our model is built to grow, allowing us to replicate success across new regions and reach more women."
  },
  {
    icon: Heart,
    title: "Faith-Centered Empowerment",
    desc: "Our programs combine practical support with spiritual guidance for holistic, lasting restoration."
  }
];

const Partner = () => (
  <div className="min-h-screen">
    <PageHero 
      title="Partner With Us" 
      subtitle="Join our mission to empower women and reflect hope." 
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto mb-20">
          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">
              Why Partner With <span className="text-primary">Women in Resilience?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Women in Resilience offers a unique faith-based approach to empowering women. Our programs combine emotional support, spiritual guidance, and community engagement to create lasting impact.
            </p>
            <div className="space-y-4">
              {[
                "Transparent financial stewardship",
                "Proven track record of success",
                "Direct connection to community needs",
                "Faith-centered values and mission"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-lg font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <Card key={b.title} className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <b.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-black mb-3">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Dual CTA Section */}
        <AnimatedSection>
          <div className="relative py-20 px-8 rounded-[3rem] overflow-hidden text-center max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-8">Ready to make an impact?</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
                Choose how you want to support our mission. Whether through direct partnership or a donation, your contribution makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-8 rounded-2xl font-black text-xl shadow-xl">
                  <Link to="/contact">Become a Partner</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-10 py-8 rounded-2xl font-black text-xl">
                  <Link to="/contact">Support Our Mission <ArrowRight className="w-6 h-6 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Partner;
