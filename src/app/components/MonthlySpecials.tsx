import { Sparkles, Clock, Gift } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const specials = [
  {
    title: "January Spectacular",
    subtitle: "New Year, New Celebrations! 🎊",
    discount: "20% OFF",
    description: "Start the year with a bang! Get 20% off all birthday party packages booked in January.",
    color: "from-[#FF9A8B] to-[#FFB3BA]",
    bgGradient: "from-[#FFF5F5] to-[#FFF0F5]",
    validUntil: "Valid until Jan 31, 2026"
  },
  {
    title: "Love is in the Air",
    subtitle: "Perfect for Valentine's Events 💕",
    discount: "15% OFF",
    description: "Book a romantic celebration or engagement party and receive 15% off plus complimentary rose arrangements.",
    color: "from-[#FFB3BA] to-[#C5B9E8]",
    bgGradient: "from-[#FFF0F5] to-[#FAF5FF]",
    validUntil: "Valid Feb 1-14, 2026"
  },
  {
    title: "Bundle & Save",
    subtitle: "Package Deal Special 🎁",
    discount: "25% OFF",
    description: "Book 3 events together and save 25%! Perfect for planning ahead or family celebrations.",
    color: "from-[#A8E6CF] to-[#87CEEB]",
    bgGradient: "from-[#F0F9FF] to-[#F0FFFA]",
    validUntil: "Ongoing offer"
  }
];

export function MonthlySpecials() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="specials" className="py-16 md:py-24 bg-gradient-to-br from-white via-[#FFF9F5] to-[#F5FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9A8B] text-white rounded-full shadow-md">
            <Sparkles className="w-4 h-4" />
            <span>Limited Time Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            This Month's{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FF9A8B] to-[#FFB3BA] bg-clip-text text-transparent">
              Special Deals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Amazing offers to make your celebrations even more special and affordable
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {specials.map((special, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br ${special.bgGradient}`}
            >
              {/* Discount Badge */}
              <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${special.color} text-white shadow-lg transform -rotate-3`}>
                <span>{special.discount}</span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <h3 className="text-2xl mb-1">{special.title}</h3>
                  <p className="text-muted-foreground">{special.subtitle}</p>
                </div>

                <p className="text-foreground/80">
                  {special.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Clock className="w-4 h-4" />
                  <span>{special.validUntil}</span>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full mt-4 bg-gradient-to-r ${special.color} text-white hover:opacity-90 rounded-full shadow-md transition-all`}
                >
                  Claim This Offer
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <Card className="border-0 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-r from-[#FF9A8B] via-[#FFB3BA] to-[#C5B9E8]">
          <div className="p-8 md:p-12 text-center text-white relative">
            {/* Decorative circles */}
            <div className="absolute top-0 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <Gift className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl md:text-3xl mb-4">Want a Custom Package?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
                Tell us about your event and we'll create a personalized quote with special pricing just for you!
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow-lg text-lg px-8"
              >
                Get Your Custom Quote
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
