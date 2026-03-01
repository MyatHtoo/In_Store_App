import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Rect, Circle, Line, Text as SvgText, Path } from 'react-native-svg';

const MapScreen = ({ navigation }) => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedSection, setSelectedSection] = useState(null);

  const floors = [
    { id: 1, name: 'Ground Floor' },
    { id: 2, name: 'First Floor' },
  ];

  const sections = {
    1: [
      { id: 'A', name: 'Electronics', x: 50, y: 50, width: 100, height: 80, color: '#4A90E2' },
      { id: 'B', name: 'Clothing', x: 200, y: 50, width: 100, height: 80, color: '#E94B3C' },
      { id: 'C', name: 'Groceries', x: 50, y: 180, width: 100, height: 80, color: '#50C878' },
      { id: 'D', name: 'Home & Garden', x: 200, y: 180, width: 100, height: 80, color: '#F7B731' },
    ],
    2: [
      { id: 'E', name: 'Sports', x: 50, y: 50, width: 100, height: 80, color: '#8E44AD' },
      { id: 'F', name: 'Pharmacy', x: 200, y: 50, width: 100, height: 80, color: '#E74C3C' },
      { id: 'G', name: 'Books', x: 50, y: 180, width: 100, height: 80, color: '#3498DB' },
      { id: 'H', name: 'Toys', x: 200, y: 180, width: 100, height: 80, color: '#9B59B6' },
    ],
  };

  const amenities = [
    { icon: 'exit-outline', name: 'Exit', x: 330, y: 30 },
    { icon: 'restaurant-outline', name: 'Food Court', x: 330, y: 130 },
    { icon: 'medical-outline', name: 'First Aid', x: 330, y: 230 },
  ];

  const renderStoreMap = () => {
    const currentSections = sections[selectedFloor] || [];

    return (
      <View style={styles.mapContainer}>
        <Svg width="100%" height="350" viewBox="0 0 380 320">
          {/* Background */}
          <Rect x="0" y="0" width="380" height="320" fill="#f9f9f9" />
          
          {/* Store sections */}
          {currentSections.map((section) => (
            <React.Fragment key={section.id}>
              <Rect
                x={section.x}
                y={section.y}
                width={section.width}
                height={section.height}
                fill={section.color}
                opacity={selectedSection === section.id ? 1 : 0.7}
                rx="8"
                onPress={() => setSelectedSection(section.id)}
              />
              <SvgText
                x={section.x + section.width / 2}
                y={section.y + section.height / 2}
                fill="white"
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {section.name}
              </SvgText>
            </React.Fragment>
          ))}

          {/* Pathway */}
          <Rect x="170" y="10" width="20" height="300" fill="#e0e0e0" />

          {/* Amenities */}
          {amenities.map((amenity, index) => (
            <Circle
              key={index}
              cx={amenity.x}
              cy={amenity.y}
              r="15"
              fill="#666"
            />
          ))}

          {/* Entrance */}
          <Path
            d="M 180 310 L 170 320 L 190 320 Z"
            fill="#34C759"
          />
          <SvgText
            x="180"
            y="305"
            fill="#34C759"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            Entrance
          </SvgText>
        </Svg>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Store Map</Text>
        <Text style={styles.subtitle}>Navigate through the store</Text>
      </View>

      {/* Floor Selector */}
      <View style={styles.floorSelector}>
        {floors.map((floor) => (
          <TouchableOpacity
            key={floor.id}
            style={[
              styles.floorButton,
              selectedFloor === floor.id && styles.floorButtonActive,
            ]}
            onPress={() => {
              setSelectedFloor(floor.id);
              setSelectedSection(null);
            }}
          >
            <Text
              style={[
                styles.floorButtonText,
                selectedFloor === floor.id && styles.floorButtonTextActive,
              ]}
            >
              {floor.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Map */}
      {renderStoreMap()}

      {/* Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Legend</Text>
        <View style={styles.legendItems}>
          {amenities.map((amenity, index) => (
            <View key={index} style={styles.legendItem}>
              <Ionicons name={amenity.icon} size={20} color="#666" />
              <Text style={styles.legendText}>{amenity.name}</Text>
            </View>
          ))}
          <View style={styles.legendItem}>
            <View style={styles.pathwayIndicator} />
            <Text style={styles.legendText}>Pathway</Text>
          </View>
        </View>
      </View>

      {/* Quick Navigation */}
      <View style={styles.quickNav}>
        <Text style={styles.quickNavTitle}>Quick Navigation</Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Ionicons name="search" size={20} color="#007AFF" />
          <Text style={styles.navButtonText}>Find a Product</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('List')}
        >
          <Ionicons name="list" size={20} color="#007AFF" />
          <Text style={styles.navButtonText}>View Shopping List</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
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
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  floorSelector: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  floorButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  floorButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  floorButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  floorButtonTextActive: {
    color: '#fff',
  },
  mapContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  legend: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 12,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  legendItems: {
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
  pathwayIndicator: {
    width: 20,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  quickNav: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 15,
    borderRadius: 12,
  },
  quickNavTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
    gap: 10,
  },
  navButtonText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default MapScreen;
