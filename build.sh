rm -rf build/chrome-mv3-prod build/chrome-mv3-prod.zip
echo "Removed old build"
pnpm build
zip -r -v build/chrome-mv3-prod.zip build/chrome-mv3-prod
echo "Zipped new build"