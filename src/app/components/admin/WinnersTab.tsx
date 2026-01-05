import { useState } from 'react';
import { mockWinners, mockMonthlySpecials, type Winner } from '../../data/mockAdminData';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { 
  Plus, 
  Trophy, 
  Gift, 
  Mail, 
  Phone,
  Check,
  Calendar
} from 'lucide-react';

export function WinnersTab() {
  const [winners, setWinners] = useState<Winner[]>(mockWinners);
  const [isAddingWinner, setIsAddingWinner] = useState(false);
  const [formData, setFormData] = useState({
    specialId: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    wonDate: ''
  });

  const handleAddWinner = () => {
    const selectedSpecial = mockMonthlySpecials.find(s => s.id === formData.specialId);
    if (!selectedSpecial) return;

    const newWinner: Winner = {
      id: Date.now().toString(),
      specialId: formData.specialId,
      specialTitle: selectedSpecial.title,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      wonDate: formData.wonDate,
      prizeRedeemed: false
    };
    setWinners([newWinner, ...winners]);
    setIsAddingWinner(false);
    setFormData({
      specialId: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      wonDate: ''
    });
  };

  const markAsRedeemed = (id: string) => {
    setWinners(winners.map(winner =>
      winner.id === id
        ? { ...winner, prizeRedeemed: true, redeemedDate: new Date().toISOString().split('T')[0] }
        : winner
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl">Monthly Winners</h2>
          <p className="text-muted-foreground mt-1">Track special offer winners and prize redemption</p>
        </div>
        <Button
          onClick={() => setIsAddingWinner(true)}
          className="bg-gradient-to-r from-[#FFD700] to-[#FF9A8B] hover:from-[#FFC700] hover:to-[#FF8A7B] text-white rounded-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Winner
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF9E6] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Winners</p>
              <p className="text-2xl mt-1">{winners.length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF9A8B] flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Prizes Redeemed</p>
              <p className="text-2xl mt-1">{winners.filter(w => w.prizeRedeemed).length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#87CEEB] to-[#A8E6CF] flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF0F0] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending Redemption</p>
              <p className="text-2xl mt-1">{winners.filter(w => !w.prizeRedeemed).length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Winners List */}
      <div className="space-y-4">
        {winners.map((winner) => (
          <Card key={winner.id} className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Winner Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FF9A8B] flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Winner Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-medium">{winner.customerName}</h3>
                      <p className="text-sm text-muted-foreground">{winner.specialTitle}</p>
                    </div>
                    <Badge className={`${winner.prizeRedeemed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} border-0`}>
                      {winner.prizeRedeemed ? 'Redeemed' : 'Pending'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{winner.customerEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{winner.customerPhone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Won: {new Date(winner.wonDate).toLocaleDateString()}</span>
                    </div>
                    {winner.redeemedDate && (
                      <div className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-muted-foreground" />
                        <span>Redeemed: {new Date(winner.redeemedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  {!winner.prizeRedeemed && (
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        onClick={() => markAsRedeemed(winner.id)}
                        className="bg-green-600 hover:bg-green-700 text-white rounded-full"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Mark as Redeemed
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        Send Reminder
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}

        {winners.length === 0 && (
          <Card className="border-0 shadow-lg rounded-2xl p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FF9A8B] flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2">No Winners Yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by adding winners for your monthly specials
            </p>
            <Button
              onClick={() => setIsAddingWinner(true)}
              className="bg-gradient-to-r from-[#FFD700] to-[#FF9A8B] hover:from-[#FFC700] hover:to-[#FF8A7B] text-white rounded-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Winner
            </Button>
          </Card>
        )}
      </div>

      {/* Add Winner Modal */}
      {isAddingWinner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full border-0 shadow-2xl rounded-3xl">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl">Add Winner</h3>
                  <p className="text-muted-foreground mt-1">Record a new monthly special winner</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsAddingWinner(false);
                    setFormData({
                      specialId: '',
                      customerName: '',
                      customerEmail: '',
                      customerPhone: '',
                      wonDate: ''
                    });
                  }}
                  className="rounded-full"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="special">Monthly Special *</Label>
                  <Select
                    value={formData.specialId}
                    onValueChange={(value) => setFormData({ ...formData, specialId: value })}
                  >
                    <SelectTrigger className="rounded-xl mt-1">
                      <SelectValue placeholder="Select a special" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockMonthlySpecials.map((special) => (
                        <SelectItem key={special.id} value={special.id}>
                          {special.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="John Doe"
                    className="rounded-xl mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="customerEmail">Email Address *</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    placeholder="john@example.com"
                    className="rounded-xl mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="customerPhone">Phone Number *</Label>
                  <Input
                    id="customerPhone"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="rounded-xl mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="wonDate">Date Won *</Label>
                  <Input
                    id="wonDate"
                    type="date"
                    value={formData.wonDate}
                    onChange={(e) => setFormData({ ...formData, wonDate: e.target.value })}
                    className="rounded-xl mt-1"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsAddingWinner(false);
                      setFormData({
                        specialId: '',
                        customerName: '',
                        customerEmail: '',
                        customerPhone: '',
                        wonDate: ''
                      });
                    }}
                    className="flex-1 rounded-full"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddWinner}
                    disabled={!formData.specialId || !formData.customerName || !formData.customerEmail || !formData.customerPhone || !formData.wonDate}
                    className="flex-1 bg-gradient-to-r from-[#FFD700] to-[#FF9A8B] hover:from-[#FFC700] hover:to-[#FF8A7B] text-white rounded-full"
                  >
                    Add Winner
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
