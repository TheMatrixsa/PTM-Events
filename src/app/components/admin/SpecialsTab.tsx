import { useState } from 'react';
import { mockMonthlySpecials, type MonthlySpecial } from '../../data/mockAdminData';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Label } from '../ui/label';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  Users,
  Sparkles,
  Tag
} from 'lucide-react';

export function SpecialsTab() {
  const [specials, setSpecials] = useState<MonthlySpecial[]>(mockMonthlySpecials);
  const [isCreating, setIsCreating] = useState(false);
  const [editingSpecial, setEditingSpecial] = useState<MonthlySpecial | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discount: '',
    validFrom: '',
    validUntil: '',
    terms: '',
    imageUrl: ''
  });

  const getStatusColor = (status: MonthlySpecial['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'expired':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCreateSpecial = () => {
    const newSpecial: MonthlySpecial = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      discount: formData.discount,
      validFrom: formData.validFrom,
      validUntil: formData.validUntil,
      terms: formData.terms,
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
      status: new Date(formData.validFrom) > new Date() ? 'upcoming' : 'active',
      entryCount: 0
    };
    setSpecials([newSpecial, ...specials]);
    setIsCreating(false);
    setFormData({
      title: '',
      description: '',
      discount: '',
      validFrom: '',
      validUntil: '',
      terms: '',
      imageUrl: ''
    });
  };

  const handleDeleteSpecial = (id: string) => {
    setSpecials(specials.filter(s => s.id !== id));
  };

  const startEdit = (special: MonthlySpecial) => {
    setEditingSpecial(special);
    setFormData({
      title: special.title,
      description: special.description,
      discount: special.discount,
      validFrom: special.validFrom,
      validUntil: special.validUntil,
      terms: special.terms,
      imageUrl: special.imageUrl
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl">Monthly Specials</h2>
          <p className="text-muted-foreground mt-1">Create and manage promotional offers</p>
        </div>
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Special
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Specials</p>
              <p className="text-2xl mt-1">{specials.filter(s => s.status === 'active').length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#87CEEB] to-[#A8E6CF] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FAF5FF] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <p className="text-2xl mt-1">{specials.filter(s => s.status === 'upcoming').length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5B9E8] to-[#FFB3BA] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF0F0] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Entries</p>
              <p className="text-2xl mt-1">{specials.reduce((sum, s) => sum + s.entryCount, 0)}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Specials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specials.map((special) => (
          <Card key={special.id} className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={special.imageUrl}
                alt={special.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className={`${getStatusColor(special.status)} border-0`}>
                  {special.status}
                </Badge>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-medium line-clamp-1">{special.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {special.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Tag className="w-4 h-4 text-primary" />
                <span className="font-medium text-primary">{special.discount}</span>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valid from:</span>
                  <span>{new Date(special.validFrom).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valid until:</span>
                  <span>{new Date(special.validUntil).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Entries:</span>
                  <span className="font-medium">{special.entryCount}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => startEdit(special)}
                  className="flex-1 rounded-full"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteSpecial(special.id)}
                  className="rounded-full"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Create/Edit Modal */}
      {(isCreating || editingSpecial) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto border-0 shadow-2xl rounded-3xl">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl">
                    {editingSpecial ? 'Edit Special' : 'Create New Special'}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {editingSpecial ? 'Update special offer details' : 'Add a new promotional offer'}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsCreating(false);
                    setEditingSpecial(null);
                    setFormData({
                      title: '',
                      description: '',
                      discount: '',
                      validFrom: '',
                      validUntil: '',
                      terms: '',
                      imageUrl: ''
                    });
                  }}
                  className="rounded-full"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., March Special - Spring Celebration"
                    className="rounded-xl mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the special offer..."
                    className="rounded-xl mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="discount">Discount/Offer *</Label>
                  <Input
                    id="discount"
                    value={formData.discount}
                    onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                    placeholder="e.g., 20% off + FREE balloons"
                    className="rounded-xl mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="validFrom">Valid From *</Label>
                    <Input
                      id="validFrom"
                      type="date"
                      value={formData.validFrom}
                      onChange={(e) => setFormData({ ...formData, validFrom: e.target.value })}
                      className="rounded-xl mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="validUntil">Valid Until *</Label>
                    <Input
                      id="validUntil"
                      type="date"
                      value={formData.validUntil}
                      onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
                      className="rounded-xl mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="terms">Terms & Conditions</Label>
                  <Textarea
                    id="terms"
                    value={formData.terms}
                    onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
                    placeholder="Any terms or conditions..."
                    className="rounded-xl mt-1"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    className="rounded-xl mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Leave empty to use default image
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingSpecial(null);
                      setFormData({
                        title: '',
                        description: '',
                        discount: '',
                        validFrom: '',
                        validUntil: '',
                        terms: '',
                        imageUrl: ''
                      });
                    }}
                    className="flex-1 rounded-full"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreateSpecial}
                    disabled={!formData.title || !formData.description || !formData.discount || !formData.validFrom || !formData.validUntil}
                    className="flex-1 bg-gradient-to-r from-[#FF9A8B] to-[#FFB3BA] hover:from-[#FF8A7B] hover:to-[#FFA3AA] text-white rounded-full"
                  >
                    {editingSpecial ? 'Update Special' : 'Create Special'}
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
