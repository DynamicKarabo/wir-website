import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHero = ({ title, subtitle, className }: Props) => (
  <section className={cn("relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden", className)}>
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/80" />
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    <div className="relative container mx-auto px-4 text-center">
      <AnimatedSection direction="down" duration={1}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 leading-[1.1] drop-shadow-sm">{title}</h1>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={200} direction="up">
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">{subtitle}</p>
        </AnimatedSection>
      )}
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default PageHero;
