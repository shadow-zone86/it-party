# IT Party

Nuxt 3 project with FSD (Feature-Sliced Design) architecture.

## Tech Stack

- **Framework**: Nuxt 3
- **State Management**: Pinia
- **Styling**: SCSS with custom design system (green accent palette, Roboto fonts)
- **Testing**: Vitest
- **Linting**: oxlint
- **Documentation**: Storybook
- **Git Hooks**: Husky (pre-commit checks: tests, lint, type-check)

## Project Structure (FSD)

```
src/
├── shared/          # Shared utilities, components, configs
│   ├── ui/          # Reusable UI components
│   ├── lib/         # Utility libraries (dayjs, lodash)
│   ├── api/         # API clients
│   ├── config/      # Configuration files
│   └── composables/ # Shared composables
├── entities/        # Business entities
├── features/        # User actions/features
├── widgets/         # Complex UI blocks
├── processes/       # Business processes
├── pages/           # Application pages
├── stores/          # Pinia stores
└── app/             # App-level configuration
    └── styles/      # Global styles
```

## Design System

- **Primary Color**: Green (#22c55e)
- **Font**: Roboto
- **SCSS Mixins**: flex, spacing, media queries

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

## Testing

Run tests:

```bash
npm test
```

## Linting

Run linter:

```bash
npm run lint
```

## Type Checking

Run type check:

```bash
npm run type-check
```

## Storybook

Start Storybook:

```bash
npm run storybook
```

## Build

Build for production:

```bash
npm run build
```

## Bundle Analysis

Analyze bundle size:

```bash
npm run analyze:bundle
```
