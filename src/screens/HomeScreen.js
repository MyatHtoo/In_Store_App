import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 1, name: 'Electronics', icon: 'laptop-outline', color: '#4A90E2' },
    { id: 2, name: 'Clothing', icon: 'shirt-outline', color: '#E94B3C' },
    { id: 3, name: 'Groceries', icon: 'cart-outline', color: '#50C878' },
    { id: 4, name: 'Home & Garden', icon: 'home-outline', color: '#F7B731' },
    { id: 5, name: 'Sports', icon: 'basketball-outline', color: '#8E44AD' },
    { id: 6, name: 'Pharmacy', icon: 'medkit-outline', color: '#E74C3C' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', location: 'Aisle 3A', price: '฿89.99', section: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { id: 2, name: 'Running Shoes', location: 'Aisle 7B', price: '฿129.99', section: 'Sports', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
    { id: 3, name: 'Smart Watch', location: 'Aisle 3C', price: '฿299.99', section: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.storeName}>MegaMart Store</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Ionicons name="search" size={24} color="#fff" />
          <Text style={styles.actionText}>Find Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.actionButtonSecondary]}
          onPress={() => navigation.navigate('Map')}
        >
          <Ionicons name="navigate" size={24} color="#fff" />
          <Text style={styles.actionText}>Store Map</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { backgroundColor: category.color }]}
              onPress={() => navigation.navigate('Search', { category: category.name })}
            >
              <Ionicons name={category.icon} size={32} color="#fff" />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Featured Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        {featuredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product })}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="cover"
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productLocation}>
                <Ionicons name="location" size={14} color="#666" /> {product.location}
              </Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.navigateButton}
              onPress={() => navigation.navigate('Navigation', { product })}
            >
              <Ionicons name="navigate" size={20} color="#007AFF" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Store Info */}
      <View style={styles.storeInfo}>
        <Text style={styles.storeInfoTitle}>Store Information</Text>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={20} color="#666" />
          <Text style={styles.infoText}>Open: 8:00 AM - 10:00 PM</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#666" />
          <Text style={styles.infoText}>123 Shopping Plaza, City Center</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationIcon: {
    padding: 8,
  },
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 12,
    gap: 8,
  },
  actionButtonSecondary: {
    backgroundColor: '#34C759',
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  navigateButton: {
    padding: 8,
  },
  storeInfo: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },
  storeInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
