import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHero = ({ title, subtitle, className }: Props) => (
  <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden", className)}>
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
    <div className="relative container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
