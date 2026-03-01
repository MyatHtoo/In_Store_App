import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ product, onPress, onNavigate, showNavigate = true }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <View style={styles.locationRow}>
          <Ionicons name="location" size={12} color="#666" />
          <Text style={styles.location} numberOfLines={1}>
            {product.location} • Floor {product.floor}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{product.price}</Text>
          {product.inStock !== false ? (
            <View style={styles.inStockBadge}>
              <Text style={styles.inStockText}>In Stock</Text>
            </View>
          ) : (
            <View style={styles.outOfStockBadge}>
              <Text style={styles.outOfStockText}>Out of Stock</Text>
            </View>
          )}
        </View>
      </View>

      {showNavigate && (
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={(e) => {
            e.stopPropagation();
            onNavigate && onNavigate();
          }}
        >
          <Ionicons name="navigate" size={22} color="#007AFF" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 4,
  },
  location: {
    fontSize: 13,
    color: '#666',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  inStockBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#E8F5E9',
  },
  inStockText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4CAF50',
  },
  outOfStockBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#FFEBEE',
  },
  outOfStockText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#F44336',
  },
  navigateButton: {
    padding: 8,
    marginLeft: 8,
  },
});

export default ProductCard;
