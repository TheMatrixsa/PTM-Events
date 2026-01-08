import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventCategories } from './components/EventCategories';
import { MonthlySpecials } from './components/MonthlySpecials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { Button } from './components/ui/button';
import { Shield } from 'lucide-react';
import { UserCog } from "lucide-react";
export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return <AdminDashboard onBackToWebsite={() => setShowAdmin(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventCategories />
        <MonthlySpecials />
        <About />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Admin Access Button - Fixed in bottom-left corner */}
      <Button
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white shadow-2xl p-0"
        title="Admin Dashboard"
      >
        {/* <Shield className="w-5 h-5" /> */}
        <UserCog className="w-5 h-5" />
      </Button>
    </div>
  );
}