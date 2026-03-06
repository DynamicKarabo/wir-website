import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

const leaders = [
  { name: "Rev. Sarah Wanjiku", title: "Founder & Executive Director", bio: "A passionate advocate for women's empowerment with 15+ years in community development and ministry." },
  { name: "Dr. Mary Achieng", title: "Programs Director", bio: "Expert in social work and community psychology, dedicated to creating impactful programs for vulnerable women." },
  { name: "James Omondi", title: "Operations Manager", bio: "Experienced in nonprofit operations and logistics, ensuring our programs reach those who need them most." },
  { name: "Faith Nyambura", title: "Community Outreach Lead", bio: "A former program graduate who now leads our community engagement and outreach initiatives." },
  { name: "Pastor David Kimani", title: "Spiritual Director", bio: "Providing spiritual guidance and pastoral care to our community with warmth and wisdom." },
  { name: "Susan Wambui", title: "Finance & Partnerships", bio: "Managing financial stewardship and building strategic partnerships to sustain our mission." },
];

const advisors = [
  { name: "Dr. Elizabeth Mwangi", title: "Professor of Social Work, University of Nairobi" },
  { name: "Hon. Margaret Otieno", title: "Community Development Advocate" },
  { name: "Rev. Peter Njoroge", title: "Senior Pastor, Grace Community Church" },
];

const Leadership = () => (
  <div className="min-h-screen">
    <PageHero title="Our Leadership" subtitle="Meet the dedicated team behind Women in Resilience." />

    {/* Leadership Team */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Leadership Team</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((l, i) => (
            <AnimatedSection key={l.name} delay={i * 100}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-5 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Users className="w-10 h-10 text-primary/50" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-heading font-semibold">{l.name}</h3>
                    <p className="text-sm text-secondary font-medium mb-3">{l.title}</p>
                    <p className="text-sm text-muted-foreground">{l.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Advisory Board */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Advisory Board</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {advisors.map((a, i) => (
            <AnimatedSection key={a.name} delay={i * 100}>
              <div className="text-center p-6 bg-card rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-secondary/60" />
                </div>
                <h3 className="font-heading font-semibold">{a.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Join CTA */}
    <section className="section-padding">
      <div className="container mx-auto text-center max-w-2xl">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6">We're always looking for passionate individuals to join our mission. Reach out to learn about opportunities.</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Get in Touch <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Leadership;
