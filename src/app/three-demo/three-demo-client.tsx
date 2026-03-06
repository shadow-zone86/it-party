'use client'

import dynamic from 'next/dynamic'
import styles from './page.module.scss'

const ThreeDemo = dynamic(
  () => import('@/widgets/three-demo').then((mod) => mod.ThreeDemo),
  {
    ssr: false,
    loading: () => (
      <div className={styles.threeDemo__loading}>Загрузка 3D-сцены…</div>
    ),
  }
)

export function ThreeDemoClient() {
  return <ThreeDemo />
}
