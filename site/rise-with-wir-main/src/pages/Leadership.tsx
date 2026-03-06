import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Quote } from "lucide-react";

const leaders = [
  {
    name: "Nonhlanhla Abegail Mokoroane",
    role: "Visionary and Operations Director",
    description: "Widowed at 34, she raised two children and discovered healing through faith and community. Her journey inspired the founding of Women in Resilience.",
    image: "/leadership_portrait_1772813739989.png"
  },
  {
    name: "Zinhle Mkhabela",
    role: "Administrative and Project Management Director",
    description: "Oversees organizational administration and ensures projects are effectively planned and executed with precision and care.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Shadrack Mokoroane",
    role: "Multimedia and Marketing Director",
    description: "Leads marketing strategy, digital storytelling, and communication to expand WIR's reach and engagement across all platforms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

const Leadership = () => (
  <div className="min-h-screen">
    <PageHero 
      title="The Hearts Behind WIR" 
      subtitle="Dedicated leaders committed to the mission of restoration and resilience." 
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {leaders.map((l, i) => (
            <AnimatedSection key={l.name} delay={i * 100}>
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white group overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={l.image} 
                    alt={l.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                        <Twitter className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-black mb-2 group-hover:text-primary transition-colors">{l.name}</h3>
                  <p className="text-secondary font-bold mb-6 text-sm uppercase tracking-wider">{l.role}</p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {l.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Advisory Council Highlight or Mission Quote */}
    <section className="section-padding bg-hope-bg/30 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote className="w-64 h-64 -translate-x-12 -translate-y-12" />
        <Quote className="w-64 h-64 translate-x-12 translate-y-12 absolute bottom-0 right-0 rotate-180" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 italic leading-tight">
            "Leadership is not about being in charge. It is about taking care of those in your charge."
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Leadership;
