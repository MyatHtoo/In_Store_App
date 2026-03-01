import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS } from '../constants/data';

const HomeScreen = ({ navigation }) => {
  const [promotionsExpanded, setPromotionsExpanded] = useState(true);
  const [ecoFriendlyExpanded, setEcoFriendlyExpanded] = useState(true);
  const [clearanceExpanded, setClearanceExpanded] = useState(true);

  const categories = [
    { id: 1, name: 'Electronics', icon: 'laptop-outline', color: '#4A90E2' },
    { id: 2, name: 'Clothing', icon: 'shirt-outline', color: '#E94B3C' },
    { id: 3, name: 'Groceries', icon: 'cart-outline', color: '#50C878' },
    { id: 4, name: 'Home & Garden', icon: 'home-outline', color: '#F7B731' },
    { id: 5, name: 'Sports', icon: 'basketball-outline', color: '#8E44AD' },
    { id: 6, name: 'Pharmacy', icon: 'medkit-outline', color: '#E74C3C' },
  ];

  const promotionProducts = PRODUCTS.filter(p => p.isPromotion);
  const ecoFriendlyProducts = PRODUCTS.filter(p => p.isEcoFriendly);
  const nearExpiredProducts = PRODUCTS.filter(p => p.isNearExpired);

  const renderProductCard = (product, badgeConfig) => (
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
        <View style={styles.productHeader}>
          <Text style={styles.productName}>{product.name}</Text>
          {badgeConfig && (
            <View style={[styles.badge, { backgroundColor: badgeConfig.color }]}>
              <Ionicons name={badgeConfig.icon} size={12} color="#fff" />
              <Text style={styles.badgeText}>{badgeConfig.text}</Text>
            </View>
          )}
        </View>
        <Text style={styles.productLocation}>
          <Ionicons name="location" size={14} color="#666" /> {product.location}
        </Text>
        <View style={styles.priceRow}>
          {product.originalPrice && (
            <Text style={styles.originalPrice}>{product.originalPrice}</Text>
          )}
          <Text style={styles.productPrice}>{product.price}</Text>
          {product.discountPercent && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>-{product.discountPercent}%</Text>
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={(e) => {
          e.stopPropagation();
          navigation.navigate('Navigation', { product });
        }}
      >
        <Ionicons name="navigate" size={20} color="#007AFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

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

      {/* Promotions */}
      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => setPromotionsExpanded(!promotionsExpanded)}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeaderLeft}>
            <Ionicons name="pricetag" size={24} color="#FF3B30" />
            <Text style={[styles.sectionTitle, { marginLeft: 8, marginBottom: 0 }]}>Special Promotions</Text>
          </View>
          <Ionicons 
            name={promotionsExpanded ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#666" 
          />
        </TouchableOpacity>
        {promotionsExpanded && (
          <View>
            <Text style={styles.sectionSubtitle}>Limited time offers</Text>
            {promotionProducts.map((product) => renderProductCard(product, null))}
          </View>
        )}
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Eco-Friendly Products */}
      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => setEcoFriendlyExpanded(!ecoFriendlyExpanded)}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeaderLeft}>
            <Ionicons name="leaf" size={24} color="#34C759" />
            <Text style={[styles.sectionTitle, { marginLeft: 8, marginBottom: 0 }]}>Eco-Friendly Products</Text>
          </View>
          <Ionicons 
            name={ecoFriendlyExpanded ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#666" 
          />
        </TouchableOpacity>
        {ecoFriendlyExpanded && (
          <View>
            <Text style={styles.sectionSubtitle}>Sustainable and environmentally friendly</Text>
            {ecoFriendlyProducts.map((product) => renderProductCard(product, {
              icon: 'leaf',
              text: 'ECO',
              color: '#34C759'
            }))}
          </View>
        )}
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Near-Expired Discount */}
      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => setClearanceExpanded(!clearanceExpanded)}
          activeOpacity={0.7}
        >
          <View style={styles.sectionHeaderLeft}>
            <Ionicons name="time" size={24} color="#FF9500" />
            <Text style={[styles.sectionTitle, { marginLeft: 8, marginBottom: 0 }]}>Clearance Sale</Text>
          </View>
          <Ionicons 
            name={clearanceExpanded ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#666" 
          />
        </TouchableOpacity>
        {clearanceExpanded && (
          <View>
            <Text style={styles.sectionSubtitle}>Quick sale - grab them before they're gone!</Text>
            {nearExpiredProducts.map((product) => renderProductCard(product, null))}
          </View>
        )}
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
    marginVertical: 10,
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
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  productLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  discountBadge: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
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
