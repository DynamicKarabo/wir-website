import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { galleryImages } from "@/lib/gallery";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="Our Journey in Pictures" 
        subtitle="A visual story of resilience, community, and the profound impact of walking together in faith." 
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Moments of Hope & Healing</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Browse through our gallery to see the beautiful faces of Women in Resilience. These moments capture our safe spaces, workshops, and the unyielding bonds formed when women support one another.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 max-w-7xl mx-auto">
            {galleryImages.map((src, i) => (
              <AnimatedSection key={src} delay={(i % 10) * 50}>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg break-inside-avoid"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`Women in Resilience Gallery ${i + 1}`} 
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white drop-shadow-md" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
