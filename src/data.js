export const MOCK_USERS = [
  { id: 'usr_1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '+2348000000001', walletBalance: 15000 },
];

export const MOCK_RIDERS = [
  { id: 'rid_1', firstName: 'Emeka', lastName: 'A.', phone: '+2348000000002', avatar: 'E', vehicle: { type: 'BIKE', plateNumber: 'LGA-4821-BD', make: 'Kawasaki' }, rating: 4.9 },
  { id: 'rid_2', firstName: 'Sarah', lastName: 'O.', phone: '+2348000000003', avatar: 'S', vehicle: { type: 'BIKE', plateNumber: 'KJA-1234-AB', make: 'Honda' }, rating: 4.7 },
];

export const MOCK_DELIVERIES = [
  {
    id: 'del_1',
    trackingId: 'MOVA-8392',
    status: 'IN_TRANSIT',
    userId: 'usr_1',
    riderId: 'rid_1',
    pickupAddress: '12 Admiralty Way, Lekki Phase 1, Lagos',
    dropoffAddress: '3 Ozumba Mbadiwe, Victoria Island, Lagos',
    estimatedPrice: 2500,
    distanceKm: 5.2,
    package: { category: 'electronics', size: 'SMALL', description: 'Laptop charger' },
    recipient: { name: 'Jane Smith', phone: '+2348000000004' },
    events: [
      { status: 'CREATED', label: 'Order Placed', time: '10:02 AM', desc: 'Your delivery request was received', done: true, icon: '📋' },
      { status: 'RIDER_ASSIGNED', label: 'Rider Assigned', time: '10:08 AM', desc: 'Emeka A. accepted your order', done: true, icon: '🏍️' },
      { status: 'PACKAGE_RECEIVED', label: 'Picked Up', time: '10:25 AM', desc: 'Package collected from pickup location', done: true, icon: '📦' },
      { status: 'IN_TRANSIT', label: 'In Transit', time: '10:32 AM', desc: 'Rider is heading to your destination', done: true, icon: '🚀' },
      { status: 'RIDER_ARRIVED_DESTINATION', label: 'Arriving Soon', time: '~10:47 AM', desc: 'Estimated 15 minutes away', done: false, icon: '📍' },
      { status: 'COMPLETED', label: 'Delivered', time: '--', desc: 'Package will be delivered to your address', done: false, icon: '✅' }
    ],
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'del_2',
    trackingId: 'MOVA-1145',
    status: 'COMPLETED',
    userId: 'usr_1',
    riderId: 'rid_2',
    pickupAddress: 'Ikeja City Mall, Ikeja',
    dropoffAddress: 'Yaba, Lagos',
    estimatedPrice: 3500,
    distanceKm: 12.5,
    package: { category: 'clothing', size: 'MEDIUM', description: 'Two pairs of shoes' },
    recipient: { name: 'Michael O.', phone: '+2348000000005' },
    events: [
      { status: 'CREATED', label: 'Order Placed', time: 'Yesterday 2:00 PM', desc: 'Your delivery request was received', done: true, icon: '📋' },
      { status: 'COMPLETED', label: 'Delivered', time: 'Yesterday 3:15 PM', desc: 'Package delivered successfully', done: true, icon: '✅' }
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'del_3',
    trackingId: 'MOVA-9921',
    status: 'SEARCHING_RIDER',
    userId: 'usr_1',
    riderId: null,
    pickupAddress: 'Gbagada Phase 2, Lagos',
    dropoffAddress: 'Surulere, Lagos',
    estimatedPrice: 1800,
    distanceKm: 8.0,
    package: { category: 'documents', size: 'SMALL', description: 'Legal papers' },
    recipient: { name: 'Law Firm', phone: '+2348000000006' },
    events: [
      { status: 'CREATED', label: 'Order Placed', time: 'Just now', desc: 'Your delivery request was received', done: true, icon: '📋' },
      { status: 'SEARCHING_RIDER', label: 'Searching for rider', time: '...', desc: 'Finding the nearest available rider', done: false, icon: '🔍' }
    ],
    createdAt: new Date().toISOString(),
  }
];

export const MOCK_WALLET_TX = [
  { id: 'tx_1', type: 'CREDIT', amount: 20000, desc: 'Card funding', date: new Date(Date.now() - 172800000).toISOString() },
  { id: 'tx_2', type: 'DEBIT', amount: 2500, desc: 'Delivery MOVA-8392', date: new Date(Date.now() - 3600000).toISOString() },
  { id: 'tx_3', type: 'DEBIT', amount: 3500, desc: 'Delivery MOVA-1145', date: new Date(Date.now() - 86400000).toISOString() },
];
