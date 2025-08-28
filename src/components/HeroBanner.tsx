import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-luxury-gold rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-luxury-gold rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold-dark px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">New Collection Available</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in our curated collection of luxury fragrances. From timeless classics to contemporary masterpieces, find the perfect scent that defines you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-purple font-semibold px-8 py-6 text-lg shadow-gold group transition-all duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm text-primary-foreground/60">Premium Fragrances</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">50k+</div>
              <div className="text-sm text-primary-foreground/60">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">15+</div>
              <div className="text-sm text-primary-foreground/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;