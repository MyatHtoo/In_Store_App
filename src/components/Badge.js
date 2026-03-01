import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ text, variant = 'default', style }) => {
  const getBadgeStyle = () => {
    switch (variant) {
      case 'success':
        return [styles.badge, styles.successBadge];
      case 'error':
        return [styles.badge, styles.errorBadge];
      case 'warning':
        return [styles.badge, styles.warningBadge];
      case 'info':
        return [styles.badge, styles.infoBadge];
      default:
        return [styles.badge, styles.defaultBadge];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'success':
        return [styles.text, styles.successText];
      case 'error':
        return [styles.text, styles.errorText];
      case 'warning':
        return [styles.text, styles.warningText];
      case 'info':
        return [styles.text, styles.infoText];
      default:
        return [styles.text, styles.defaultText];
    }
  };

  return (
    <View style={[...getBadgeStyle(), style]}>
      <Text style={getTextStyle()}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  defaultBadge: {
    backgroundColor: '#f0f0f0',
  },
  successBadge: {
    backgroundColor: '#E8F5E9',
  },
  errorBadge: {
    backgroundColor: '#FFEBEE',
  },
  warningBadge: {
    backgroundColor: '#FFF3E0',
  },
  infoBadge: {
    backgroundColor: '#E3F2FD',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
  defaultText: {
    color: '#666',
  },
  successText: {
    color: '#4CAF50',
  },
  errorText: {
    color: '#F44336',
  },
  warningText: {
    color: '#FF9800',
  },
  infoText: {
    color: '#2196F3',
  },
});

export default Badge;
