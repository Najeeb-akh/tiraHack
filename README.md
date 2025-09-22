# TIRA Hackathon 2025 - Landing Page

A beautiful, responsive React landing page for the TIRA Hackathon 2025 "Innovation for Social Change" event.

## 🌟 Features

- **Modern Design**: Soft, ethical tech aesthetic with organic flow
- **Responsive**: Mobile-first design that works on all devices  
- **Interactive Elements**: 
  - Animated countdown timer
  - Flip-on-hover theme cards
  - Smooth scroll animations
  - FAQ accordion
  - Floating decorative elements
- **Sections Included**:
  - Hero with countdown timer
  - About the hackathon
  - Event schedule timeline
  - Prizes and recognition
  - Themes with project ideas
  - FAQ section
  - Footer with social links

## 🎨 Design System

- **Primary Color**: Indigo Blue (#4B4FE5)
- **Accent Color**: Warm Coral (#FF6B6B)  
- **Highlight Color**: Emerald Green (#28C76F)
- **Background**: Soft gradient (warm beige → soft violet)
- **Typography**: Nunito (headers) + Open Sans (body)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/najeebakh/Desktop/tiraHack
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.js          # Hero with countdown timer
│   ├── AboutSection.js         # About the hackathon
│   ├── ScheduleSection.js      # Event timeline
│   ├── PrizesSection.js        # Prizes and perks
│   ├── ThemesSection.js        # Hackathon themes
│   ├── FAQSection.js           # FAQ accordion
│   ├── Footer.js               # Footer with links
│   └── FloatingElements.js     # Background decorations
├── App.js                      # Main app component
├── index.js                    # App entry point
├── index.css                   # Global styles
└── App.css                     # App-specific styles
```

## ✨ Key Features

### Countdown Timer
- Real-time countdown to March 15, 2025
- Smooth animations and glowing effects
- Responsive design

### Interactive Theme Cards
- Flip animation on hover
- Project ideas on the back
- Beautiful gradients and icons

### Smooth Animations
- Scroll-triggered animations using Framer Motion
- Intersection Observer for performance
- Staggered animations for visual appeal

### FAQ Accordion
- Smooth expand/collapse animations
- Comprehensive information for participants
- Contact information included

## 🔧 Customization

### Updating the Countdown
Edit the date in `src/components/HeroSection.js`:
```javascript
const hackathonDate = new Date('2025-03-15T09:00:00').getTime();
```

### Changing Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-indigo: #4B4FE5;
  --accent-coral: #FF6B6B;
  --highlight-emerald: #28C76F;
  /* ... */
}
```

### Registration Link
Update the registration URL in `src/components/HeroSection.js`:
```javascript
<a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (up to 767px)

## 🎯 Performance

- Optimized animations with Framer Motion
- Lazy loading with Intersection Observer
- Efficient CSS with backdrop-filter effects
- Minimal bundle size

## 📧 Contact

For questions about the hackathon, contact: tira.hackathon@university.edu

## 📄 License

This project is created for the TIRA Hackathon 2025 event.

---

Made with ❤️ by TIRA Students
