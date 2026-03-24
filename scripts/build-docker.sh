#!/bin/bash

# Docker build script for BibleStem
# Usage: ./scripts/build-docker.sh [tag]

set -e

TAG=${1:-latest}
IMAGE_NAME=${IMAGE_NAME:-biblestem}

echo "🐳 Building Docker image: $IMAGE_NAME:$TAG"

# Build the Docker image
docker build -t $IMAGE_NAME:$TAG .

echo "✅ Docker image built successfully: $IMAGE_NAME:$TAG"
echo ""
echo "To run the container:"
echo "  docker run -p 3000:3000 $IMAGE_NAME:$TAG"
echo ""
echo "To push to registry:"
echo "  docker tag $IMAGE_NAME:$TAG your-registry/$IMAGE_NAME:$TAG"
echo "  docker push your-registry/$IMAGE_NAME:$TAG"

