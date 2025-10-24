# Language Switcher Guide

## Overview
Your RIMAL website now supports bilingual functionality with Arabic (RTL) and English (LTR) language options. Users can easily switch between languages using the language switcher button in the navigation bar.

## Features Implemented

### 1. **Language Switcher Button**
- Located in the navigation menu (top-right on desktop, within mobile menu on mobile)
- Displays current language indicator:
  - Shows "EN" when in Arabic mode (clicking will switch to English)
  - Shows "ع" when in English mode (clicking will switch to Arabic)
- Fully responsive and works on all devices

### 2. **Automatic Language Persistence**
- User's language preference is saved in browser's localStorage
- Website remembers the selected language across sessions
- Default language: Arabic (RTL)

### 3. **RTL/LTR Support**
- **Arabic (ar)**: Right-to-left (RTL) layout
- **English (en)**: Left-to-right (LTR) layout
- Layout automatically adjusts when switching languages

### 4. **Comprehensive Translation**
All website content is translated, including:
- Navigation menu
- Logo and tagline
- Hero section (slogan, description, features)
- Statistics section
- About Us section (with values)
- CEO/Founder section (full biography)
- Gallery section
- Services section (all 6 services with features)
- Projects section (filters and project names)
- Contact section (form labels, contact info)
- Footer (all sections)
- Form success messages

## How It Works

### User Experience
1. **Desktop View**: Language switcher button appears as the last item in the navigation menu
2. **Mobile View**: Language switcher appears at the bottom of the mobile menu
3. **One Click Switch**: Simply click the button to toggle between languages
4. **Instant Update**: All text content updates immediately without page reload
5. **Layout Adjustment**: Text direction (RTL/LTR) changes automatically

### Technical Implementation

#### HTML
- All translatable text elements have `data-lang-key` attributes
- Example: `<h2 data-lang-key="hero_slogan">شريكك الموثوق...</h2>`

#### JavaScript
- **Translation Object**: Located in `script.js` with two language sets (`ar` and `en`)
- **switchLanguage() Function**: Handles language switching
  - Updates HTML `lang` and `dir` attributes
  - Updates all elements with `data-lang-key`
  - Saves preference to localStorage
  - Updates button text
- **Auto-initialization**: Language is set on page load from localStorage or defaults to Arabic

#### CSS
- Language switcher button styling with hover effects
- Responsive design for mobile devices
- Smooth transitions and animations

## Customization

### Adding New Translatable Content
1. Add `data-lang-key="your_key"` to the HTML element
2. Add translations to both `ar` and `en` objects in `script.js`:
```javascript
ar: {
    your_key: 'النص بالعربية'
},
en: {
    your_key: 'Text in English'
}
```

### Changing Default Language
Modify the default language in `script.js`:
```javascript
let currentLang = localStorage.getItem('language') || 'en'; // Change 'ar' to 'en'
```

## Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Uses localStorage (supported by all browsers since IE8+)
- Gracefully falls back to Arabic if localStorage is not available

## Testing Checklist
✅ Language switcher button visible in navbar
✅ Button shows correct language indicator
✅ Clicking button switches language
✅ All text content translates correctly
✅ Layout direction changes (RTL ↔ LTR)
✅ Language preference persists on page reload
✅ Mobile menu includes language switcher
✅ Form success messages display in selected language
✅ No console errors
✅ Works on mobile and desktop devices

## Files Modified
1. **index.html**
   - Added language switcher button to navbar
   - Added `data-lang-key` attributes to all translatable elements

2. **script.js**
   - Added comprehensive translations object (Arabic and English)
   - Implemented `switchLanguage()` function
   - Added language initialization on page load
   - Updated form success messages to use translations

3. **styles.css**
   - Added `.lang-switcher-btn` styles
   - Added responsive styles for mobile view
   - Hover and transition effects

4. **LANGUAGE_SWITCHER_GUIDE.md** (this file)
   - Documentation for the language switcher feature

## Support
The language switcher is fully functional and ready to use. If you need to add more translations or modify existing ones, simply update the `translations` object in `script.js`.

---

**Last Updated**: October 2025
**Version**: 1.0

