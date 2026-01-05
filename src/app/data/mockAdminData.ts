export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventType: string;
  eventDate: string;
  numberOfGuests: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'partial' | 'paid';
  createdAt: string;
  notes?: string;
}

export interface PaymentReceipt {
  id: string;
  orderId: string;
  customerName: string;
  amount: number;
  paymentMethod: string;
  receiptUrl: string;
  uploadedAt: string;
  verifiedBy?: string;
  status: 'pending' | 'verified' | 'rejected';
}

export interface MonthlySpecial {
  id: string;
  title: string;
  description: string;
  discount: string;
  validFrom: string;
  validUntil: string;
  status: 'active' | 'upcoming' | 'expired';
  terms: string;
  imageUrl: string;
  entryCount: number;
}

export interface Winner {
  id: string;
  specialId: string;
  specialTitle: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  wonDate: string;
  prizeRedeemed: boolean;
  redeemedDate?: string;
}

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2026-001',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    customerPhone: '+1 (555) 123-4567',
    eventType: 'Birthday Party - Unicorn Theme',
    eventDate: '2026-02-15',
    numberOfGuests: 25,
    totalAmount: 1250,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2026-01-02',
    notes: 'Requested gluten-free cake options'
  },
  {
    id: '2',
    orderNumber: 'ORD-2026-002',
    customerName: 'Michael Chen',
    customerEmail: 'mchen@email.com',
    customerPhone: '+1 (555) 234-5678',
    eventType: 'Kids Pool Party',
    eventDate: '2026-02-20',
    numberOfGuests: 30,
    totalAmount: 1500,
    status: 'pending',
    paymentStatus: 'partial',
    createdAt: '2026-01-03',
    notes: 'Need water safety equipment'
  },
  {
    id: '3',
    orderNumber: 'ORD-2026-003',
    customerName: 'Emily Rodriguez',
    customerEmail: 'emily.r@email.com',
    customerPhone: '+1 (555) 345-6789',
    eventType: 'Princess Tea Party',
    eventDate: '2026-02-10',
    numberOfGuests: 15,
    totalAmount: 850,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2026-01-04',
    notes: 'Daughter turning 5 years old'
  },
  {
    id: '4',
    orderNumber: 'ORD-2026-004',
    customerName: 'David Thompson',
    customerEmail: 'dthompson@email.com',
    customerPhone: '+1 (555) 456-7890',
    eventType: 'Superhero Party',
    eventDate: '2026-03-01',
    numberOfGuests: 20,
    totalAmount: 1100,
    status: 'pending',
    paymentStatus: 'pending',
    createdAt: '2026-01-05',
    notes: 'Wants custom superhero capes for all kids'
  },
  {
    id: '5',
    orderNumber: 'ORD-2026-005',
    customerName: 'Jessica Martinez',
    customerEmail: 'jmartinez@email.com',
    customerPhone: '+1 (555) 567-8901',
    eventType: 'Baby Shower',
    eventDate: '2026-02-25',
    numberOfGuests: 40,
    totalAmount: 2200,
    status: 'confirmed',
    paymentStatus: 'partial',
    createdAt: '2026-01-04',
    notes: 'Gender reveal included'
  }
];

export const mockPaymentReceipts: PaymentReceipt[] = [
  {
    id: '1',
    orderId: '1',
    customerName: 'Sarah Johnson',
    amount: 1250,
    paymentMethod: 'Bank Transfer',
    receiptUrl: 'https://images.unsplash.com/photo-1554224311-beee460ae6fb?w=400',
    uploadedAt: '2026-01-02T14:30:00',
    verifiedBy: 'Admin',
    status: 'verified'
  },
  {
    id: '2',
    orderId: '2',
    customerName: 'Michael Chen',
    amount: 750,
    paymentMethod: 'Credit Card',
    receiptUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    uploadedAt: '2026-01-03T10:15:00',
    verifiedBy: 'Admin',
    status: 'verified'
  },
  {
    id: '3',
    orderId: '3',
    customerName: 'Emily Rodriguez',
    amount: 850,
    paymentMethod: 'PayPal',
    receiptUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
    uploadedAt: '2026-01-04T16:45:00',
    verifiedBy: 'Admin',
    status: 'verified'
  },
  {
    id: '4',
    orderId: '5',
    customerName: 'Jessica Martinez',
    amount: 1100,
    paymentMethod: 'Bank Transfer',
    receiptUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400',
    uploadedAt: '2026-01-05T09:20:00',
    status: 'pending'
  }
];

export const mockMonthlySpecials: MonthlySpecial[] = [
  {
    id: '1',
    title: 'January Special - Winter Wonderland',
    description: 'Book a Winter Wonderland themed party and get 20% off on decorations plus a FREE hot chocolate station!',
    discount: '20% off + FREE hot chocolate',
    validFrom: '2026-01-01',
    validUntil: '2026-01-31',
    status: 'active',
    terms: 'Valid for bookings made in January for events until March 2026',
    imageUrl: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800',
    entryCount: 45
  },
  {
    id: '2',
    title: 'February Special - Love is in the Air',
    description: 'Valentine\'s themed kids party with heart-shaped decorations and a candy-making workshop included!',
    discount: '15% off + FREE candy workshop',
    validFrom: '2026-02-01',
    validUntil: '2026-02-28',
    status: 'upcoming',
    terms: 'Minimum 15 guests required',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
    entryCount: 0
  },
  {
    id: '3',
    title: 'December Special - Holiday Magic',
    description: 'Holiday-themed party package with Santa visit, gift bags, and festive decorations!',
    discount: '25% off complete package',
    validFrom: '2025-12-01',
    validUntil: '2025-12-31',
    status: 'expired',
    terms: 'Book before December 15th',
    imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800',
    entryCount: 78
  }
];

export const mockWinners: Winner[] = [
  {
    id: '1',
    specialId: '3',
    specialTitle: 'December Special - Holiday Magic',
    customerName: 'Amanda Wilson',
    customerEmail: 'awilson@email.com',
    customerPhone: '+1 (555) 111-2222',
    wonDate: '2025-12-31',
    prizeRedeemed: true,
    redeemedDate: '2026-01-10'
  },
  {
    id: '2',
    specialId: '1',
    specialTitle: 'January Special - Winter Wonderland',
    customerName: 'Robert Brown',
    customerEmail: 'rbrown@email.com',
    customerPhone: '+1 (555) 333-4444',
    wonDate: '2026-01-31',
    prizeRedeemed: false
  }
];
