'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import styles from './three-demo.module.scss'

export function ThreeDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0f0f0f)

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.set(0, 0.2, 1.2)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(3, 5, 2)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x22c55e, 0.5)
    pointLight.position.set(-2, -1, 2)
    scene.add(pointLight)

    let animationId: number
    const modelRef = { current: null as THREE.Group | null }
    const rotationState = { x: 0, y: Math.PI / 2 }
    const dragState = { isDragging: false, prevX: 0, prevY: 0 }
    const ROTATION_SPEED = 0.005

    const loader = new GLTFLoader()
    loader.load(
      '/models/ToyCar.glb',
      (gltf) => {
        const model = gltf.scene
        modelRef.current = model
        model.scale.setScalar(12)
        model.rotation.y = Math.PI / 2

        const box = new THREE.Box3().setFromObject(model)
        const center = new THREE.Vector3()
        box.getCenter(center)
        model.position.sub(center)

        scene.add(model)
      },
      undefined,
      (error) => {
        console.error('Ошибка загрузки модели:', error)
      }
    )

    const canvas = renderer.domElement

    const onPointerDown = (e: PointerEvent): void => {
      dragState.isDragging = true
      dragState.prevX = e.clientX
      dragState.prevY = e.clientY
      canvas.style.cursor = 'grabbing'
    }

    const onPointerMove = (e: PointerEvent): void => {
      if (!dragState.isDragging) return
      const dx = e.clientX - dragState.prevX
      const dy = e.clientY - dragState.prevY
      dragState.prevX = e.clientX
      dragState.prevY = e.clientY
      rotationState.y += dx * ROTATION_SPEED
      rotationState.x += dy * ROTATION_SPEED
      rotationState.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationState.x))
    }

    const onPointerUp = (): void => {
      dragState.isDragging = false
      canvas.style.cursor = 'grab'
    }

    canvas.style.cursor = 'grab'

    canvas.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    const animate = (): void => {
      animationId = requestAnimationFrame(animate)
      if (modelRef.current) {
        modelRef.current.rotation.x = rotationState.x
        modelRef.current.rotation.y = rotationState.y
      }
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = (): void => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.threeDemoViewer} aria-hidden />
  )
}
