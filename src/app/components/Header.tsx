import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FF9A8B] via-[#FFB3BA] to-[#A8E6CF] flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl md:text-2xl bg-gradient-to-r from-[#FF9A8B] via-[#FFB3BA] to-[#C5B9E8] bg-clip-text text-transparent">
                PTM Events
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('events')} className="text-foreground hover:text-primary transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection('specials')} className="text-foreground hover:text-primary transition-colors">
              Specials
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('location')} className="text-foreground hover:text-primary transition-colors">
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Plan Your Event
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top">
            <button 
              onClick={() => scrollToSection('events')} 
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('specials')} 
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Specials
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full shadow-lg"
            >
              Plan Your Event
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}