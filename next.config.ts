import type { NextConfig } from 'next'
import path from 'path'

const stylesPath = path.join(process.cwd(), 'src/app/styles')

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [stylesPath],
    additionalData: `@use '${path.join(stylesPath, '_variables.scss')}' as *; @use '${path.join(stylesPath, '_mixins.scss')}' as *;`,
  },
}

export default nextConfig
