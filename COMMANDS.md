# Quick Command Reference

## Local Development

Start the dev server:
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Run linter:
```bash
npm run lint
```

## Dependency Management

Install dependencies:
```bash
npm install
```

Add a new package:
```bash
npm install package-name
```

Update all packages:
```bash
npm update
```

Clean install (remove node_modules and reinstall):
```bash
rm -rf node_modules && npm install
```

## Debugging

Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

Clear all build artifacts:
```bash
rm -rf node_modules .next dist build
npm install
npm run dev
```

Check Node.js version:
```bash
node --version
```
(Should be Node 18+ for Next.js 16)

## Deployment

Deploy to Vercel (requires Vercel CLI):
```bash
npm install -g vercel
vercel --prod
```

## Project Structure

- `/app` - Next.js app directory (pages and components)
- `/app/components` - React components
- `/app/layout.tsx` - Root layout component
- `/app/page.tsx` - Home page
- `/app/globals.css` - Global styles with Tailwind
- `/lib` - Utility functions and constants
- `/public` - Static assets (images, fonts, etc.)
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `package.json` - Project dependencies and scripts

## Environment Variables

No API keys are required for this app. All functionality runs locally without external dependencies.

If you need to add environment variables later, add them to `.env.local`:
```
NEXT_PUBLIC_VARIABLE=value
PRIVATE_VARIABLE=value
```

Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

## Testing Your Changes

After editing files:
1. Save the file
2. Check the browser - it should hot-reload automatically
3. If not, refresh the page (F5 or Cmd+R)
4. Check browser console (F12) for error messages

## Common Workflows

### Adding a new component

1. Create file in `app/components/MyComponent.tsx`
2. Export a default function or named export
3. Import in `app/page.tsx` or other components
4. Use it in your JSX

### Adding a new page

1. Create directory `app/my-page`
2. Create `app/my-page/page.tsx`
3. Next.js automatically creates route `/my-page`
4. You can add `layout.tsx` in the same directory for page-specific layout

### Modifying styles

Global styles: Edit `app/globals.css`
Component styles: Use Tailwind classes directly in JSX or create `.css` files in component directory

### Using environment variables

1. Add to `.env.local`:
   ```
   NEXT_PUBLIC_MY_VAR=value
   ```

2. Use in code:
   ```typescript
   const value = process.env.NEXT_PUBLIC_MY_VAR;
   ```

## TypeScript

Ensure all TypeScript compiles without errors:
```bash
npx tsc --noEmit
```

Create interface for data:
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}
```

Use as generic type:
```typescript
const users: User[] = [];
```

## Performance Tips

1. Use `next/image` for images instead of `<img>`
2. Use dynamic imports for heavy components:
   ```typescript
   import dynamic from 'next/dynamic';
   const Component = dynamic(() => import('@/components/Heavy'), { ssr: false });
   ```

3. Use `<Suspense>` for async operations
4. Optimize large lists with virtualization
5. Use React.memo for components that don't update often

## Troubleshooting

Port 3000 in use?
```bash
npm run dev -- -p 3001
```

Module not found?
- Check import path uses `@/` alias
- Verify file exists at that path
- Check tsconfig.json paths configuration

Styles not applying?
- Verify `globals.css` is imported in `layout.tsx`
- Check Tailwind classes are valid
- Clear `.next` cache: `rm -rf .next`

Build fails?
- Check for TypeScript errors: `npx tsc --noEmit`
- Check package.json for missing dependencies
- Try clean install: `rm -rf node_modules && npm install`

## More Information

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
