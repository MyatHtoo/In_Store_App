import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Rect, Circle, Line, Path, Polyline } from 'react-native-svg';

const NavigationScreen = ({ route }) => {
  const { product, items } = route.params;
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Navigation steps
  const navigationSteps = [
    { id: 1, instruction: 'Start at Main Entrance', icon: 'home', distance: '0m' },
    { id: 2, instruction: 'Walk straight for 20 meters', icon: 'arrow-up', distance: '20m' },
    { id: 3, instruction: 'Turn right at Electronics section', icon: 'arrow-forward', distance: '35m' },
    { id: 4, instruction: `You've arrived at ${product?.name || 'destination'}`, icon: 'flag', distance: '45m' },
  ];

  // If multiple items, create optimal route
  const optimizedRoute = items ? [
    { step: 1, item: items[0], distance: '20m' },
    { step: 2, item: items[1], distance: '45m' },
    { step: 3, item: items[2], distance: '60m' },
  ] : null;

  const startNavigation = () => {
    setIsNavigating(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < navigationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderMap = () => {
    return (
      <View style={styles.mapContainer}>
        <Svg width="100%" height="300" viewBox="0 0 350 300">
          {/* Background */}
          <Rect x="0" y="0" width="350" height="300" fill="#f9f9f9" />
          
          {/* Store Layout */}
          <Rect x="30" y="30" width="80" height="60" fill="#4A90E2" opacity="0.3" rx="4" />
          <Rect x="130" y="30" width="80" height="60" fill="#E94B3C" opacity="0.3" rx="4" />
          <Rect x="230" y="30" width="80" height="60" fill="#50C878" opacity="0.3" rx="4" />
          <Rect x="30" y="120" width="80" height="60" fill="#F7B731" opacity="0.3" rx="4" />
          <Rect x="130" y="120" width="80" height="60" fill="#8E44AD" opacity="0.3" rx="4" />
          <Rect x="230" y="120" width="80" height="60" fill="#E74C3C" opacity="0.3" rx="4" />

          {/* Navigation Path */}
          <Polyline
            points="175,280 175,240 175,180 175,120 220,120"
            stroke="#007AFF"
            strokeWidth="4"
            fill="none"
            strokeDasharray="5,5"
          />

          {/* Current Location */}
          <Circle cx="175" cy="280" r="8" fill="#34C759" />
          <Circle cx="175" cy="280" r="12" fill="#34C759" opacity="0.3" />

          {/* Destination */}
          <Circle cx="220" cy="120" r="8" fill="#FF3B30" />
          <Circle cx="220" cy="120" r="12" fill="#FF3B30" opacity="0.3" />

          {/* Entrance */}
          <Path d="M 165 295 L 175 285 L 185 295 Z" fill="#34C759" />
        </Svg>
      </View>
    );
  };

  if (optimizedRoute) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Optimal Route</Text>
          <Text style={styles.subtitle}>Navigate to {items.length} items efficiently</Text>
        </View>

        {renderMap()}

        <View style={styles.routeInfo}>
          <View style={styles.routeStats}>
            <View style={styles.statBlock}>
              <Ionicons name="walk" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Total Distance</Text>
              <Text style={styles.statValue}>~150m</Text>
            </View>
            <View style={styles.statBlock}>
              <Ionicons name="time" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Est. Time</Text>
              <Text style={styles.statValue}>~8 min</Text>
            </View>
            <View style={styles.statBlock}>
              <Ionicons name="basket" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Items</Text>
              <Text style={styles.statValue}>{items.length}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Route Stops</Text>
          {optimizedRoute.map((stop, index) => (
            <View key={stop.step} style={styles.stopCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{stop.step}</Text>
              </View>
              <View style={styles.stopInfo}>
                <Text style={styles.stopName}>{stop.item.name}</Text>
                <Text style={styles.stopLocation}>{stop.item.location}</Text>
              </View>
              <Text style={styles.stopDistance}>{stop.distance}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.startButton} onPress={startNavigation}>
          <Ionicons name="navigate" size={24} color="#fff" />
          <Text style={styles.startButtonText}>Start Navigation</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Destination Info */}
        <View style={styles.destinationCard}>
          <View style={styles.destinationInfo}>
            <Text style={styles.destinationName}>{product?.name || 'Product'}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location" size={16} color="#666" />
              <Text style={styles.locationText}>
                {product?.location || 'Aisle 3A'} • Floor {product?.floor || 1}
              </Text>
            </View>
          </View>
          <View style={styles.distanceBadge}>
            <Text style={styles.distanceText}>45m</Text>
          </View>
        </View>

        {/* Map */}
        {renderMap()}

        {/* Navigation Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="walk" size={24} color="#007AFF" />
            <Text style={styles.statValue}>45m</Text>
            <Text style={styles.statLabel}>Distance</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="time" size={24} color="#007AFF" />
            <Text style={styles.statValue}>2 min</Text>
            <Text style={styles.statLabel}>Est. Time</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="layers" size={24} color="#007AFF" />
            <Text style={styles.statValue}>Floor {product?.floor || 1}</Text>
            <Text style={styles.statLabel}>Floor</Text>
          </View>
        </View>

        {/* Navigation Steps */}
        {isNavigating ? (
          <View style={styles.activeNavigation}>
            <View style={styles.currentStepCard}>
              <View style={styles.stepIconContainer}>
                <Ionicons
                  name={navigationSteps[currentStep].icon}
                  size={40}
                  color="#007AFF"
                />
              </View>
              <Text style={styles.currentStepText}>
                {navigationSteps[currentStep].instruction}
              </Text>
              <Text style={styles.stepDistance}>
                {navigationSteps[currentStep].distance}
              </Text>
            </View>

            <View style={styles.stepIndicators}>
              {navigationSteps.map((step, index) => (
                <View
                  key={step.id}
                  style={[
                    styles.stepIndicator,
                    index === currentStep && styles.activeStepIndicator,
                    index < currentStep && styles.completedStepIndicator,
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.nextStepButton}
              onPress={nextStep}
              disabled={currentStep === navigationSteps.length - 1}
            >
              <Text style={styles.nextStepText}>
                {currentStep === navigationSteps.length - 1 ? 'Arrived!' : 'Next Step'}
              </Text>
              {currentStep < navigationSteps.length - 1 && (
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Navigation Steps</Text>
            {navigationSteps.map((step, index) => (
              <View key={step.id} style={styles.stepCard}>
                <View style={styles.stepIcon}>
                  <Ionicons name={step.icon} size={20} color="#007AFF" />
                </View>
                <View style={styles.stepInfo}>
                  <Text style={styles.stepText}>{step.instruction}</Text>
                  <Text style={styles.stepMeta}>Step {index + 1} • {step.distance}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {!isNavigating && (
        <TouchableOpacity style={styles.startButton} onPress={startNavigation}>
          <Ionicons name="navigate" size={24} color="#fff" />
          <Text style={styles.startButtonText}>Start Navigation</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  destinationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 12,
  },
  destinationInfo: {
    flex: 1,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  distanceBadge: {
    backgroundColor: '#E8F4FD',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  distanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  mapContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  stepIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F4FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  stepInfo: {
    flex: 1,
  },
  stepText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  stepMeta: {
    fontSize: 13,
    color: '#666',
  },
  activeNavigation: {
    padding: 20,
  },
  currentStepCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  stepIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F4FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  currentStepText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  stepDistance: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  stepIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  stepIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  activeStepIndicator: {
    backgroundColor: '#007AFF',
  },
  completedStepIndicator: {
    backgroundColor: '#34C759',
  },
  nextStepButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  nextStepText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  routeInfo: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    borderRadius: 12,
    padding: 20,
  },
  routeStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBlock: {
    alignItems: 'center',
  },
  stopCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  stopInfo: {
    flex: 1,
  },
  stopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  stopLocation: {
    fontSize: 14,
    color: '#666',
  },
  stopDistance: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});

export default NavigationScreen;
