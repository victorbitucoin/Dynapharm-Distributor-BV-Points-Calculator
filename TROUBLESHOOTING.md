# Troubleshooting Guide

## Common Issues and Solutions

### Issue: "Cannot find module '/vercel/share/v0-next-shadcn/node_modules/vite/...'"

This error occurs when the old Vite dev server is still running while trying to use Next.js. The project has been migrated from Vite to Next.js.

**Solution:**
1. **Refresh the page** - The easiest fix is to refresh your browser (F5 or Cmd+R)
2. **Wait 10-15 seconds** - The dev server needs time to rebuild with Next.js
3. **Clear browser cache** - Press Ctrl+Shift+R (Cmd+Shift+R on Mac) for hard refresh

If the error persists:

### Issue: Build fails with dependency errors

**Solution:**
1. Clear old dependencies:
   ```bash
   rm -rf node_modules
   rm -rf .next
   rm -rf dist
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Run the dev server again:
   ```bash
   npm run dev
   ```

### Issue: Port already in use

If you see "Port 3000 is already in use", the old Vite server might still be running.

**Solution:**
1. **Close other terminals** - Check if another terminal has a dev server running and close it
2. **Kill the process** - Find and kill the process using port 3000:
   ```bash
   # On Mac/Linux:
   lsof -i :3000
   kill -9 <PID>
   
   # On Windows:
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. **Use a different port:**
   ```bash
   npm run dev -- -p 3001
   ```

### Issue: Tailwind CSS not applying styles

The project uses Tailwind CSS v4 with the new `@import 'tailwindcss'` syntax.

**Solution:**
1. Ensure `app/globals.css` has the correct import:
   ```css
   @import 'tailwindcss';
   ```

2. Make sure `app/layout.tsx` imports globals.css:
   ```typescript
   import './globals.css';
   ```

3. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Issue: Components not found or importing issues

After migrating from Vite to Next.js, import paths changed.

**Solution:**
1. Use absolute imports with the `@/` alias (already configured in `tsconfig.json`)
2. All imports should use: `import { ... } from '@/lib/constants'`
3. Do NOT use relative imports like `import { ... } from '../../../lib/constants'`

### Issue: "react-jsx" not recognized

This is a Vite-specific error that shouldn't occur with Next.js.

**Solution:**
1. Verify you have a `tsconfig.json` in the root directory
2. Check that `jsx` is set to `"preserve"` (not `"react-jsx"`)
3. Reinstall dependencies: `npm install`

### Issue: Hot Module Replacement (HMR) not working

Changes might not appear automatically in the browser.

**Solution:**
1. **Hard refresh browser** - Ctrl+Shift+R or Cmd+Shift+R
2. **Restart dev server:**
   ```bash
   # Stop the server (Ctrl+C in terminal)
   # Then restart it:
   npm run dev
   ```

3. **Check browser console** - Look for error messages that might indicate issues

### Issue: Build succeeds but app shows blank page

**Solution:**
1. Open browser developer tools (F12)
2. Check the Console tab for error messages
3. Look for any network errors (Network tab)
4. Verify that `app/page.tsx` exists and exports a default component

## Quick Health Check

Run this to verify your setup is correct:

```bash
# 1. Check Node.js version (should be 18+)
node --version

# 2. Check package.json has Next.js
cat package.json | grep next

# 3. Check key files exist
ls -la app/layout.tsx
ls -la app/page.tsx
ls -la app/components/Calculator.tsx
ls -la lib/constants.ts
ls -la next.config.ts
ls -la tsconfig.json

# 4. Install dependencies
npm install

# 5. Start dev server
npm run dev
```

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── components/
│   │   └── Calculator.tsx      (Main app component)
│   ├── layout.tsx              (Root layout)
│   ├── page.tsx                (Home page)
│   └── globals.css             (Global styles with Tailwind)
├── lib/
│   └── constants.ts            (76 Dynapharm products)
├── public/                      (Static assets - if needed)
├── package.json                (Dependencies - Next.js, Tailwind, etc)
├── next.config.ts              (Next.js configuration)
├── tsconfig.json               (TypeScript configuration)
├── tailwind.config.ts          (Tailwind configuration)
├── postcss.config.mjs          (PostCSS configuration)
└── .env.local                  (Environment variables - none needed)
```

## What Changed from Vite

| Aspect | Vite | Next.js |
|--------|------|---------|
| Dev Server | `npm run dev` uses Vite | `npm run dev` uses Next.js |
| Entry Point | `src/main.tsx` | `app/layout.tsx` |
| Pages | No routing | File-based routing in `/app` |
| Config | `vite.config.ts` | `next.config.ts` |
| TS Config | JSX as `"react-jsx"` | JSX as `"preserve"` |
| Build Output | `/dist` | `/.next` |
| Imports | ESM (must use extensions) | ESM (can omit extensions) |

## Getting Help

1. Check the QUICKSTART.md for basic setup
2. Review DEPLOYMENT.md for deployment issues
3. Check CHANGES.md for what was modified
4. Visit [Next.js Docs](https://nextjs.org/docs) for framework help
5. Visit [Tailwind Docs](https://tailwindcss.com/docs) for styling help

## Still Having Issues?

1. Make sure you're in the correct directory: `/vercel/share/v0-project`
2. Run: `npm install` to install all dependencies
3. Run: `npm run dev` to start the dev server
4. Visit: `http://localhost:3000` in your browser
5. Check browser console (F12) for any JavaScript errors

The migration is complete and the app should work out of the box with Next.js!
