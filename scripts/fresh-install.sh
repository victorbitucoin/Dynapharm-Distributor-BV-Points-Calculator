#!/bin/bash

echo "=== Dynapharm Calculator - Fresh Installation ==="
echo ""

# Step 1: Clean up old dependencies
echo "Step 1: Cleaning old dependencies..."
rm -rf node_modules
rm -rf .next
rm -rf dist
rm -rf build
rm pnpm-lock.yaml 2>/dev/null || true
rm package-lock.json 2>/dev/null || true
rm yarn.lock 2>/dev/null || true
echo "✓ Cleaned old dependencies"
echo ""

# Step 2: Install fresh dependencies
echo "Step 2: Installing fresh dependencies..."
if command -v pnpm &> /dev/null; then
  echo "Using pnpm..."
  pnpm install --frozen-lockfile 2>/dev/null || pnpm install
elif command -v yarn &> /dev/null; then
  echo "Using yarn..."
  yarn install
elif command -v npm &> /dev/null; then
  echo "Using npm..."
  npm install
else
  echo "❌ No package manager found. Please install npm, yarn, or pnpm."
  exit 1
fi
echo "✓ Dependencies installed"
echo ""

# Step 3: Verify Next.js installation
echo "Step 3: Verifying installation..."
if [ -d "node_modules/next" ]; then
  echo "✓ Next.js is installed"
else
  echo "❌ Next.js installation failed"
  exit 1
fi
echo ""

# Step 4: Build the project
echo "Step 4: Building project..."
npm run build || yarn build || pnpm build
echo "✓ Build complete"
echo ""

echo "=== Installation Complete! ==="
echo ""
echo "To start development server, run:"
echo "  npm run dev"
echo ""
echo "To preview production build, run:"
echo "  npm start"
