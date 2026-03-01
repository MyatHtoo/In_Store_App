# In-Store Navigation App

A comprehensive React Native application built with Expo for in-store navigation, helping customers find products, navigate aisles, and manage shopping lists efficiently.

## Features

### Core Features
- **Interactive Store Map** - Visual floor plans with sections and amenities
- **Product Search** - Fast search with category filters
- **Turn-by-Turn Navigation** - Step-by-step directions to products
- **Shopping List Management** - Create, manage, and check off items
- **Optimal Route Planning** - Efficient path through multiple items
- **Multi-Floor Support** - Navigate across different store floors
- **Product Details** - Complete information about products
- **Real-time Stock Status** - Check product availability

### Screens
1. **Home Screen** - Quick access, categories, featured products
2. **Map Screen** - Interactive store map with floor selection
3. **Search Screen** - Product search with filters
4. **Shopping List Screen** - Manage shopping lists
5. **Profile Screen** - User settings and preferences
6. **Product Detail Screen** - Detailed product information
7. **Navigation Screen** - Turn-by-turn navigation

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   cd In_Store_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Create asset files**
   
   Create an `assets` folder in the root directory and add the following placeholder images:
   - `icon.png` (1024x1024)
   - `splash.png` (1242x2436)
   - `adaptive-icon.png` (1024x1024)
   - `favicon.png` (48x48)

   You can use temporary placeholder images or generate them using online tools.

### Running the App

#### Start the development server
```bash
npm start
```
or
```bash
expo start
```

#### Run on iOS Simulator (Mac only)
```bash
npm run ios
```

#### Run on Android Emulator
```bash
npm run android
```

#### Run in Web Browser
```bash
npm run web
```

## Project Structure

```
In_Store_App/
├── App.js                      # Main app entry point
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
├── package.json                # Dependencies
│
├── src/
│   ├── screens/               # Screen components
│   │   ├── HomeScreen.js
│   │   ├── MapScreen.js
│   │   ├── SearchScreen.js
│   │   ├── ShoppingListScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── ProductDetailScreen.js
│   │   └── NavigationScreen.js
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Button.js
│   │   ├── ProductCard.js
│   │   ├── SearchBar.js
│   │   ├── CategoryCard.js
│   │   ├── Badge.js
│   │   └── index.js
│   │
│   ├── constants/             # App constants
│   │   ├── theme.js          # Colors, fonts, spacing
│   │   └── data.js           # Sample store data
│   │
│   └── utils/                 # Helper functions
│       └── helpers.js         # Utility functions
│
└── assets/                    # Images and static files
    ├── icon.png
    ├── splash.png
    ├── adaptive-icon.png
    └── favicon.png
```

## Customization

### Updating Store Information

Edit `src/constants/data.js` to customize:
- Store name and details
- Categories
- Floor plans
- Products
- Amenities

Example:
```javascript
export const STORE_INFO = {
  name: 'Your Store Name',
  id: 'Store #001',
  location: 'Your Address',
  // ...
};
```

### Changing Theme Colors

Edit `src/constants/theme.js` to customize:
- Primary colors
- Category colors
- Typography
- Spacing

Example:
```javascript
export const COLORS = {
  primary: '#007AFF',  // Change to your brand color
  secondary: '#34C759',
  // ...
};
```

### Modifying Store Layout

Edit the `MapScreen.js` component to customize:
- Floor plans
- Section positions
- Amenity locations
- Navigation paths

## Configuration

### App Configuration (app.json)

Update the following in `app.json`:
- `name` - App display name
- `slug` - App URL slug
- `icon` - Path to app icon
- `splash` - Splash screen configuration
- `ios.bundleIdentifier` - iOS bundle ID
- `android.package` - Android package name

### Navigation Configuration (App.js)

Customize navigation:
- Tab bar appearance
- Screen options
- Navigation structure

## Dependencies

- **expo ~54.0.0** - React Native framework
- **react-navigation** - Navigation library
- **react-native-svg** - SVG rendering for maps
- **@expo/vector-icons** - Icon library
- **expo-location** - Location services

### SDK Version
This app uses **Expo SDK 54** - ensure your Expo Go app is updated to SDK 54 or later.

## Development

### Adding New Screens

1. Create a new screen file in `src/screens/`
2. Import and add to navigation in `App.js`
3. Link from other screens as needed

### Adding New Components

1. Create component in `src/components/`
2. Export from `src/components/index.js`
3. Import where needed

### Testing

Run on multiple devices to ensure:
- Responsive layouts
- Platform-specific features
- Performance optimization

## 📱 Features to Add

### Future Enhancements
- [ ] Real Bluetooth/WiFi indoor positioning
- [ ] QR code scanning for products
- [ ] AR navigation overlay
- [ ] Voice-guided navigation
- [ ] Barcode scanning
- [ ] Price comparison
- [ ] Digital wallet integration
- [ ] Push notifications for deals
- [ ] Social features (share lists)
- [ ] Accessibility improvements

## Troubleshooting

### Common Issues

**App won't start:**
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `expo start -c`
- Delete `node_modules` and reinstall

**Navigation not working:**
- Ensure all screen imports are correct in `App.js`
- Check navigation prop is being passed correctly

**Assets not loading:**
- Verify assets folder exists with required images
- Check file names match those in `app.json`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- Expo team for the amazing framework
- React Navigation for seamless navigation
- React Native community for components and libraries

---

**Built with using React Native & Expo**