import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function Location() {
  const address = "123 Celebration Lane, Eventville, EV 12345";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=123+Celebration+Lane+Eventville";
  
  // Replace this with your actual Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176336909384!2d-73.98784668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

  const openDirections = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-gradient-to-br from-white via-[#F0F9FF] to-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#A8E6CF] to-[#87CEEB] text-white rounded-full shadow-md">
              Visit Our Office
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Find Us{' '}
            <span className="bg-gradient-to-r from-[#FF9A8B] to-[#C5B9E8] bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop by our office for a consultation or to see our event portfolio in person
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-xl rounded-3xl h-full">
              <div className="relative w-full h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PTM Events Location"
                  className="rounded-3xl"
                ></iframe>
                
                {/* Overlay button for mobile */}
                <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                  <Button
                    onClick={openDirections}
                    className="w-full bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full shadow-lg"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#FFF0F0] to-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2">Our Address</h3>
                  <p className="text-muted-foreground mb-4">
                    123 Celebration Lane<br />
                    Eventville, EV 12345<br />
                    United States
                  </p>
                  <Button
                    onClick={openDirections}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#F0F9FF] to-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A8E6CF] to-[#87CEEB] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-primary">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact Card */}
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#FAF5FF] to-white">
              <div className="space-y-4">
                <h3 className="text-lg">Quick Contact</h3>
                
                <div className="space-y-3">
                  <a 
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5B9E8] to-[#FFB3BA] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Call us</div>
                      <div className="text-sm">+1 (234) 567-890</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:hello@ptmevents.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB3BA] to-[#FF9A8B] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email us</div>
                      <div className="text-sm">hello@ptmevents.com</div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-muted">
                  <p className="text-sm text-muted-foreground">
                    💡 <span className="font-medium">Pro tip:</span> Schedule a consultation to see our event portfolio and discuss your vision in person!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-r from-[#FFF9E6] to-[#FFF5F5]">
            <p className="text-muted-foreground">
              <span className="inline-block mr-2">🚗</span>
              Free parking available for visitors • 
              <span className="inline-block mx-2">♿</span>
              Wheelchair accessible • 
              <span className="inline-block mx-2">☕</span>
              Coffee & refreshments provided
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
