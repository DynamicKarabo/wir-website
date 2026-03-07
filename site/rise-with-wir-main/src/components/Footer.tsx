import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/newwlogo.svg"
              alt="Women in Resilience Logo" 
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain"
            />
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Empowering Women. Strengthening Faith. Building Resilience.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { to: "/about", label: "About Us" },
              { to: "/programs", label: "Our Programs" },
              { to: "/leadership", label: "Leadership" },
              { to: "/gallery", label: "Gallery" },
              { to: "/partner", label: "Partner With Us" },
              { to: "/contact", label: "Contact" },
              { to: "/profile.pdf", label: "Company Profile", external: true },
            ].map((l) => (
              <li key={l.to}>
                {l.external ? (
                  <a href={l.to} target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
                    {l.label}
                  </a>
                ) : (
                  <Link to={l.to} className="hover:text-secondary transition-colors">{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 28A Caledon Drive, Norkem Park Ext 4, Kempton Park, Gauteng, 1618</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> 061 138 2660</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@womeninresilience.co.za</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Stay Connected</h4>
          <p className="text-sm text-primary-foreground/70 mb-3">Subscribe to our newsletter for updates and stories of hope.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0">Join</Button>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Women in Resilience. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-secondary" /> for a resilient world</p>
      </div>
    </div>
  </footer>
);

export default Footer;
