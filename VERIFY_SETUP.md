# Setup Verification Checklist

Run these checks to verify your migration is complete and the app is ready to run.

## Quick Check (1 minute)

```bash
# 1. Navigate to project
cd /vercel/share/v0-project

# 2. Check key files exist
ls package.json next.config.ts app/page.tsx lib/constants.ts

# 3. Check Node version (should be 18+)
node --version

# 4. Install dependencies
npm install

# 5. Start dev server
npm run dev

# 6. Visit http://localhost:3000 in browser
# You should see the Dynapharm calculator app!
```

## Detailed Verification

### Step 1: Project Location
- [ ] You're in the correct directory: `/vercel/share/v0-project`
- [ ] Run: `pwd` to verify current directory
- [ ] Run: `ls -la` to see project files

### Step 2: Node.js and npm
- [ ] Node.js version is 18.0.0 or higher
  ```bash
  node --version
  # Should show: v18.0.0 or higher
  ```

- [ ] npm version is 8.0.0 or higher
  ```bash
  npm --version
  # Should show: 8.0.0 or higher
  ```

### Step 3: Required Files Exist

Run these commands - all should succeed without "not found" errors:

```bash
# Core application files
ls app/page.tsx           # Home page - should exist
ls app/layout.tsx         # Root layout - should exist
ls app/globals.css        # Global styles - should exist
ls app/components/Calculator.tsx  # Main component - should exist

# Configuration files
ls next.config.ts         # Next.js config - should exist
ls tsconfig.json          # TypeScript config - should exist
ls tailwind.config.ts     # Tailwind config - should exist
ls postcss.config.mjs     # PostCSS config - should exist
ls package.json           # Dependencies - should exist

# Utilities and constants
ls lib/constants.ts       # All 76 products - should exist

# Documentation (should have many .md files)
ls *.md                   # Should show 12+ documentation files
```

### Step 4: Dependencies

Check that Next.js and other dependencies are listed in package.json:

```bash
# Should show "next": "^16.0.0"
cat package.json | grep '"next"'

# Should show "react": "^19.0.0"
cat package.json | grep '"react"'

# Should show "tailwindcss": "^4.1.14"
cat package.json | grep '"tailwindcss"'

# Should NOT show "vite" (Vite removed)
cat package.json | grep "vite" && echo "ERROR: Vite still in dependencies!" || echo "OK: Vite removed"

# Should NOT show "@google/genai" (Gemini removed)
cat package.json | grep "genai" && echo "ERROR: Gemini still in dependencies!" || echo "OK: Gemini removed"
```

### Step 5: Install Dependencies

```bash
npm install
# This should complete without errors
# Creates node_modules/ directory
```

### Step 6: Start Dev Server

```bash
npm run dev
# Should output:
# ▲ Next.js X.X.X
# - Local: http://localhost:3000
# - Environments: .env.local
```

### Step 7: Verify App Loads

Open http://localhost:3000 in your browser:

- [ ] Page loads without blank screen
- [ ] No JavaScript errors in console (F12 → Console)
- [ ] You can see the calculator interface
- [ ] Products list is visible
- [ ] Search box works
- [ ] Can add items to cart

### Step 8: Test Features

In the browser at http://localhost:3000:

```
☐ Search functionality
  - Type in search box
  - Products filter in real-time
  - Results show product names

☐ Product selection
  - Can click "+" to add items
  - Can click "-" to remove items
  - Quantity increases/decreases

☐ Cart display
  - Items appear in cart
  - Total BV calculates
  - Total shows in header

☐ Responsive design
  - Resize browser window smaller
  - Layout adapts to mobile size
  - All controls still accessible

☐ No console errors
  - Press F12 to open DevTools
  - Go to Console tab
  - Should be no red error messages
```

### Step 9: Build for Production

```bash
npm run build
# Should complete successfully
# Creates .next/ directory with built files
```

### Step 10: Start Production Server

```bash
npm start
# Should start the production version
# Usually on http://localhost:3000
```

## File Verification

### Check app/ directory structure:
```bash
ls -la app/
# Should show:
# - page.tsx (the home page)
# - layout.tsx (root layout)
# - globals.css (global styles)
# - components/ (directory)
#   - Calculator.tsx (main component)
```

### Check lib/ directory:
```bash
ls -la lib/
# Should show:
# - constants.ts (all products)
```

### Check configuration files:
```bash
ls -la | grep -E "(next|tsconfig|tailwind|postcss|package)"
# Should show:
# - next.config.ts
# - tsconfig.json
# - tailwind.config.ts
# - postcss.config.mjs
# - package.json
# - package-lock.json
```

## TypeScript Verification

```bash
# Check TypeScript compiles without errors
npx tsc --noEmit
# Should have no output (no errors) or show warnings only
```

## Git Verification

```bash
# Verify git status
git status
# Should show:
# - On branch: should be on the right branch
# - Nothing to commit: (if not making changes)
# - Or: Files changed (if you've edited)

# View git log to see migration commit
git log --oneline | head -5
# Should show recent commits
```

## Performance Checks

### Check build size:
```bash
npm run build
ls -lh .next/static/chunks/
# Should show reasonably sized chunks (not megabytes)
```

### Check dev server speed:
```bash
npm run dev
# Note the startup time
# Should be <2 seconds
```

## Quick Troubleshooting

If any check fails, try these:

### Node/npm issues:
```bash
node --version  # Should be 18+
npm --version   # Should be 8+
```

### Missing dependencies:
```bash
rm -rf node_modules
npm install
```

### Build issues:
```bash
rm -rf .next
npm run build
```

### Module not found errors:
```bash
# Check tsconfig.json paths
cat tsconfig.json | grep -A 2 "paths"

# Should show:
# "@/*": ["./*"]
```

## Checklist Summary

Mark these as complete:

**Environment:**
- [ ] Node.js 18+ installed
- [ ] npm 8+ installed
- [ ] In correct directory (/vercel/share/v0-project)

**Files:**
- [ ] app/page.tsx exists
- [ ] app/layout.tsx exists
- [ ] app/components/Calculator.tsx exists
- [ ] lib/constants.ts exists
- [ ] next.config.ts exists
- [ ] package.json has Next.js

**Dependencies:**
- [ ] npm install completes
- [ ] node_modules/ created
- [ ] Vite removed from package.json
- [ ] Gemini removed from package.json

**Development:**
- [ ] npm run dev starts successfully
- [ ] App loads at http://localhost:3000
- [ ] No console errors (F12)
- [ ] Calculator interface visible
- [ ] Search works
- [ ] Products load (76 items)

**Features:**
- [ ] Can search for products
- [ ] Can add items to cart
- [ ] Can remove items from cart
- [ ] BV points calculate correctly
- [ ] Responsive on mobile

**Production:**
- [ ] npm run build completes
- [ ] npm start works
- [ ] Production build loads at http://localhost:3000

**Complete:**
- [ ] All documentation files present
- [ ] Git history preserved
- [ ] Ready for deployment

## Success!

If all checkmarks are complete, your migration is successful and the app is ready for:
- Development
- Testing
- Deployment to Vercel

## Next Steps

1. **If all checks pass**: You're ready to develop!
   - Start with `npm run dev`
   - Read QUICKSTART.md for next steps
   - When ready, deploy with `vercel --prod`

2. **If some checks fail**: 
   - Read TROUBLESHOOTING.md
   - Try the specific troubleshooting step
   - Run this checklist again

3. **If many checks fail**:
   - Read RESET.md
   - Run complete environment reset
   - Run this checklist again

---

**Questions?** Check the documentation files in the project root.
**Ready to deploy?** See DEPLOYMENT.md
**Getting an error?** See TROUBLESHOOTING.md
