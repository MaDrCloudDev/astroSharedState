# astroSharedState

Multi-framework counter demo built with Astro. Shows how React, SolidJS, Svelte, Vue, and Alpine.js can share state using Nanostores.

## What it does

Each framework has its own counter component with local state. All components also share a global counter that updates across frameworks in real-time.

## Tech stack

- **Astro** - Static site generator
- **Nanostores** - Framework-agnostic state management
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Frameworks included

- React (hooks + useStore)
- SolidJS (signals + createStore)
- Svelte (stores + reactivity)
- Vue (composition API)
- Alpine.js (x-data + reactivity)

## Running locally

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/           # Framework counter components
│   └── ui/              # Reusable UI components
├── icons/               # SVG icon components
├── layouts/             # Page layouts
├── store/               # Nanostores state management
└── styles/              # CSS files
```

The app is responsive and optimized for browser zoom up to 120%.
