# Deployment Guide

Complete guide for deploying BibleStem to various platforms.

## Table of Contents

- [Quick Start](#quick-start)
- [Platform-Specific Guides](#platform-specific-guides)
  - [Netlify](#netlify)
  - [Vercel](#vercel)
  - [Docker](#docker)
  - [GitHub Actions CI/CD](#github-actions-cicd)
- [Environment Variables](#environment-variables)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### Using Deployment Script

```bash
# Deploy to Netlify (production)
./scripts/deploy.sh production netlify

# Deploy to Vercel (production)
./scripts/deploy.sh production vercel

# Build Docker image
./scripts/build-docker.sh
```

### Manual Deployment

```bash
# Install dependencies
npm ci

# Validate (optional)
npm run check:app-readiness

# Build
npm run build

# Deploy (platform-specific)
```

---

## Platform-Specific Guides

### Netlify

#### Automatic Deployment (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Select branch: `production`

2. **Build Settings** (see `netlify.toml` — uses `@netlify/plugin-nextjs`)
   - Build command: `npm run build`
   - Framework: **Next.js** (plugin handles output; do not use a static `dist` folder)
   - Node version: **20** (see `package.json` `engines`)

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add all required variables (see [Environment Variables](#environment-variables))

4. **Deploy**
   - Netlify will automatically deploy on every push to `production` branch

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy (after local build; prefer Git-connected deploy for Next.js)
netlify deploy --prod
```

#### Configuration

The `netlify.toml` file includes:
- Next.js plugin and build settings
- Security headers

---

### Vercel

#### Automatic Deployment (Recommended)

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select branch: `production`

2. **Build Settings** (see `vercel.json`)
   - Framework: **Next.js**
   - Build command: `npm run build`
   - Output: **`.next`** (Vercel handles this automatically)
   - Install command: `npm install`

3. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables for Production environment

4. **Deploy**
   - Vercel will automatically deploy on every push to `production` branch

#### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Configuration

The `vercel.json` file includes:
- `framework: "nextjs"` and install/build commands

---

### Docker

#### Build Docker Image

```bash
# Build image
docker build -t biblestem:latest .

# Or use the script
./scripts/build-docker.sh latest
```

#### Run Container

```bash
# Run locally
docker run -p 80:80 biblestem:latest

# With environment variables
docker run -p 80:80 \
  -e NEXT_PUBLIC_SUPABASE_URL=your-url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key \
  biblestem:latest

# Using docker-compose
docker-compose up -d
```

#### Push to Registry

```bash
# Tag image
docker tag biblestem:latest your-registry/biblestem:latest

# Push
docker push your-registry/biblestem:latest
```

#### Docker Compose

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

### GitHub Actions CI/CD

#### Setup

1. **Secrets Configuration**
   - Go to Repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `NETLIFY_AUTH_TOKEN` (if using Netlify)
     - `NETLIFY_SITE_ID` (if using Netlify)
     - `VERCEL_TOKEN` (if using Vercel)
     - `VERCEL_ORG_ID` (if using Vercel)
     - `VERCEL_PROJECT_ID` (if using Vercel)

2. **Environment Variables**
   - Add environment variables as repository secrets:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_SENTRY_DSN`
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - And others as needed

3. **Workflows**
   - **CI Pipeline** (`.github/workflows/ci.yml`):
     - Runs on every push/PR
     - Lints code
     - Type checks
     - Runs tests
     - Builds application
   
   - **Deploy Pipeline** (`.github/workflows/deploy.yml`):
     - Runs on push to `production` branch
     - Builds Docker image
     - Deploys to Netlify (if configured)
     - Deploys to Vercel (if configured)

#### Manual Trigger

You can manually trigger deployment:
- Go to Actions tab
- Select "Deploy" workflow
- Click "Run workflow"

---

## Environment Variables

### Required for Production

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Site URL (optional; used for absolute URLs in some setups)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics (optional but recommended)
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry (optional but recommended)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production
```

### Platform-Specific Setup

#### Netlify
1. Site settings → Environment variables
2. Add variables for Production environment
3. Optionally add for Preview/Deploy preview environments

#### Vercel
1. Project Settings → Environment Variables
2. Add variables for Production environment
3. Optionally add for Preview/Development environments

#### Docker
Pass as environment variables when running:
```bash
docker run -e NEXT_PUBLIC_SUPABASE_URL=... -e NEXT_PUBLIC_SUPABASE_ANON_KEY=... ...
```

Or use `.env` file:
```bash
docker run --env-file .env.production ...
```

---

## Pre-Deployment Checklist

### Before Deploying

- [ ] All tests passing (`npm run test:unit:run`)
- [ ] Type check passing (`npm run type-check`)
- [ ] Linting passing (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables configured
- [ ] Supabase configured and tested
- [ ] Sentry DSN configured (if using)
- [ ] Google Analytics configured (if using)
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate valid (auto-handled by platforms)
- [ ] Security headers configured
- [ ] Error tracking working
- [ ] Analytics tracking working

### Post-Deployment

- [ ] Site loads correctly
- [ ] Authentication works
- [ ] API calls succeed
- [ ] Error tracking active
- [ ] Analytics tracking active
- [ ] Performance acceptable
- [ ] Mobile responsive
- [ ] PWA features working (if enabled)

---

## Troubleshooting

### Build Failures

**Issue**: Build fails with dependency errors
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Type errors during build
```bash
# Solution: Run type check locally first
npm run type-check
# Fix any errors before deploying
```

**Issue**: Environment variables not available
- Check that variables are set in platform settings
- Verify variable names match exactly (case-sensitive)
- Ensure variables are set for correct environment (Production/Preview)

### Runtime Issues

**Issue**: API calls failing
- Verify Supabase URL and keys are correct
- Check CORS settings in Supabase
- Verify network tab in browser DevTools

**Issue**: Authentication not working
- Check Supabase Auth settings
- Verify redirect URLs configured
- Check browser console for errors

**Issue**: Analytics not tracking
- Verify `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
- Check GA Measurement ID is correct
- Use browser DevTools → Network to see GA requests

**Issue**: Errors not appearing in Sentry
- Verify Sentry DSN is correct
- Check Sentry project settings
- Verify environment matches `NEXT_PUBLIC_SENTRY_ENVIRONMENT`

### Docker Issues

**Issue**: Container won't start
```bash
# Check logs
docker logs biblestem

# Check health
docker ps
```

**Issue**: Port already in use
```bash
# Use different port
docker run -p 8080:80 biblestem:latest
```

**Issue**: Build context too large
- Check `.dockerignore` includes all unnecessary files
- Verify `node_modules` is excluded

---

## Deployment Strategies

### Blue-Green Deployment

For zero-downtime deployments:
1. Deploy new version to staging
2. Test thoroughly
3. Switch traffic to new version
4. Keep old version as backup

### Canary Deployment

Gradually roll out changes:
1. Deploy to small percentage of users
2. Monitor metrics
3. Gradually increase percentage
4. Full rollout if no issues

### Feature Flags

Use feature flags for gradual feature rollouts:
- Deploy code with feature disabled
- Enable for small user group
- Monitor and gradually expand

---

## Performance Optimization

### Build Optimization

- Code splitting and optimization (Next.js production build)
- Minification (automatic in production)
- Image and font handling (see [Next.js docs](https://nextjs.org/docs))

### Runtime Optimization

- CDN caching (automatic with Netlify/Vercel)
- Service worker caching (PWA)
- Lazy loading (configured)
- Image optimization (use LazyImage component)

---

## Security Considerations

### Headers

Security headers are configured in:
- `netlify.toml` (for Netlify)
- `nginx.conf` (for Docker)

### Environment Variables

- Never commit `.env` files
- Use platform secrets management
- Rotate keys regularly
- Use least privilege principle

### Dependencies

- Regularly update dependencies
- Run `npm audit` before deploying
- Fix security vulnerabilities

---

## Monitoring Deployment

### Health Checks

- Docker: `/health` endpoint
- Monitor response times
- Set up alerts for failures

### Logs

- Netlify: Site settings → Functions → Logs
- Vercel: Deployment → Logs
- Docker: `docker logs biblestem`

### Metrics

- Monitor Sentry for errors
- Check Google Analytics for traffic
- Monitor performance metrics

---

## Rollback Procedures

### Netlify

1. Go to Deploys
2. Find previous successful deployment
3. Click "Publish deploy"

### Vercel

1. Go to Deployments
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

### Docker

```bash
# Tag previous version
docker tag biblestem:previous biblestem:latest

# Restart container
docker restart biblestem
```

---

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
