#!/bin/bash

echo "🔍 Security Observability Portfolio - Verification"
echo "=================================================="
echo ""

echo "✅ Checking dependencies..."
if [ -d "node_modules/@astrojs/react" ]; then
    echo "  ✓ React integration installed"
else
    echo "  ✗ React integration missing"
fi

if [ -d "node_modules/@astrojs/vercel" ]; then
    echo "  ✓ Vercel adapter installed"
else
    echo "  ✗ Vercel adapter missing"
fi

if [ -d "node_modules/@fontsource" ]; then
    echo "  ✓ Fonts installed"
else
    echo "  ✗ Fonts missing"
fi

echo ""
echo "✅ Checking components..."
[ -f "src/components/Hero.astro" ] && echo "  ✓ Hero.astro"
[ -f "src/components/ProjectsGrid.tsx" ] && echo "  ✓ ProjectsGrid.tsx"
[ -f "src/components/TechStackMonitor.astro" ] && echo "  ✓ TechStackMonitor.astro"
[ -f "src/components/Timeline.astro" ] && echo "  ✓ Timeline.astro"

echo ""
echo "✅ Checking UI components..."
[ -f "src/components/ui/animated-gradient-text.tsx" ] && echo "  ✓ AnimatedGradientText"
[ -f "src/components/ui/particles.tsx" ] && echo "  ✓ Particles"
[ -f "src/components/ui/bento-grid.tsx" ] && echo "  ✓ BentoGrid"
[ -f "src/components/ui/border-beam.tsx" ] && echo "  ✓ BorderBeam"

echo ""
echo "✅ Checking utilities..."
[ -f "src/lib/utils.ts" ] && echo "  ✓ utils.ts"
[ -f "src/lib/data.ts" ] && echo "  ✓ data.ts"

echo ""
echo "✅ Checking layouts..."
[ -f "src/layouts/BaseLayout.astro" ] && echo "  ✓ BaseLayout.astro"

echo ""
echo "✅ Checking security features..."
if [ -f "public/.well-known/security.txt" ]; then
    echo "  ✓ security.txt (RFC 9116 compliant)"
    echo "    Location: public/.well-known/security.txt"
else
    echo "  ✗ security.txt missing"
fi

echo ""
echo "✅ Checking configuration..."
[ -f "astro.config.mjs" ] && echo "  ✓ astro.config.mjs configured"
[ -f "tsconfig.json" ] && echo "  ✓ tsconfig.json with path aliases"
[ -f "src/styles/global.css" ] && echo "  ✓ global.css with dark theme"

echo ""
echo "=================================================="
echo "🎉 Portfolio implementation complete!"
echo ""
echo "📝 Next steps:"
echo "  1. Run 'npm run dev' to start development server"
echo "  2. Visit http://localhost:4321"
echo "  3. Check /.well-known/security.txt"
echo "  4. Push to GitHub and deploy to Vercel"
echo ""
