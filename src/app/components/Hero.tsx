import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I\'d like to plan an event with PTM Events', '_blank');
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFF4F4] to-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFB3BA] to-[#A8E6CF] rounded-full text-white shadow-md">
                ✨ Your Event, Our Expertise
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Creating{' '}
              <span className="bg-gradient-to-r from-[#FF9A8B] via-[#FFB3BA] to-[#C5B9E8] bg-clip-text text-transparent">
                Magical
              </span>
              {' '}Moments
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              From birthday parties to baby showers, we make every celebration unforgettable. 
              Let us handle the details while you enjoy the joy!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Your Event
              </Button>
              
              <Button 
                onClick={openWhatsApp}
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-muted-foreground">Happy Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl bg-gradient-to-r from-[#A8E6CF] to-[#87CEEB] bg-clip-text text-transparent">5 Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl bg-gradient-to-r from-[#C5B9E8] to-[#FFB3BA] bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A8B]/20 via-[#FFB3BA]/20 to-[#A8E6CF]/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1598622443054-499119043e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwYmFsbG9vbnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3Njc1MzIzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colorful birthday celebration with balloons"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                <div className="text-3xl">🎉</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                <div className="text-3xl">🎈</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,0 C150,80 350,80 600,60 C850,40 1050,40 1200,80 L1200,120 L0,120 Z" fill="#FAFAFA"></path>
        </svg>
      </div>
    </section>
  );
}
