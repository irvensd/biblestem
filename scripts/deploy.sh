#!/bin/bash

# Deployment script for BibleStem (Next.js)
# Usage: ./scripts/deploy.sh [environment] [platform]
# Example: ./scripts/deploy.sh production vercel

set -e

ENVIRONMENT=${1:-production}
PLATFORM=${2:-vercel}

echo "🚀 Deploying BibleStem to $PLATFORM ($ENVIRONMENT)"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ ! -f .env ]; then
  echo -e "${YELLOW}⚠️  Warning: .env file not found${NC}"
  echo "Create a .env file based on env.example"
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔍 Type checking..."
npm run type-check

echo "🔧 Linting..."
npm run lint

echo "🏗️  Building application..."
export NODE_ENV=production
npm run build

case $PLATFORM in
  netlify)
    echo "🌐 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
      netlify deploy --prod
    else
      echo -e "${RED}❌ Netlify CLI not found. Install with: npm install -g netlify-cli${NC}"
      exit 1
    fi
    ;;
  vercel)
    echo "▲ Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo -e "${RED}❌ Vercel CLI not found. Install with: npm install -g vercel${NC}"
      exit 1
    fi
    ;;
  docker)
    echo "🐳 Building Docker image..."
    docker build -t biblestem:$ENVIRONMENT .
    echo -e "${GREEN}✅ Docker image built successfully${NC}"
    echo "Run with: docker run -p 3000:3000 biblestem:$ENVIRONMENT"
    ;;
  *)
    echo -e "${RED}❌ Unknown platform: $PLATFORM${NC}"
    echo "Supported platforms: netlify, vercel, docker"
    exit 1
    ;;
esac

echo -e "${GREEN}✅ Deployment complete!${NC}"
