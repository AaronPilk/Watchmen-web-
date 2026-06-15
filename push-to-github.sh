#!/usr/bin/env bash
# One-step: commit this project and push it to GitHub.
# Run from inside the project folder:  bash push-to-github.sh
set -e

REPO="https://github.com/AaronPilk/Watchmen-web-.git"

# Remove any stale/locked .git left over from the build sandbox
rm -rf .git

git init -b main
git add -A
git commit -m "Initial commit: The Watchmen marketing site (Next.js 14)"
git remote add origin "$REPO"
git push -u origin main

echo ""
echo "✅ Pushed to $REPO"
echo "Next: import the repo at vercel.com, add the RESEND_* env vars, and point gy6.me at it."
