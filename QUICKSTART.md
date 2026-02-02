# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies

\`\`\`bash
cd "/Users/alex/Library/CloudStorage/Dropbox/notes/code tools/w26-ws03-ethics-deck"
npm install
\`\`\`

### 2. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open your browser to `http://localhost:5173`

### 3. Navigate the Deck

- Use **arrow keys** or **space bar** to navigate
- Press **T** to open table of contents
- Hover over **info icon** (top-left) for speaker notes

## Project Files Overview

### Core Configuration Files
- `package.json` - Dependencies (React, Vite, Framer Motion, Tailwind)
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS theme (Swiss design system)
- `postcss.config.js` - PostCSS for Tailwind

### HTML & Entry
- `index.html` - HTML template with meta tags and fonts
- `src/main.tsx` - React entry point

### Application Code
- `src/App.tsx` - Main application component with navigation logic
- `src/types.ts` - TypeScript type definitions
- `src/slidesData.ts` - **Slides 20-30 content with 2026 updates**
- `src/components/VisualMetaphors.tsx` - Visual components for each slide type

### Styles
- `src/index.css` - Global styles with Swiss design system

## Slides Content (20-30)

This deck includes slides 20-30 focusing on AI Ethics:

1. **Slide 20**: Section divider
2. **Slide 21**: e/acc camp (updated with 2026 data - Trump admin, OpenAI $50B)
3. **Slide 22**: DOOM camp (updated - Ilya SSI $3B, Bengio shift)
4. **Slide 23**: Ethics spectrum visualization
5. **Slide 24**: Claude artifact test
6. **Slide 25**: Dogfooding concept
7. **Slide 26**: AI Alignment (3 types)
8. **Slide 27**: John Vervaeke quote
9. **Slide 28**: Conversation with ideas
10. **Slide 29**: Meditation break
11. **Slide 30**: Ethics practice in breakout rooms

## Modern Updates Included

✅ **DeepSeek breakthrough** (Jan 2026) - $6M vs $100M+ models
✅ **Trump administration** e/acc alignment
✅ **Yoshua Bengio** cautious optimism shift
✅ **OpenAI $50B** funding at $300B valuation
✅ **Ilya Sutskever SSI** $3B raise
✅ **International AI Safety Report** - 78% want regulation
✅ **EU AI Act** delays until 2027

## Customization

### Edit Slide Content
Open `src/slidesData.ts` and modify the `slides` array.

### Add Visual Metaphors
Edit `src/components/VisualMetaphors.tsx` and add new cases to the switch statement.

### Change Colors
Edit `tailwind.config.js` and `src/index.css` to modify the Swiss design system colors.

## Build for Production

\`\`\`bash
npm run build
\`\`\`

Output will be in `dist/` folder, ready to deploy to Netlify, Vercel, or any static hosting.

## Deployment

### Netlify
\`\`\`bash
npm run build
netlify deploy --prod --dir=dist
\`\`\`

### Vercel
\`\`\`bash
npm run build
vercel --prod
\`\`\`

## Troubleshooting

### Port already in use
If port 5173 is occupied, Vite will automatically use the next available port.

### Build errors
Make sure all dependencies are installed:
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Type errors
Run TypeScript check:
\`\`\`bash
npm run build
\`\`\`

## Next Steps

1. Add speaker photos to `/public/speakers/` directory
2. Add favicon and web-cover.png to `/public/` directory
3. Customize meta tags in `index.html` for your domain
4. Add more slides before/after slides 20-30 in `slidesData.ts`
5. Deploy to your hosting provider

## Questions?

Refer to the main `README.md` for more details or check the reference projects:
- `/notes/code tools/w26-workshop02-deck/`
- `/notes/code tools/lms-3-days-case-deck/`
