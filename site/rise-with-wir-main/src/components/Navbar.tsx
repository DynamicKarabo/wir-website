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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="group flex items-center shrink-0">
          <img
            src={scrolled ? "/original_logo_transparent.png" : "/logo.svg"}
            alt="Women in Resilience Logo"
            className={cn(
              "w-auto object-contain transition-all duration-500 drop-shadow-sm group-hover:scale-105 origin-top-left",
              scrolled 
                ? "h-12 sm:h-14 md:h-16 relative" 
                : "absolute -top-4 lg:-top-6 left-0 h-24 sm:h-32 md:h-48 lg:h-64"
            )}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300",
                location.pathname === l.to
                  ? (scrolled ? "text-primary bg-primary/5" : "text-white bg-white/20")
                  : scrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl px-6 font-bold shadow-md hover:shadow-lg transition-all" size="sm">
            <Heart className="w-4 h-4 mr-2" /> Donate
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden p-2 rounded-xl transition-colors",
            scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
          )}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-3 rounded-2xl text-base font-semibold transition-colors",
                  location.pathname === l.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl py-6 text-lg font-bold shadow-lg">
              <Heart className="w-5 h-5 mr-2" /> Donate Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
