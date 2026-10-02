import { CalendarClock } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BOOKED_UNTIL_YEAR } from "../siteConfig";

const imageSrc = "/images/tale.webp";
const imageSrcMobile = "/images/tale-mobile.webp";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--hero-bg)' }}>
      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden">
        <ImageWithFallback
          src={imageSrcMobile}
          alt=""
          className="w-full h-full object-cover opacity-15 scale-150 origin-center"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Split layout container */}
      <div className="w-full grid lg:grid-cols-2 gap-0 items-center">
        
        {/* Left side - Content (centered) */}
        <div className="relative z-10 px-6 pt-28 pb-20 lg:py-32 flex items-center justify-center">
          <div className="max-w-xl space-y-8 text-center lg:text-left">
            {/* Availability badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/60">
                <CalendarClock className="w-4 h-4" />
                Fuldt booket indtil {BOOKED_UNTIL_YEAR}
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl lg:text-foreground font-heading font-medium" style={{ color: 'var(--hero-text)', letterSpacing: '-0.05em' }}>
                Dorte Linde
              </h1>
              <p className="text-xl md:text-2xl lg:text-muted-foreground font-heading font-medium" style={{ color: 'var(--hero-text)' }}>
                Hjælper kirker, foreninger og skoler med at skabe en kultur, hvor børn med særlige behov kan blomstre.
              </p>
              <p className="text-base md:text-lg" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                Jeg er fuldt booket indtil {BOOKED_UNTIL_YEAR} og kan først tage nye opgaver herefter. Men du er meget velkommen til at booke mig i {BOOKED_UNTIL_YEAR}.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="px-10 py-6 hover:scale-105 transition-all duration-300"
              >
                Anmod om tilbud
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="px-10 py-6 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lær mere
              </Button>
            </div>

            {/* Trust indicators */}
            {/* --- RETTELSE: Tilføjet 'items-center' --- */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 pt-8 text-sm">
            {['+25 års erfaring', 'Træner kirker landet over', 'Praktisk & konkret'].map((text) => (
                <div key={text} className="flex items-center gap-2"> 
                    <span className="
                        flex 
                        items-center 
                        justify-center 
                        w-8 
                        h-8 
                        bg-secondary 
                        text-primary 
                        rounded-blob
                        flex-shrink-0
                        ">
                        ✓
                    </span>
                <span className="lg:text-muted-foreground" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{text}</span>
                </div>
            ))}
            </div>
          </div>
        </div>

        {/* Right side - Image in blob shape (Desktop only) */}
        <div className="relative h-[60vh] lg:h-[90vh] items-center justify-center hidden lg:flex">
          {/* Decorative blob background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[85%] h-[85%] rounded-blob animate-morphSlow"
              style={{ 
                backgroundColor: 'var(--hero-blob-bg)',
                maxWidth: '600px',
                maxHeight: '700px'
              }}
            ></div>
          </div>
          
          {/* Image container with blob shape */}
          <div 
            className="relative w-[75%] h-[75%] overflow-hidden rounded-blob-2"
            style={{ maxWidth: '500px', maxHeight: '600px' }}
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={imageSrc} />
              <img
                src={imageSrcMobile}
                alt="Dorte Linde på scenen"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-12 left-12 w-20 h-20 border-4 border-accent rounded-blob-2 animate-float"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 bg-secondary rounded-blob animate-drift"></div>
        </div>
      </div>
    </section>
  );
}