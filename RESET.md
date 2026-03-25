# Reset Development Environment

If you're seeing Vite errors or the dev server isn't responding correctly, follow these steps to reset your environment.

## Quick Reset (Recommended)

```bash
# 1. Kill any running dev servers (press Ctrl+C in terminals)

# 2. Clear caches and dependencies
rm -rf node_modules .next dist build

# 3. Clear npm cache
npm cache clean --force

# 4. Fresh install
npm install

# 5. Start dev server
npm run dev
```

Then open http://localhost:3000

## What's Happening

The error "Cannot find module '/vercel/share/v0-next-shadcn/node_modules/vite/...'" means:

1. **Old Vite server still running** - The dev server hasn't switched to Next.js yet
2. **Cached dependencies** - Node modules have old Vite files
3. **Stale build artifacts** - The .next directory might have incomplete builds

## Complete Reset Instructions

### Step 1: Stop All Running Servers
- Close all terminal windows with running dev servers
- Or press `Ctrl+C` in each terminal

### Step 2: Clear Everything
```bash
# Remove all dependencies
rm -rf node_modules

# Remove build artifacts
rm -rf .next dist build

# Remove lock files (to force fresh install)
rm package-lock.json pnpm-lock.yaml yarn.lock 2>/dev/null || true

# Clear npm cache
npm cache clean --force
```

### Step 3: Fresh Install
```bash
npm install
```

This will:
- Download fresh dependencies
- Install Next.js (not Vite)
- Set up Tailwind CSS v4
- Install all required packages

### Step 4: Start Dev Server
```bash
npm run dev
```

### Step 5: Verify in Browser
1. Open http://localhost:3000
2. Check browser console for errors (F12)
3. Verify the calculator app loads

## Troubleshooting Reset

### Still seeing Vite errors?

1. Check Node version:
   ```bash
   node --version
   ```
   Should be 18.0.0 or higher

2. Kill processes on port 3000:
   ```bash
   # On Mac/Linux:
   lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
   
   # On Windows:
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. Try different port:
   ```bash
   npm run dev -- -p 3001
   ```
   Then visit http://localhost:3001

### Module errors persist?

1. Verify package.json has Next.js:
   ```bash
   cat package.json | grep '"next"'
   ```

2. Check Next.js is installed:
   ```bash
   ls node_modules/next
   ```

3. Rebuild everything:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

### Tailwind styles not loading?

1. Check globals.css exists:
   ```bash
   cat app/globals.css
   ```

2. Check layout imports globals:
   ```bash
   cat app/layout.tsx | grep "globals.css"
   ```

3. Clear cache and restart:
   ```bash
   rm -rf .next
   npm run dev
   ```

## Browser-Level Reset

Sometimes the browser cache is the issue:

1. **Hard refresh**: `Ctrl+Shift+R` (Cmd+Shift+R on Mac)
2. **Clear cache**: F12 → Application → Clear Storage
3. **Close browser completely** and reopen
4. **Open in incognito/private** window
5. **Different browser** to test

## Verify Installation

After reset, run these checks:

```bash
# Check Node version
node --version
# Should output 18.0.0 or higher

# Check npm version
npm --version
# Should output 8.0.0 or higher

# Check Next.js is installed
ls node_modules/.bin/next

# Check required files exist
ls app/page.tsx
ls app/layout.tsx
ls app/components/Calculator.tsx
ls lib/constants.ts

# Check dependencies
npm list next
npm list react
npm list tailwindcss
```

All commands should succeed without errors.

## Development Best Practices

To avoid needing resets:

1. **Commit before major changes**
   ```bash
   git status
   git add .
   git commit -m "Before major changes"
   ```

2. **Use .gitignore properly**
   - Never commit `node_modules/`
   - Never commit `.next/`
   - Never commit `.env.local` with secrets

3. **Regular cleanup**
   ```bash
   # Weekly cache clean
   npm cache clean --force
   ```

4. **Update dependencies carefully**
   ```bash
   # Check what will update
   npm outdated
   
   # Update safely
   npm update
   ```

## Understanding the Migration

Your app was converted from:
- **Before**: Vite (build tool) + React
- **After**: Next.js (full framework)

This means:
- Different dev server: `vite` → `next dev`
- Different configuration: `vite.config.ts` → `next.config.ts`
- Different directory structure: `src/` → `app/`
- Better performance and deployment

Vite errors appear when the old dev server is still running or hasn't been properly cleaned up.

## If All Else Fails

Contact Vercel support or check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Remember**: Most issues resolve with a fresh install and a page refresh!
