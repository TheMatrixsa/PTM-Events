import { useState } from 'react';
import { mockOrders, type Order } from '../../data/mockAdminData';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Search, 
  Eye, 
  Calendar, 
  Users, 
  DollarSign, 
  Mail, 
  Phone,
  FileText
} from 'lucide-react';

export function OrdersTab() {
  const [orders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter(order =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.eventType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status: Order['paymentStatus']) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-700';
      case 'partial':
        return 'bg-orange-100 text-orange-700';
      case 'pending':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl">Orders Management</h2>
          <p className="text-muted-foreground mt-1">View and manage all customer orders</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF0F0] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <p className="text-2xl mt-1">{orders.length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9A8B] to-[#FFB3BA] flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl mt-1">{orders.filter(o => o.status === 'pending').length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#87CEEB] to-[#A8E6CF] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FAF5FF] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Guests</p>
              <p className="text-2xl mt-1">{orders.reduce((sum, o) => sum + o.numberOfGuests, 0)}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5B9E8] to-[#FFB3BA] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF9E6] to-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl mt-1">${orders.reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF9A8B] flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Orders Table */}
      <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Order #</th>
                <th className="text-left p-4 font-medium">Customer</th>
                <th className="text-left p-4 font-medium">Event Type</th>
                <th className="text-left p-4 font-medium">Event Date</th>
                <th className="text-left p-4 font-medium">Guests</th>
                <th className="text-left p-4 font-medium">Amount</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Payment</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-t border-muted hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">{order.orderNumber}</span>
                  </td>
                  <td className="p-4">
                    <div>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm">{order.eventType}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm">{new Date(order.eventDate).toLocaleDateString()}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm">{order.numberOfGuests}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium">${order.totalAmount.toLocaleString()}</span>
                  </td>
                  <td className="p-4">
                    <Badge className={`${getStatusColor(order.status)} border-0`}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge className={`${getPaymentStatusColor(order.paymentStatus)} border-0`}>
                      {order.paymentStatus}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedOrder(order)}
                      className="rounded-full"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto border-0 shadow-2xl rounded-3xl">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl">Order Details</h3>
                  <p className="text-muted-foreground mt-1">{selectedOrder.orderNumber}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedOrder(null)}
                  className="rounded-full"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order Status</p>
                    <Badge className={`${getStatusColor(selectedOrder.status)} border-0 mt-1`}>
                      {selectedOrder.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Status</p>
                    <Badge className={`${getPaymentStatusColor(selectedOrder.paymentStatus)} border-0 mt-1`}>
                      {selectedOrder.paymentStatus}
                    </Badge>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Customer Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedOrder.customerName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{selectedOrder.customerEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{selectedOrder.customerPhone}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Event Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Event Type:</span>
                      <span className="font-medium">{selectedOrder.eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Event Date:</span>
                      <span className="font-medium">{new Date(selectedOrder.eventDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Number of Guests:</span>
                      <span className="font-medium">{selectedOrder.numberOfGuests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created On:</span>
                      <span className="font-medium">{new Date(selectedOrder.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {selectedOrder.notes && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Notes</h4>
                    <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                      {selectedOrder.notes}
                    </p>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">
                      ${selectedOrder.totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
