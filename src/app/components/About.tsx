import { Heart, Users, Sparkles, Check } from 'lucide-react';
import { Card } from './ui/card';

const values = [
  {
    icon: Heart,
    title: "Passionate",
    description: "We pour our heart into every celebration",
    color: "from-[#FFB3BA] to-[#FF9A8B]"
  },
  {
    icon: Users,
    title: "Family-Focused",
    description: "Creating memories for families to cherish",
    color: "from-[#A8E6CF] to-[#87CEEB]"
  },
  {
    icon: Sparkles,
    title: "Detail-Oriented",
    description: "Every little detail matters to us",
    color: "from-[#C5B9E8] to-[#FFB3BA]"
  }
];

const features = [
  "Personalized event planning from start to finish",
  "Beautiful, Instagram-worthy decorations",
  "Stress-free coordination on event day",
  "Flexible packages to fit any budget",
  "Access to trusted vendor network",
  "Creative themes and unique ideas"
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-[#FFB3BA] to-[#A8E6CF] text-white rounded-full shadow-md">
                  About PTM Events
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                We Make Your{' '}
                <span className="bg-gradient-to-r from-[#FF9A8B] to-[#C5B9E8] bg-clip-text text-transparent">
                  Dreams
                </span>{' '}
                Come True
              </h2>
              <p className="text-lg text-muted-foreground">
                At PTM Events, we believe every celebration deserves to be extraordinary. 
                With years of experience and a passion for creating joy, we transform your 
                vision into unforgettable moments.
              </p>
            </div>

            {/* What We Offer */}
            <div className="space-y-3">
              <h3 className="text-xl">What We Offer:</h3>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#A8E6CF] to-[#87CEEB] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] bg-clip-text text-transparent mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Events Planned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#A8E6CF] to-[#87CEEB] bg-clip-text text-transparent mb-1">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-[#C5B9E8] to-[#FFB3BA] bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right - Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Testimonial */}
            <Card className="p-6 md:p-8 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#FFF5F5] to-[#F0F9FF]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 mb-3 italic">
                "PTM Events made my daughter's 5th birthday absolutely magical! 
                Every detail was perfect, and I could actually enjoy the party instead of stressing. 
                Highly recommend!"
              </p>
              <div>
                <div>Sarah M.</div>
                <div className="text-sm text-muted-foreground">Happy Parent</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
