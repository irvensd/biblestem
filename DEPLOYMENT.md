# Deployment Guide

## Auto-Deploy to Vercel (For Demo/Example Site)

This repository is configured for automatic deployment to Vercel for demonstration purposes.

### Quick Setup (2 minutes):

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select the `biblestem` repository
   - Click "Import"

3. **Build Configuration** (Already configured in `vercel.json`)
   - Framework Preset: Vite (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy" button
   - Wait ~1-2 minutes for build
   - Get your live URL (e.g., `biblestem.vercel.app`)

### Automatic Deployment

Once set up, every push to `main` branch will automatically:
- Trigger a new deployment
- Build your app
- Deploy to a live URL
- Create preview URLs for pull requests

### Benefits

✅ **Free hosting** - No cost for demo/preview sites
✅ **Instant updates** - Every push = new deployment
✅ **Free SSL** - HTTPS automatically enabled
✅ **Global CDN** - Fast loading worldwide
✅ **Preview deploys** - See changes before merging to main
✅ **Custom domains** - Add your own domain (optional)

### Environment Variables

If you need to add environment variables (like API keys):
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Production Deployment (Separate)

⚠️ **Note:** This Vercel deployment is ONLY for demonstration purposes. 

The actual production site will be deployed separately using your preferred hosting solution.

