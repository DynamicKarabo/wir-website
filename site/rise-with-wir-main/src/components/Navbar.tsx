import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/leadership", label: "Leadership" },
  { to: "/partner", label: "Partner With Us" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">W</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={cn("font-heading font-bold text-lg", scrolled ? "text-foreground" : "text-primary-foreground md:text-foreground")}>WIR</span>
            <span className={cn("text-[10px] tracking-wider uppercase", scrolled ? "text-muted-foreground" : "text-primary-foreground/70 md:text-muted-foreground")}>Women in Resilience</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === l.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button className="ml-3 bg-secondary text-secondary-foreground hover:bg-secondary/90" size="sm">
            <Heart className="w-4 h-4 mr-1" /> Donate
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === l.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Heart className="w-4 h-4 mr-1" /> Donate
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
