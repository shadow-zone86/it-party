import { generateMetadata as generateSeoMetadata } from '@/shared/config/seo'
import type { Metadata } from 'next'
import { ThreeDemoClient } from './three-demo-client'
import styles from './page.module.scss'

export const metadata: Metadata = generateSeoMetadata({
  title: 'Three.js — демо',
  description:
    'Пример использования библиотеки Three.js на сайте IT Party: интерактивная 3D-сцена с WebGL.',
  path: '/three-demo',
})

export default function ThreeDemoPage() {
  return (
    <main className={styles.threeDemo}>
      <h1 className={styles.threeDemo__title}>Three.js — пример</h1>
      <p className={styles.threeDemo__description}>
        Интерактивная 3D-сцена на WebGL: модель машины (ToyCar из Khronos glTF Sample Assets) загружается из{' '}
        <code className={styles.threeDemo__code}>/models/ToyCar.glb</code> через GLTFLoader. Освещение: ambient, directional и point light.
      </p>
      <div className={styles.threeDemo__scene}>
        <ThreeDemoClient />
      </div>
    </main>
  )
}
