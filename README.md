# RIMAL Real Estate Website
## رمال للاستثمار والتطوير العقاري

A professional, modern, and fully responsive real estate website for RIMAL Real Estate Investment and Development company based in New Damietta, Egypt.

---

## 🌟 Features

### Design & Branding
- **Modern & Elegant Design** with clean typography and spacious layout
- **Brand Colors**: Deep Navy Blue (#1F3A4D) and Aqua Blue (#4EC3E0)
- **RTL Support** for Arabic language with "Cairo" web font
- **Fully Responsive** for all devices (desktop, tablet, mobile)

### Sections
1. **Hero Section** - Eye-catching landing with company logo, slogan, and CTA
2. **Statistics** - Animated counters showing years of experience, projects, and satisfied clients
3. **About Us** - Company story, values, and experience
4. **Services** - 6 comprehensive real estate services with hover effects
5. **Projects Gallery** - Filterable photo gallery with lightbox functionality
6. **Contact** - Contact form, company details, and Google Maps integration
7. **Footer** - Complete company information and social media links

### Interactive Features
- ✅ Sticky navigation with smooth scrolling
- ✅ Mobile-friendly hamburger menu
- ✅ Animated statistics counters
- ✅ Scroll reveal animations
- ✅ Projects filter (All, Residential, Commercial, Land)
- ✅ Lightbox image gallery with keyboard navigation
- ✅ Contact form with validation
- ✅ Scroll to top button
- ✅ WhatsApp floating button
- ✅ Parallax effects
- ✅ Smooth hover animations

---

## 🚀 Quick Start

### Option 1: Direct Open
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For better performance and to avoid CORS issues with images:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

---

## 📁 File Structure

```
rimal-website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/             # Project images
    ├── 1/              # Property plans
    ├── 2/              # Land development
    ├── 3/              # Residential projects
    ├── 4/              # Commercial projects
    ├── 5/              # Additional projects
    └── 6/              # More projects
```

---

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Deep Navy Blue | `#1F3A4D` | Main background, headers |
| Aqua Blue | `#4EC3E0` | Accents, buttons, highlights |
| Light Aqua | `#7DD4E8` | Secondary accents |
| Dark Navy | `#152B38` | Darker elements |
| White | `#FFFFFF` | Text, backgrounds |
| Light Gray | `#F5F7FA` | Section backgrounds |
| Gray | `#8B9DAF` | Secondary text |

---

## 🔧 Customization

### Update Company Information

**Phone Number:**
- Edit in `index.html` (multiple locations)
- Update WhatsApp link in `script.js` line 372

**Email:**
- Search for `info@rimal-realestate.com` in `index.html`

**Address:**
- Update in Contact section and Footer

**Social Media Links:**
- Find all `<a href="#">` links in Footer and Contact sections
- Replace `#` with actual URLs

### Add More Projects

1. Add images to appropriate folders in `images/`
2. Update `projectImages` array in `script.js` (line 169)
3. Add new project cards in the Projects section of `index.html`

### Change Colors

All colors are defined in CSS variables in `styles.css` (lines 13-24):
```css
:root {
    --navy-blue: #1F3A4D;
    --aqua-blue: #4EC3E0;
    /* ... more colors */
}
```

---

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and save
4. Access via `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to netlify.com/drop
2. Or connect GitHub repository for automatic deployment

### Traditional Hosting
Upload all files to your web hosting via FTP/cPanel:
- Upload `index.html`, `styles.css`, `script.js`
- Upload entire `images/` folder
- Maintain folder structure

---

## 📊 Performance Optimization

- Images should be optimized (compressed) for web
- Consider using WebP format for better compression
- Lazy loading is recommended for images
- Minify CSS and JS for production

---

## 🔐 Security Notes

- Contact form currently shows success message without backend
- Implement server-side validation before production
- Add reCAPTCHA to prevent spam
- Sanitize all user inputs

---

## 📝 TODO for Production

- [ ] Connect contact form to backend/email service
- [ ] Optimize and compress all images
- [ ] Add actual Google Maps coordinates
- [ ] Update all social media links
- [ ] Add reCAPTCHA to contact form
- [ ] Set up analytics (Google Analytics)
- [ ] Add SEO meta tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Test on all devices and browsers

---

## 🤝 Support

For support or inquiries:
- **Phone:** 010 66053511
- **Email:** info@rimal-realestate.com
- **Location:** New Damietta, next to Horus University

---

## 📄 License

© 2025 RIMAL Real Estate Investment and Development. All rights reserved.

---

## 🎯 Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Font Awesome 6.4.0 (Icons)
- Google Fonts (Cairo)

---

**Built with ❤️ for RIMAL Real Estate**

