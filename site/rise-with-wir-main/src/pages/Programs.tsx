import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, BookOpen, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Sparkles,
    title: "Resilience Workshops",
    description: "Interactive workshops focused on emotional healing, self-care, and personal growth. Our sessions provide practical tools to navigate life's toughest transitions.",
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Users,
    title: "Community Support Groups",
    description: "Faith-based support groups where women share their stories, receive encouragement, and build lasting bonds in a safe, compassionate environment.",
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: BookOpen,
    title: "Empowerment Resources",
    description: "Free materials including devotionals, guides, and inspirational stories designed to nourish the spirit and provide daily encouragement.",
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Handshake,
    title: "Outreach Initiatives",
    description: "Community partnerships providing mentorship, events, and practical assistance to women in need throughout the region.",
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  }
];

const Programs = () => (
  <div className="min-h-screen">
    <PageHero 
      title="Programs That Restore Strength" 
      subtitle="We walk beside you on the journey to healing and hope." 
    />

    {/* Featured Programs Grid */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 100} direction={i % 2 === 0 ? "right" : "left"}>
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white group overflow-hidden">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl ${p.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <p.icon className={`w-8 h-8 ${p.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-heading font-black mb-6">{p.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {p.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Community Imagery Section */}
    <section className="py-24 bg-hope-bg/30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          <AnimatedSection direction="right" className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] -rotate-2" />
              <img 
                src="/gallery/WhatsApp Image 2026-03-05 at 17.56.31.jpeg" 
                alt="Women gathering in community" 
                className="relative rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">
              A Safe Space to <span className="text-primary">Grow Together</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Our programs are more than just services; they are invitations to join a sisterhood. Whether you're seeking emotional healing, spiritual growth, or practical mentorship, you'll find a community ready to welcome you with open arms.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              We structure our initiatives carefully to meet women at their immediate point of need while paving a clear path toward long-term resilience. Every workshop, support ring, and resource packet is infused with the profound belief that restoration is possible for everyone.
            </p>
            <div className="space-y-6 mb-12">
              {[
                "Faith-centered approach to healing",
                "Small, intimate support circles",
                "Mentorship from experienced leaders",
                "Resources you can access anywhere"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-8 rounded-2xl font-black text-xl shadow-xl">
              <Link to="/contact">Join a Support Group</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
