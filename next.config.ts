import type { NextConfig } from 'next'
import path from 'path'
import bundleAnalyzer from '@next/bundle-analyzer'

const stylesPath = path.join(process.cwd(), 'src/app/styles')

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [stylesPath],
    additionalData: `@use '${path.join(stylesPath, '_variables.scss')}' as *; @use '${path.join(stylesPath, '_mixins.scss')}' as *;`,
  },
  experimental: {
    globalNotFound: true,
  },
}

export default withBundleAnalyzer(nextConfig)
