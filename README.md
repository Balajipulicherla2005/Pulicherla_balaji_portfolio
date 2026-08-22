# Pulicherla Balaji - Portfolio Website

A modern, professional portfolio website built with React.js, Framer Motion, and Vite.

## Features

✨ **Modern Design**
- Clean, minimalist interface optimized for recruiters
- Dark mode and light mode support with persistent theme preference
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations using Framer Motion

🎯 **Complete Sections**
- Hero section with professional introduction
- About section highlighting skills and experience
- Technical skills organized by category
- Professional experience timeline
- Featured projects with filtering and detailed view
- Education and certifications showcase
- Contact information with easy copy-to-clipboard
- Professional footer

⚡ **Performance & Accessibility**
- Optimized React components
- Minimal dependencies
- Semantic HTML
- Keyboard navigation support
- Reduced motion preferences respected
- Excellent color contrast
- ARIA labels for accessibility

🎨 **Design System**
- Professional color palette with primary accent color
- Consistent spacing and typography
- Responsive grid layouts
- Smooth transitions and micro-interactions

## Technology Stack

- **Frontend**: React.js 18
- **Bundler**: Vite
- **Animations**: Framer Motion 11
- **Styling**: CSS3 with CSS Variables
- **Development**: Modern JavaScript (ES6+)

## Project Structure

```
portfolio-balaji/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ThemeToggle.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Experience.jsx & Experience.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Education.jsx & Education.css
│   │   ├── Certifications.jsx & Certifications.css
│   │   ├── Contact.jsx & Contact.css
│   │   ├── Footer.jsx & Footer.css
│   │
│   ├── data/
│   │   └── portfolio.js (All portfolio content - EDIT THIS FILE)
│   │
│   ├── assets/
│   │   └── profile.jpg
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Navigate to project directory**
   ```bash
   cd portfolio-balaji
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will open automatically in your default browser at `http://localhost:5173`

## Development

### Running the Development Server
```bash
npm run dev
```
- Hot reload enabled
- Development build with source maps
- Automatic browser opening

### Building for Production
```bash
npm run build
```
- Creates optimized production build
- Output in `dist/` directory
- Minified and optimized assets

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Useful for testing before deployment

## Updating Portfolio Information

All portfolio content is stored in **`src/data/portfolio.js`**

### To Update Information:

1. **Open** `src/data/portfolio.js`

2. **Edit the following sections:**
   - `personal`: Name, email, location, social links
   - `about`: Professional summary and details
   - `skills`: Technical skills organized by category
   - `experience`: Work experience and internships
   - `projects`: Featured projects with details
   - `education`: Educational background
   - `certifications`: Certifications and achievements

3. **No component changes needed** - Simply update the data object

### Example: Adding a New Project

```javascript
{
  id: 6,
  name: "Project Name",
  category: "Full-Stack",
  problem: "Problem statement",
  solution: "How you solved it",
  features: ["Feature 1", "Feature 2"],
  tech: ["React.js", "Node.js"],
  contribution: "Your contribution",
  github: "https://github.com/...",
  demo: "https://example.com"
}
```

## Customization

### Theme Colors
Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --primary-light: #60a5fa;
  /* More colors... */
}
```

### Fonts
The portfolio uses system fonts for performance. To change:
- Edit the `font-family` in `src/styles/globals.css`
- Import web fonts in `index.html`

### Animations
Framer Motion animations are configured in each section component:
- Adjust `transition` durations
- Modify `variants` for different animation effects
- Check `prefers-reduced-motion` support for accessibility

## Responsive Design

The portfolio is tested and optimized for:
- **Mobile**: 320px, 375px, 425px
- **Tablet**: 768px
- **Laptop**: 1024px
- **Desktop**: 1440px, 1920px

No horizontal scrolling, no broken layouts.

## Deployment

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect GitHub to Vercel
3. Vercel automatically builds and deploys

### Deploy to Netlify
1. Run `npm run build`
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push `dist/` folder to `gh-pages` branch

## Performance

- **Lighthouse Score**: Optimized for 90+
- **Bundle Size**: Minimal (React + Framer Motion)
- **Load Time**: < 2 seconds
- **SEO**: Fully optimized with meta tags

## Accessibility

✓ Semantic HTML structure
✓ ARIA labels on interactive elements
✓ Keyboard navigation support
✓ Focus visible indicators
✓ Color contrast WCAG AA compliant
✓ Reduced motion preferences respected
✓ Alt text for images

## Security

- No API keys or secrets hardcoded
- `.gitignore` configured to prevent accidental commits
- Safe for public GitHub repository
- No sensitive personal information exposed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not showing
- Ensure images are in `src/assets/`
- Check file paths in components

## Contributing

This is a personal portfolio - customize it to match your professional brand!

## License

© 2026 Pulicherla Balaji. All rights reserved.

## Support

For issues or questions, create a GitHub issue or contact through the portfolio contact section.

---

**Built with React.js & Framer Motion** ✨
