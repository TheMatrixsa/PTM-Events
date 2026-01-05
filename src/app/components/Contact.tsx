import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Calendar, Users, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    const whatsappMessage = `Hi! I'd like to plan an event:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AEvent Type: ${formData.eventType}%0AEvent Date: ${formData.eventDate}%0ANumber of Guests: ${formData.guests}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-white via-[#FFF5F5] to-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] text-white rounded-full shadow-md">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's Plan Your{' '}
            <span className="bg-gradient-to-r from-[#FF9A8B] to-[#C5B9E8] bg-clip-text text-transparent">
              Perfect Event
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your celebration and we'll make it unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#FFF0F0] to-white">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-3">Mon-Sat, 9AM-6PM</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-890
              </a>
            </Card>

            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#F0F9FF] to-white">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A8E6CF] to-[#87CEEB] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-3">We reply within 24 hours</p>
              <a href="mailto:hello@ptmevents.com" className="text-primary hover:underline">
                hello@ptmevents.com
              </a>
            </Card>

            <Card className="p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-br from-[#FAF5FF] to-white">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C5B9E8] to-[#FFB3BA] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-3">By appointment only</p>
              <p className="text-primary">
                123 Celebration Lane<br />
                Eventville, EV 12345
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-6 md:p-8 border-0 shadow-xl rounded-3xl bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm">Your Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sarah Johnson"
                    className="rounded-xl border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@example.com"
                    className="rounded-xl border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm">Phone Number *</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    className="rounded-xl border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="eventType" className="block text-sm">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-xl border border-muted-foreground/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  >
                    <option value="">Select event type</option>
                    <option value="kids-birthday">Kids Birthday</option>
                    <option value="adult-birthday">Adult Birthday</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="bridal-shower">Bridal Shower</option>
                    <option value="small-function">Small Function</option>
                    <option value="custom">Custom Event</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="eventDate" className="block text-sm">Event Date *</label>
                  <div className="relative">
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="rounded-xl border-muted-foreground/20 focus:border-primary"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="guests" className="block text-sm">Number of Guests</label>
                  <div className="relative">
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="50"
                      className="rounded-xl border-muted-foreground/20 focus:border-primary"
                    />
                    <Users className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm">Tell Us About Your Event</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share your vision, theme ideas, or any special requirements..."
                  className="rounded-xl border-muted-foreground/20 focus:border-primary resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                
                <Button
                  type="button"
                  onClick={() => window.open('https://wa.me/1234567890?text=Hi! I\'d like to plan an event with PTM Events', '_blank')}
                  variant="outline"
                  className="flex-1 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full transition-all"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours. For urgent inquiries, please call or WhatsApp us directly.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
