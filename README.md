# W26 Workshop 03 - AI Ethics Deck

**AI Mindset Winter Lab · Week 26 · February 2026**

Interactive presentation deck for Workshop #3 on AI Ethics, covering the e/acc vs DOOM debate, AI alignment, and ethical practices.

## Features

- **Interactive Navigation**: Arrow keys, space bar, or on-screen controls
- **Context Notes**: Hover over info icon for speaker notes and insights
- **TOC**: Press `T` to open table of contents
- **Progress Bar**: Visual progress through the presentation
- **Responsive Design**: Works on desktop, tablet, and mobile

## Slides 20-30 Content

- **Slide 20**: Section divider "AI Ethics"
- **Slide 21**: e/acc camp (Marc Andreessen, Beff Jezos, Sam Altman, Nick Land)
- **Slide 22**: DOOM camp (Tristan Harris, Eliezer Yudkowsky, Elon Musk, Ilya Sutskever)
- **Slide 23**: Ethics spectrum visualization
- **Slide 24**: Claude artifact test reference
- **Slide 25**: Dogfooding concept
- **Slide 26**: AI Alignment (3 types: Existential, Purposeful, Codified)
- **Slide 27**: John Vervaeke "align AI to God"
- **Slide 28**: Conversation with ideas
- **Slide 29**: Meditation break (10 min)
- **Slide 30**: Ethics practice (micro groups)

## Modern 2025-2026 Updates

- **DeepSeek breakthrough** (January 2026) - $6M Chinese model
- **Trump administration** e/acc alignment
- **Yoshua Bengio** shift to cautious optimism
- **OpenAI $50B funding** at $300B valuation
- **Ilya Sutskever SSI** $3B raise
- **International AI Safety Report** - 78% researchers want regulation
- **EU AI Act** delays until 2027

## Tech Stack

- **Vite** - Fast build tool
- **React** - UI framework
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling

## Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Project Structure

\`\`\`
w26-ws03-ethics-deck/
├── src/
│   ├── components/
│   │   └── VisualMetaphors.tsx    # Visual components for each slide
│   ├── App.tsx                     # Main app component
│   ├── slidesData.ts               # Slide content data
│   ├── types.ts                    # TypeScript types
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite config
├── tailwind.config.js              # Tailwind config
└── postcss.config.js               # PostCSS config
\`\`\`

## Keyboard Shortcuts

- **→ / Space**: Next slide
- **←**: Previous slide
- **T**: Toggle table of contents
- **Escape**: Close table of contents

## Deployment

Ready to deploy to Netlify, Vercel, or any static hosting:

\`\`\`bash
npm run build
# Upload dist/ folder to your hosting provider
\`\`\`

## Reference Projects

Based on structure from:
- `/notes/code tools/w26-workshop02-deck/`
- `/notes/code tools/lms-3-days-case-deck/`

## License

© 2026 AI Mindset Lab. All rights reserved.
