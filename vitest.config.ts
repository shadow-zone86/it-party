import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts', 'src/**/*.test.ts'],
    environment: 'node',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.nuxt/',
        '.output/',
        'coverage/',
        '**/*.config.*',
        '**/types/**',
        '**/*.d.ts',
        '**/stories/**',
        '**/.storybook/**',
        'tests/**',
      ],
    },
  },
})
