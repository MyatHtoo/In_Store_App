import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = ({ category, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: category.color }]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={category.icon} size={32} color="#fff" />
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default CategoryCard;
