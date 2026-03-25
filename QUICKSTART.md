# Quick Start Guide

Get your Dynapharm Points Calculator running in 2 minutes! ⚡

## 🚀 Deploy Now (Easiest)

### Via Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Choose "Create a new project" and follow prompts. That's it! 🎉

### Via GitHub
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repo
5. Click "Deploy"

Done! Your app is live.

---

## 💻 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:3000
```

---

## 🎯 What You Get

✨ **Zero configuration** - App works out of the box
⚡ **Lightning fast** - <1s page load
📱 **Mobile friendly** - Works on all devices
🔒 **Secure** - No API keys, no database
🎨 **Beautiful** - Modern, polished UI
🔍 **Searchable** - Fuzzy search for 76 products

---

## 📋 Key Features

### Product Calculator
- Search any product
- Add to cart with one click
- See total points instantly
- Automatic qualification check

### Business Value (BV) Tracking
- Real-time point calculation
- 50 BV qualification threshold
- Visual progress indicator
- Qualification status display

### User Experience
- Smooth animations
- Responsive design
- Fast fuzzy search
- Clean interface

---

## 🔧 Customization

### Change Products
Edit `/lib/constants.ts`:
```typescript
{
  id: "unique-id",
  name: "Product Name",
  bv: 5,
  category: "Category"
}
```

### Change Qualification Threshold
Edit `/app/components/Calculator.tsx` (line ~49):
```typescript
const threshold = 50; // Change this
```

### Change Colors/Branding
Search for `#006837` (green) in code and replace.

---

## 📂 Project Structure

```
/app                 ← Your app lives here
  /components       ← React components
  layout.tsx        ← Root layout
  page.tsx          ← Home page
  globals.css       ← Styles

/lib                ← Utilities
  constants.ts      ← Product data

package.json        ← Dependencies
vercel.json         ← Deployment config
README.md           ← Full documentation
```

---

## ⚙️ Environment Setup

**Zero configuration needed!** 

The app requires:
- ❌ No API keys
- ❌ No database
- ❌ No environment variables
- ❌ No external services

Everything is self-contained. ✨

---

## 🧪 Testing

```bash
# Build test
npm run build

# Production mode test
npm start

# Type check
npm run lint
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| next | Framework |
| react | UI library |
| tailwindcss | Styling |
| fuse.js | Search |
| motion | Animations |
| lucide-react | Icons |

All battle-tested, production-ready packages.

---

## 🌐 Deployment Options

### Option 1: Vercel (Easiest)
```bash
vercel --prod
```
Live in <2 minutes, auto-updates on git push

### Option 2: Any Node Host
```bash
npm run build
npm start
```
Runs on any Node.js server

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🐛 Troubleshooting

**App won't start locally?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Build fails?**
- Check console for error messages
- Verify all imports are correct
- Test: `npm run lint`

**Slow performance?**
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Check Vercel Analytics

**Search not working?**
- Type at least 2 characters
- Check product names in constants.ts
- Try another product name

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [TailwindCSS Guide](https://tailwindcss.com/docs)
- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy guide
- [MIGRATION.md](./MIGRATION.md) - What changed

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm install`
- [ ] Test with `npm run dev`
- [ ] Search works (`npm run build` succeeds)
- [ ] Add to cart works
- [ ] Calculate points works
- [ ] Qualification status shows correctly
- [ ] All links work
- [ ] Mobile responsive

---

## 🚀 Deploy!

Ready? Choose your deployment method above and go live! 🎉

**Your app is production-ready.** No configuration needed.

---

## 💬 Questions?

Check the docs:
- Local issues → README.md
- Deployment issues → DEPLOYMENT.md
- Technical questions → MIGRATION.md

**You've got this!** ✨
