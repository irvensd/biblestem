# BibleStem Production Deployment Checklist

## Issue: "Unable to connect to the server" on biblestem.io

### Root Cause
The production site at biblestem.io cannot connect to Supabase because:
1. The domain might not be whitelisted in Supabase
2. Environment variables might not be set on the hosting platform

---

## ✅ Fix Steps

### 1. Configure Supabase for biblestem.io

1. Go to: https://supabase.com/dashboard/project/gquebqxkjuearohkmqwc
2. Navigate to **Authentication** → **URL Configuration**
3. Set **Site URL** to: `https://biblestem.io`
4. Add to **Redirect URLs**:
   - `https://biblestem.io/**`
   - `https://biblestem.io/auth/callback`
   - `https://www.biblestem.io/**` (if you use www)
5. Click **Save**

### 2. Set Environment Variables on Hosting Platform

#### If using Vercel:
1. Go to: https://vercel.com/dashboard
2. Select your biblestem project
3. Go to **Settings** → **Environment Variables**
4. Add these variables for **Production**:
   ```
   VITE_SUPABASE_URL=https://gquebqxkjuearohkmqwc.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdWVicXhranVlYXJvaGttcXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1OTU4MjMsImV4cCI6MjA3NzE3MTgyM30.gAO71IVezP-Z9UKjYyFGP5oO5oi-GA8KvKfmN49SitA
   VITE_ENVIRONMENT=production
   VITE_IS_MOCK_MODE=false
   ```
5. Click **Save**
6. Go to **Deployments** and click **Redeploy** on the latest deployment

#### If using Netlify:
1. Go to: https://app.netlify.com
2. Select your biblestem site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** and add:
   ```
   VITE_SUPABASE_URL=https://gquebqxkjuearohkmqwc.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdWVicXhranVlYXJvaGttcXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1OTU4MjMsImV4cCI6MjA3NzE3MTgyM30.gAO71IVezP-Z9UKjYyFGP5oO5oi-GA8KvKfmN49SitA
   VITE_ENVIRONMENT=production
   VITE_IS_MOCK_MODE=false
   ```
5. Click **Save**
6. Go to **Deploys** and click **Trigger deploy** → **Clear cache and deploy site**

#### If using another host:
- Add the same environment variables in your hosting platform's environment configuration
- Make sure they're available during the build process
- Redeploy after adding them

### 3. Verify the Fix

After redeploying:

1. Open https://biblestem.io in an incognito/private window
2. Open browser DevTools (F12) → Console tab
3. Try to sign in
4. Check the console for any errors
5. Check the Network tab to see if requests to Supabase are successful

### 4. Additional Checks

#### Check CORS Headers
The Supabase endpoint should return these headers:
```
access-control-allow-origin: *
access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS
```

#### Verify Build Output
After rebuilding, check that the config is properly embedded:
```bash
# In your dist folder, search for the Supabase URL
grep -r "gquebqxkjuearohkmqwc" dist/assets/
```

---

## 🔍 Debugging

If the issue persists:

### Check Browser Console
1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors like:
   - `Failed to fetch`
   - `CORS error`
   - `Network error`
   - `Supabase is not configured`

### Check Network Tab
1. Open DevTools → Network tab
2. Try to sign in
3. Look for requests to `supabase.co`
4. Check if they're blocked or failing
5. Look at the response status codes

### Test Supabase Connection
Open browser console on biblestem.io and run:
```javascript
fetch('https://gquebqxkjuearohkmqwc.supabase.co/auth/v1/health')
  .then(r => console.log('Status:', r.status))
  .catch(e => console.error('Error:', e))
```

---

## 📝 Why This Happens

1. **Local works**: Your `.env` file has the credentials
2. **Production fails**: The hosting platform doesn't have access to your local `.env` file
3. **Solution**: Set environment variables on the hosting platform

---

## ⚠️ Security Note

The `VITE_SUPABASE_ANON_KEY` is safe to expose in client-side code. It's designed to be public and is protected by Row Level Security (RLS) policies in your Supabase database.

However, NEVER commit your `.env` file to git or expose any `SERVICE_ROLE` keys.

---

## 🎯 Quick Test

After completing the steps above, test with these credentials:
- Email: irvensdupuy@gmail.com
- Password: [your password]

Expected result: Successful login and redirect to dashboard.

---

## 📞 Still Having Issues?

If you're still seeing the error:

1. Check that biblestem.io is pointing to the correct deployment
2. Clear your browser cache completely
3. Try a different browser or incognito mode
4. Check your domain DNS settings
5. Verify SSL certificate is valid for biblestem.io
6. Check hosting platform logs for build errors

---

## ✅ Success Indicators

You'll know it's fixed when:
- ✅ No "Unable to connect to the server" error
- ✅ Login form submits without errors
- ✅ Successful authentication redirects to dashboard
- ✅ No CORS errors in browser console
- ✅ Network tab shows successful requests to Supabase

