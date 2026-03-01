/**
 * Calculate distance between two points
 * @param {Object} point1 - First point with x, y coordinates
 * @param {Object} point2 - Second point with x, y coordinates
 * @returns {number} Distance in meters (scaled)
 */
export const calculateDistance = (point1, point2) => {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  // Convert to approximate meters (assuming 1 unit = ~0.5 meters)
  return Math.round(distance * 0.5);
};

/**
 * Calculate estimated time based on distance
 * @param {number} distance - Distance in meters
 * @param {number} walkingSpeed - Walking speed in m/s (default: 1.4 m/s)
 * @returns {number} Estimated time in minutes
 */
export const calculateEstimatedTime = (distance, walkingSpeed = 1.4) => {
  const timeInSeconds = distance / walkingSpeed;
  return Math.ceil(timeInSeconds / 60); // Convert to minutes and round up
};

/**
 * Generate optimal route for multiple locations
 * Uses nearest neighbor algorithm for simplicity
 * @param {Array} locations - Array of location objects with x, y coordinates
 * @param {Object} startPoint - Starting point with x, y coordinates
 * @returns {Array} Optimized route with locations in order
 */
export const generateOptimalRoute = (locations, startPoint) => {
  if (!locations || locations.length === 0) return [];
  
  const unvisited = [...locations];
  const route = [];
  let currentPoint = startPoint;

  while (unvisited.length > 0) {
    let nearestIndex = 0;
    let minDistance = Infinity;

    unvisited.forEach((location, index) => {
      const distance = calculateDistance(currentPoint, location);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });

    const nearest = unvisited[nearestIndex];
    route.push({
      ...nearest,
      distance: minDistance,
    });

    currentPoint = nearest;
    unvisited.splice(nearestIndex, 1);
  }

  return route;
};

/**
 * Get navigation instructions for a path
 * @param {Object} start - Start point
 * @param {Object} end - End point
 * @returns {Array} Array of navigation steps
 */
export const getNavigationInstructions = (start, end) => {
  const distance = calculateDistance(start, end);
  const estimatedTime = calculateEstimatedTime(distance);

  const instructions = [
    { id: 1, instruction: 'Start at Main Entrance', icon: 'home', distance: '0m' },
  ];

  // Simple path generation (can be enhanced with actual pathfinding)
  if (end.y < start.y) {
    instructions.push({
      id: 2,
      instruction: `Walk straight for ${Math.floor(distance * 0.5)} meters`,
      icon: 'arrow-up',
      distance: `${Math.floor(distance * 0.5)}m`,
    });
  }

  if (end.x > start.x) {
    instructions.push({
      id: 3,
      instruction: `Turn right at ${end.section || 'the section'}`,
      icon: 'arrow-forward',
      distance: `${Math.floor(distance * 0.8)}m`,
    });
  } else if (end.x < start.x) {
    instructions.push({
      id: 3,
      instruction: `Turn left at ${end.section || 'the section'}`,
      icon: 'arrow-back',
      distance: `${Math.floor(distance * 0.8)}m`,
    });
  }

  instructions.push({
    id: 4,
    instruction: `You've arrived at ${end.name || 'destination'}`,
    icon: 'flag',
    distance: `${distance}m`,
  });

  return instructions;
};

/**
 * Format phone number
 * @param {string} phoneNumber - Raw phone number
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return phoneNumber;
};

/**
 * Format price
 * @param {number} price - Price value
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

/**
 * Debounce function for search
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default {
  calculateDistance,
  calculateEstimatedTime,
  generateOptimalRoute,
  getNavigationInstructions,
  formatPhoneNumber,
  formatPrice,
  debounce,
};
