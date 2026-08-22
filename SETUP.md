# Portfolio Setup Instructions

## Quick Start (Windows/Mac/Linux with VS Code)

### Step 1: Open in VS Code
```
1. Open VS Code
2. File → Open Folder
3. Select the portfolio-balaji folder
```

### Step 2: Open Terminal in VS Code
```
View → Terminal (or Ctrl + `)
```

### Step 3: Run These Commands in Terminal

**Install Dependencies:**
```bash
npm install
```

**Start Development Server:**
```bash
npm run dev
```

The portfolio will automatically open in your browser at `http://localhost:5173`

### Step 4: Make Changes
- Edit `src/data/portfolio.js` to update your information
- Changes reload automatically in the browser

### Step 5: Build for Production
```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

## Troubleshooting

### If npm install fails:
```bash
npm install --legacy-peer-deps
```

### If port 5173 is in use:
```bash
npm run dev -- --port 3000
```

### If you get "vite: not found":
```bash
npx vite
```

### Clear everything and restart:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Environment Info
- Node.js: v14+
- npm: v6+
- Browser: Chrome, Firefox, Safari, Edge (latest)

## Support
All code is production-ready. If you encounter issues, check:
1. Node.js version: `node --version`
2. npm version: `npm --version`
3. Internet connection for npm downloads
