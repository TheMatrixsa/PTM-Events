import { useState } from 'react';
import { mockPaymentReceipts, mockOrders, type PaymentReceipt } from '../../data/mockAdminData';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Search, 
  Eye, 
  Check, 
  X, 
  DollarSign,
  CreditCard,
  FileText,
  Download
} from 'lucide-react';

export function PaymentsTab() {
  const [receipts] = useState<PaymentReceipt[]>(mockPaymentReceipts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReceipt, setSelectedReceipt] = useState<PaymentReceipt | null>(null);

  const filteredReceipts = receipts.filter(receipt =>
    receipt.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    receipt.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: PaymentReceipt['status']) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getOrderInfo = (orderId: string) => {
    return mockOrders.find(order => order.id === orderId);
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl">Payment Receipts</h2>
          <p className="text-muted-foreground mt-1">View and verify customer payment receipts</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search receipts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Receipts</p>
              <p className="text-2xl mt-1">{receipts.length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#87CEEB] to-[#A8E6CF] flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF9E6] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending Verification</p>
              <p className="text-2xl mt-1">{receipts.filter(r => r.status === 'pending').length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF9A8B] flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF0F0] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Verified</p>
              <p className="text-2xl mt-1">${receipts.filter(r => r.status === 'verified').reduce((sum, r) => sum + r.amount, 0).toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Receipts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReceipts.map((receipt) => {
          const order = getOrderInfo(receipt.orderId);
          return (
            <Card key={receipt.id} className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={receipt.receiptUrl}
                  alt={`Receipt from ${receipt.customerName}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={`${getStatusColor(receipt.status)} border-0`}>
                    {receipt.status}
                  </Badge>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-medium">{receipt.customerName}</h3>
                  <p className="text-sm text-muted-foreground">
                    Order: {order?.orderNumber || receipt.orderId}
                  </p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium">${receipt.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Method:</span>
                    <span>{receipt.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Uploaded:</span>
                    <span>{new Date(receipt.uploadedAt).toLocaleDateString()}</span>
                  </div>
                  {receipt.verifiedBy && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Verified by:</span>
                      <span>{receipt.verifiedBy}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedReceipt(receipt)}
                    className="flex-1 rounded-full"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  {receipt.status === 'pending' && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white rounded-full"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Receipt Details Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto border-0 shadow-2xl rounded-3xl">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl">Receipt Details</h3>
                  <p className="text-muted-foreground mt-1">Payment verification</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedReceipt(null)}
                  className="rounded-full"
                >
                  ✕
                </Button>
              </div>

              {/* Receipt Image */}
              <div className="relative rounded-2xl overflow-hidden bg-muted">
                <img
                  src={selectedReceipt.receiptUrl}
                  alt={`Receipt from ${selectedReceipt.customerName}`}
                  className="w-full h-auto"
                />
              </div>

              {/* Receipt Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className={`${getStatusColor(selectedReceipt.status)} border-0 mt-1`}>
                      {selectedReceipt.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="text-xl font-bold mt-1">${selectedReceipt.amount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Customer:</span>
                    <span className="font-medium">{selectedReceipt.customerName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Order ID:</span>
                    <span className="font-medium">{getOrderInfo(selectedReceipt.orderId)?.orderNumber || selectedReceipt.orderId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span className="font-medium">{selectedReceipt.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uploaded:</span>
                    <span className="font-medium">{new Date(selectedReceipt.uploadedAt).toLocaleString()}</span>
                  </div>
                  {selectedReceipt.verifiedBy && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Verified by:</span>
                      <span className="font-medium">{selectedReceipt.verifiedBy}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  {selectedReceipt.status === 'pending' && (
                    <>
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Verify
                      </Button>
                      <Button
                        variant="destructive"
                        className="flex-1 rounded-full"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
