import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { OrdersTab } from './OrdersTab';
import { PaymentsTab } from './PaymentsTab';
import { SpecialsTab } from './SpecialsTab';
import { WinnersTab } from './WinnersTab';
import { 
  LayoutDashboard, 
  Package, 
  CreditCard, 
  Sparkles, 
  Trophy,
  ArrowLeft,
  LogOut
} from 'lucide-react';

interface AdminDashboardProps {
  onBackToWebsite: () => void;
}

export function AdminDashboard({ onBackToWebsite }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F9FF] via-white to-[#FFF5F5]">
      {/* Admin Header */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-semibold">PTM Events Admin</h1>
                  <p className="text-xs text-muted-foreground">Dashboard</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={onBackToWebsite}
                variant="outline"
                className="rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Website
              </Button>
              <Button
                variant="ghost"
                className="rounded-full"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 p-6 border-0 shadow-lg rounded-3xl bg-gradient-to-r from-[#FF9A8B] via-[#FFB3BA] to-[#C5B9E8]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">Welcome back, Admin! 👋</h2>
              <p className="text-white/90">
                Here's what's happening with your event planning business today
              </p>
            </div>
            <div className="flex gap-2">
              <div className="text-center bg-white/20 rounded-2xl px-4 py-3 backdrop-blur-sm">
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-white/90">New Orders</p>
              </div>
              <div className="text-center bg-white/20 rounded-2xl px-4 py-3 backdrop-blur-sm">
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-white/90">Payments</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="inline-flex h-auto p-1 bg-white rounded-2xl shadow-lg border-0">
            <TabsTrigger 
              value="orders" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF9A8B] data-[state=active]:to-[#FFB3BA] data-[state=active]:text-white px-4 py-2.5"
            >
              <Package className="w-4 h-4 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger 
              value="payments" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#87CEEB] data-[state=active]:to-[#A8E6CF] data-[state=active]:text-white px-4 py-2.5"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Payments
            </TabsTrigger>
            <TabsTrigger 
              value="specials" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#C5B9E8] data-[state=active]:to-[#FFB3BA] data-[state=active]:text-white px-4 py-2.5"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Specials
            </TabsTrigger>
            <TabsTrigger 
              value="winners" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFD700] data-[state=active]:to-[#FF9A8B] data-[state=active]:text-white px-4 py-2.5"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Winners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <OrdersTab />
          </TabsContent>

          <TabsContent value="payments" className="mt-6">
            <PaymentsTab />
          </TabsContent>

          <TabsContent value="specials" className="mt-6">
            <SpecialsTab />
          </TabsContent>

          <TabsContent value="winners" className="mt-6">
            <WinnersTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
