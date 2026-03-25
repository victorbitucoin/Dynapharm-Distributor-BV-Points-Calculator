# Deployment Guide - Dynapharm Points Calculator

This app is designed to deploy seamlessly to Vercel with **zero configuration**. Follow the steps below to get your app live.

## Prerequisites

- A GitHub account (recommended)
- Node.js 18+ (for local testing)

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Migration to Next.js for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Find and select your GitHub repository
5. Click **"Import"**

### Step 3: Configure Project (Optional)
- **Project Name**: Automatically filled, can customize
- **Framework**: Next.js (auto-detected ✓)
- **Environment Variables**: None needed! Leave blank
- **Build Command**: Auto-detected ✓
- **Output Directory**: Auto-detected (.next) ✓

### Step 4: Deploy
Click **"Deploy"** and wait for the build to complete (~2-3 minutes)

✅ Your app is live! You'll get a unique URL like `https://your-app.vercel.app`

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
# Run from project root
vercel

# For production deployment
vercel --prod
```

### Step 3: Follow Prompts
- Choose yes when asked to deploy to production
- Accept all auto-detected settings

✅ Your app is deployed!

---

## Option 3: Deploy via GitHub Desktop + Vercel

1. Use GitHub Desktop to push changes to GitHub
2. Connect your GitHub account to Vercel
3. Vercel auto-deploys on every push

This is the easiest method if you prefer GUI tools.

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] **App loads**: Visit your Vercel URL in browser
- [ ] **Search works**: Try searching for "maharani"
- [ ] **Add to cart**: Click + button on any product
- [ ] **Calculate points**: Verify total points update
- [ ] **Qualification status**: Add enough products to qualify
- [ ] **Links work**: Click "Main Website" button
- [ ] **Mobile responsive**: Test on phone/tablet

---

## Environment Variables

**✨ No environment variables needed!**

This app runs completely without:
- API keys
- Database connections
- External integrations
- Secret configurations

Everything is self-contained and ready to use.

---

## Custom Domain (Optional)

To use your own domain:

1. In Vercel Dashboard, go to **Project Settings**
2. Navigate to **Domains**
3. Enter your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## Monitoring & Analytics

After deployment, Vercel provides:

- **Real-time analytics**: Requests, bandwidth, errors
- **Performance metrics**: Page load times
- **Logs**: Function and deployment logs
- **Insights**: Web vitals and optimization suggestions

View in Vercel Dashboard > **Analytics**

---

## Continuous Deployment

Your app auto-deploys when you:
1. Push to `main` branch
2. Merge pull requests
3. Update code on GitHub

Each deployment gets a unique preview URL before going to production.

---

## Rollback (If Needed)

If something goes wrong:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Deployments**
4. Find a previous working deployment
5. Click the three dots menu
6. Select **Promote to Production**

Your app reverts instantly! ✨

---

## Common Issues & Solutions

### Build Fails
**Check:**
- Dependencies in `package.json` match
- No syntax errors in code
- All imports resolve correctly

**Solution:**
```bash
npm install
npm run build  # Test locally
```

### App Shows "404"
**Check:**
- Deployment completed successfully
- Check Vercel logs for errors
- Wait a few minutes for initial deployment

**Solution:**
Try rebuilding:
1. Vercel Dashboard > **Deployments** > **Redeploy**

### Slow Performance
**Check:**
- Browser cache (hard refresh: Ctrl+Shift+R)
- Network tab in DevTools
- Vercel Analytics for bottlenecks

**Solution:**
- Clear Vercel cache: **Settings > Git > Redeploy**

### Environment Variables Not Working
**This app doesn't use environment variables!**

All settings are in code:
- Products: `/lib/constants.ts`
- Qualification threshold: `/app/components/Calculator.tsx` (line ~49)
- Branding: Search for `#006837` in code

---

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Test locally
npm run dev

# Build as production would
npm run build
npm start

# Test production build
npm run start
```

If this works locally, it will work on Vercel!

---

## Vercel Dashboard Tips

### Useful Links
- **Overview**: Project stats and deployment history
- **Deployments**: View all versions
- **Settings**: Configure project
- **Analytics**: Performance metrics
- **Logs**: Real-time request logs
- **Functions**: View serverless function performance

### Quick Actions
- **Redeploy**: Trigger new build
- **Promote**: Revert to previous version
- **Open Preview**: Test before production
- **Copy URL**: Share live app

---

## Support & Resources

### Vercel Help
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment/vercel)
- [Vercel Support](https://vercel.com/support)

### Common Questions
**Q: How much does Vercel cost?**
A: Free tier is perfect for this app! Pro plan available if needed.

**Q: Will my app go down?**
A: Vercel has 99.95% uptime SLA. Your app stays online 24/7.

**Q: How do I update my app?**
A: Just push to GitHub. Vercel auto-deploys in 1-2 minutes.

**Q: Can I use my domain?**
A: Yes! Add a custom domain in Vercel Settings > Domains.

**Q: Is my data safe?**
A: App runs client-side with no database. No data stored on servers.

---

## Next Steps

1. ✅ Follow deployment steps above
2. ✅ Test your live app
3. ✅ Set up custom domain (optional)
4. ✅ Monitor analytics
5. ✅ Share with team!

---

**Ready to deploy?** 🚀

You've got this! The app is production-ready and requires zero configuration.

Still have questions? Check the [README.md](./README.md) or [MIGRATION.md](./MIGRATION.md).
