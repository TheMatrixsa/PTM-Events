import { Cake, Users, Heart, Gift, PartyPopper, Star } from 'lucide-react';
import { Card } from './ui/card';

const eventTypes = [
  {
    icon: Cake,
    title: "Kids' Birthdays",
    description: "Magical celebrations for your little ones with fun themes and activities",
    color: "from-[#FFB3BA] to-[#FF9A8B]",
    bgColor: "bg-[#FFF0F0]",
    image: "https://images.unsplash.com/photo-1762912913371-ccc0a5fca0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBwYXJ0eSUyMGRlY29yYXRpb25zfGVufDF8fHx8MTc2NzUzMjMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Heart,
    title: "Baby Showers",
    description: "Sweet and intimate celebrations for expecting parents",
    color: "from-[#A8E6CF] to-[#87CEEB]",
    bgColor: "bg-[#F0F9FF]",
    image: "https://images.unsplash.com/photo-1738330943863-0f45d97e3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNjc1MzIzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Users,
    title: "Adult Birthdays",
    description: "Sophisticated and stylish celebrations for milestone moments",
    color: "from-[#C5B9E8] to-[#FFB3BA]",
    bgColor: "bg-[#FAF5FF]",
    image: "https://images.unsplash.com/photo-1767070807536-05c89be31e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3Njc0MzUxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Gift,
    title: "Bridal Showers",
    description: "Elegant and memorable pre-wedding celebrations",
    color: "from-[#FFCBA4] to-[#FFD700]",
    bgColor: "bg-[#FFFBF0]",
    image: "https://images.unsplash.com/photo-1761114905078-163aa92141c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNjc0OTM5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: PartyPopper,
    title: "Small Functions",
    description: "Intimate gatherings, anniversaries, and family celebrations",
    color: "from-[#87CEEB] to-[#A8E6CF]",
    bgColor: "bg-[#F0FFFA]",
    image: "https://images.unsplash.com/photo-1758466872849-488dbd3833d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnR5JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2NzUzMjMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Star,
    title: "Custom Events",
    description: "Unique celebrations tailored to your vision and dreams",
    color: "from-[#FFD700] to-[#FF9A8B]",
    bgColor: "bg-[#FFF9E6]",
    image: "https://images.unsplash.com/photo-1598622443054-499119043e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwYmFsbG9vbnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3Njc1MzIzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function EventCategories() {
  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#A8E6CF] to-[#87CEEB] text-white rounded-full shadow-md">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Events We{' '}
            <span className="bg-gradient-to-r from-[#FF9A8B] to-[#C5B9E8] bg-clip-text text-transparent">
              Love
            </span>{' '}
            to Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            From intimate gatherings to grand celebrations, we bring your vision to life with creativity and care
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {eventTypes.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white rounded-3xl"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-14 h-14 rounded-2xl ${event.bgColor} flex items-center justify-center shadow-lg`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-br ${event.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="mt-4 flex items-center text-primary group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
