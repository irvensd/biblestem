# GitHub Actions Workflows

This directory contains CI/CD workflows for BibleStem.

## Workflows

### CI (`ci.yml`)

Runs on every push and pull request to `main`, `production`, or `develop` branches.

**Jobs:**
- **Lint**: Runs ESLint to check code quality
- **Type Check**: Validates TypeScript types
- **Test**: Runs unit tests with Vitest
- **Build**: Builds the application and uploads artifacts

**Triggers:**
- Push to `main`, `production`, or `develop`
- Pull requests to `main` or `production`

### Deploy (`deploy.yml`)

Runs on push to `production` branch or manual trigger.

**Jobs:**
- **Build and Push Docker Image**: Builds Docker image and pushes to GitHub Container Registry
- **Deploy to Netlify**: Deploys to Netlify (if configured)
- **Deploy to Vercel**: Deploys to Vercel (if configured)

**Triggers:**
- Push to `production` branch
- Manual workflow dispatch

## Setup

### Required Secrets

Add these secrets in Repository Settings → Secrets and variables → Actions:

#### For Netlify Deployment
- `NETLIFY_AUTH_TOKEN`: Netlify authentication token
- `NETLIFY_SITE_ID`: Netlify site ID

#### For Vercel Deployment
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

#### For Build (Environment Variables)
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key
- `VITE_SENTRY_DSN`: Sentry DSN (optional)
- `VITE_SENTRY_ENVIRONMENT`: Sentry environment (optional)
- `VITE_GA_MEASUREMENT_ID`: Google Analytics ID (optional)
- `VITE_ENABLE_ANALYTICS`: Enable analytics flag (optional)

### Getting Secrets

#### Netlify
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Get token: `netlify auth:token`
4. Get site ID: `netlify sites:list` or from Netlify dashboard

#### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Get token: From [Vercel Settings → Tokens](https://vercel.com/account/tokens)
4. Get org/project IDs: `vercel link` or from Vercel dashboard

## Usage

### Automatic Deployment

Workflows run automatically when:
- Code is pushed to `production` branch
- Pull requests are created (CI only)

### Manual Deployment

1. Go to Actions tab
2. Select "Deploy" workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

### Viewing Results

- Go to Actions tab to see workflow runs
- Click on a workflow run to see detailed logs
- Check deployment status in Netlify/Vercel dashboards

## Troubleshooting

### Workflow Fails

1. Check workflow logs in Actions tab
2. Verify all secrets are set correctly
3. Ensure environment variables are configured
4. Check that build succeeds locally first

### Deployment Fails

1. Verify platform credentials are correct
2. Check platform-specific logs (Netlify/Vercel dashboards)
3. Ensure environment variables are set in platform
4. Verify branch protection rules allow deployments

### Docker Build Fails

1. Check Dockerfile syntax
2. Verify build context includes all necessary files
3. Check `.dockerignore` isn't excluding required files
4. Test Docker build locally first

