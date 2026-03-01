import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(route?.params?.category || 'All');

  const categories = ['All', 'Electronics', 'Clothing', 'Groceries', 'Home & Garden', 'Sports', 'Pharmacy'];

  const allProducts = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', location: 'Aisle 3A', floor: 1, price: '฿89.99', inStock: true, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { id: 2, name: 'Running Shoes', category: 'Sports', location: 'Aisle 7B', floor: 2, price: '฿129.99', inStock: true, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
    { id: 3, name: 'Smart Watch', category: 'Electronics', location: 'Aisle 3C', floor: 1, price: '฿299.99', inStock: true, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
    { id: 4, name: 'Yoga Mat', category: 'Sports', location: 'Aisle 7A', floor: 2, price: '฿24.99', inStock: true, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400' },
    { id: 5, name: 'Coffee Maker', category: 'Home & Garden', location: 'Aisle 5B', floor: 1, price: '฿79.99', inStock: false, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400' },
    { id: 6, name: 'Organic Apples', category: 'Groceries', location: 'Aisle 2C', floor: 1, price: '฿3.99/lb', inStock: true, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400' },
    { id: 7, name: 'Bluetooth Speaker', category: 'Electronics', location: 'Aisle 3B', floor: 1, price: '฿59.99', inStock: true, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400' },
    { id: 8, name: 'Pain Relief', category: 'Pharmacy', location: 'Aisle 9A', floor: 2, price: '฿12.99', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' },
    { id: 9, name: 'T-Shirt Pack', category: 'Clothing', location: 'Aisle 4C', floor: 1, price: '฿29.99', inStock: true, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
    { id: 10, name: 'Garden Tools Set', category: 'Home & Garden', location: 'Aisle 5D', floor: 1, price: '฿45.99', inStock: true, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400' },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productMetaRow}>
          <Ionicons name="location" size={14} color="#666" />
          <Text style={styles.productMeta}>{item.location} • Floor {item.floor}</Text>
        </View>
        <View style={styles.productBottomRow}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <View style={[styles.stockBadge, !item.inStock && styles.outOfStock]}>
            <Text style={styles.stockText}>
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.navigateIcon}
        onPress={() => navigation.navigate('Navigation', { product: item })}
      >
        <Ionicons name="navigate" size={24} color="#007AFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search Products</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {/* Category Filter */}
      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === category && styles.categoryChipTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
        </Text>
      </View>

      {/* Products List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>No products found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search or filters</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  categoriesWrapper: {
    paddingHorizontal: 20,
  },
  categoriesScroll: {
    maxHeight: 50,
    marginBottom: 10,
  },
  categoriesContent: {
    paddingRight: 20,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryChipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#fff',
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  resultsCount: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  productItem: {
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
    borderRadius: 12,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 4,
  },
  productMeta: {
    fontSize: 13,
    color: '#666',
  },
  productBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  stockBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#E8F5E9',
  },
  outOfStock: {
    backgroundColor: '#FFEBEE',
  },
  stockText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4CAF50',
  },
  navigateIcon: {
    padding: 8,
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
});

export default SearchScreen;
