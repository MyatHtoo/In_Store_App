# Quick Setup Guide

Follow these steps to get your In-Store Navigation App running:

## Step 1: Prerequisites ✅

Make sure you have installed:
- **Node.js** (v14 or newer) - [Download](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Expo CLI** - Install with: `npm install -g expo-cli`

## Step 2: Install Dependencies 📦

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages (may take a few minutes).

## Step 3: Create Asset Files 🎨

The app needs some image files to run. Create placeholder images or use any image editor:

1. Create these files in the `assets` folder:
   - `icon.png` (1024x1024) - App icon
   - `splash.png` (1242x2436) - Loading screen
   - `adaptive-icon.png` (1024x1024) - Android icon
   - `favicon.png` (48x48) - Web icon

**Quick Solution:** Use a simple solid color square image for all of them during development.

## Step 4: Start the App 🚀

Run this command:

```bash
npm start
```

or

```bash
expo start
```

This will:
1. Start the Metro bundler
2. Open Expo DevTools in your browser
3. Show a QR code

## Step 5: View the App 📱

### Option A: Use Your Phone
1. Install **Expo Go** app on your phone
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Scan the QR code shown in terminal/browser
3. App will load on your phone!

### Option B: Use Simulator/Emulator
- **iOS** (Mac only): Press `i` in terminal
- **Android**: Press `a` in terminal (requires Android Studio)
- **Web**: Press `w` in terminal

## Step 6: Explore the App 🎉

Navigate through these screens:
1. **Home** - Browse categories and featured products
2. **Map** - View store layout and floors
3. **Search** - Find specific products
4. **Shopping List** - Manage your items
5. **Profile** - View settings

## Common Issues & Solutions 🔧

### "Module not found" error
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
expo start -c
```

### Assets not loading
- Make sure the `assets` folder has all 4 image files
- Check file names match exactly (case-sensitive)

### App won't connect to phone
- Ensure phone and computer are on same WiFi network
- Try tunnel mode: `expo start --tunnel`

### npm install fails
```bash
# Try using legacy peer deps
npm install --legacy-peer-deps
```

## Customization 🎨

### Change Store Name
Edit `src/constants/data.js`:
```javascript
export const STORE_INFO = {
  name: 'Your Store Name',
  // ...
};
```

### Change Colors
Edit `src/constants/theme.js`:
```javascript
export const COLORS = {
  primary: '#YOUR_COLOR',
  // ...
};
```

### Add Products
Edit `src/constants/data.js` - add items to `PRODUCTS` array

## Next Steps 📚

1. Read the full [README.md](README.md) for detailed documentation
2. Explore the code in `src/screens/` to understand structure
3. Customize the store data in `src/constants/data.js`
4. Modify the theme in `src/constants/theme.js`
5. Build for production when ready

## Need Help? 💡

- Check [Expo Documentation](https://docs.expo.dev/)
- Review [React Navigation Docs](https://reactnavigation.org/)
- Open an issue on GitHub

---

**Happy Coding! 🎊**
