// Sample Store Data
export const STORE_INFO = {
  name: 'MegaMart Store',
  id: 'MegaMart #042',
  location: '123 Shopping Plaza, City Center',
  hours: {
    open: '8:00 AM',
    close: '10:00 PM',
  },
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'support@megamart.com',
  },
};

// Categories
export const CATEGORIES = [
  { id: 1, name: 'Electronics', icon: 'laptop-outline', color: '#4A90E2', floor: 1 },
  { id: 2, name: 'Clothing', icon: 'shirt-outline', color: '#E94B3C', floor: 1 },
  { id: 3, name: 'Groceries', icon: 'cart-outline', color: '#50C878', floor: 1 },
  { id: 4, name: 'Home & Garden', icon: 'home-outline', color: '#F7B731', floor: 1 },
  { id: 5, name: 'Sports', icon: 'basketball-outline', color: '#8E44AD', floor: 2 },
  { id: 6, name: 'Pharmacy', icon: 'medkit-outline', color: '#E74C3C', floor: 2 },
  { id: 7, name: 'Books', icon: 'book-outline', color: '#3498DB', floor: 2 },
  { id: 8, name: 'Toys', icon: 'game-controller-outline', color: '#9B59B6', floor: 2 },
];

// Floor Plans
export const FLOORS = [
  { id: 1, name: 'Ground Floor', sections: ['A', 'B', 'C', 'D'] },
  { id: 2, name: 'First Floor', sections: ['E', 'F', 'G', 'H'] },
];

// Store Amenities
export const AMENITIES = [
  { id: 1, name: 'Exit', icon: 'exit-outline', floor: 1, location: { x: 330, y: 30 } },
  { id: 2, name: 'Food Court', icon: 'restaurant-outline', floor: 1, location: { x: 330, y: 130 } },
  { id: 3, name: 'First Aid', icon: 'medical-outline', floor: 1, location: { x: 330, y: 230 } },
  { id: 4, name: 'Restrooms', icon: 'man-outline', floor: 1, location: { x: 30, y: 280 } },
  { id: 5, name: 'Information', icon: 'information-circle-outline', floor: 1, location: { x: 175, y: 280 } },
  { id: 6, name: 'ATM', icon: 'card-outline', floor: 2, location: { x: 330, y: 80 } },
];

// Sample Products
export const PRODUCTS = [
  { 
    id: 1, 
    name: 'Wireless Headphones', 
    category: 'Electronics', 
    location: 'Aisle 3A', 
    floor: 1, 
    price: '฿89.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.'
  },
  { 
    id: 2, 
    name: 'Running Shoes', 
    category: 'Sports', 
    location: 'Aisle 7B', 
    floor: 2, 
    price: '฿129.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    description: 'Comfortable running shoes with excellent cushioning and support.'
  },
  { 
    id: 3, 
    name: 'Smart Watch', 
    category: 'Electronics', 
    location: 'Aisle 3C', 
    floor: 1, 
    price: '฿299.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    description: 'Advanced smartwatch with fitness tracking and smartphone integration.'
  },
  { 
    id: 4, 
    name: 'Yoga Mat', 
    category: 'Sports', 
    location: 'Aisle 7A', 
    floor: 2, 
    price: '฿24.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    description: 'Non-slip yoga mat perfect for all types of exercise.'
  },
  { 
    id: 5, 
    name: 'Coffee Maker', 
    category: 'Home & Garden', 
    location: 'Aisle 5B', 
    floor: 1, 
    price: '฿79.99', 
    inStock: false,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    description: 'Programmable coffee maker with thermal carafe.'
  },
  { 
    id: 6, 
    name: 'Organic Apples', 
    category: 'Groceries', 
    location: 'Aisle 2C', 
    floor: 1, 
    price: '฿3.99/lb', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    description: 'Fresh organic apples, locally sourced.'
  },
  { 
    id: 7, 
    name: 'Bluetooth Speaker', 
    category: 'Electronics', 
    location: 'Aisle 3B', 
    floor: 1, 
    price: '฿59.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    description: 'Portable Bluetooth speaker with 360-degree sound.'
  },
  { 
    id: 8, 
    name: 'Pain Relief', 
    category: 'Pharmacy', 
    location: 'Aisle 9A', 
    floor: 2, 
    price: '฿12.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
    description: 'Fast-acting pain relief medication.'
  },
  { 
    id: 9, 
    name: 'T-Shirt Pack', 
    category: 'Clothing', 
    location: 'Aisle 4C', 
    floor: 1, 
    price: '฿29.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    description: 'Comfortable cotton t-shirts, pack of 3.'
  },
  { 
    id: 10, 
    name: 'Garden Tools Set', 
    category: 'Home & Garden', 
    location: 'Aisle 5D', 
    floor: 1, 
    price: '฿45.99', 
    inStock: true,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
    description: 'Essential garden tools set with ergonomic handles.'
  },
];

export default {
  STORE_INFO,
  CATEGORIES,
  FLOORS,
  AMENITIES,
  PRODUCTS,
};
