#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$VERCEL_ENV" != "production" || "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^chore[^:]*:[^\S]+release[^\S]+[0-9]+\.[0-9]+\.[0-9]+[^\S]+\(\#[0-9]+\) ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1
else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0
fi
