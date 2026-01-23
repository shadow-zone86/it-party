import styles from './pixelforge-footer.module.scss'

export function PixelForgeFooter() {
  return (
    <footer className={styles.pixelforgeFooter}>
      <div className={styles.pixelforgeFooter__logo}>
        Pixel<span>Forge</span>
      </div>
      <p className={styles.pixelforgeFooter__slogan}>
        От идеи до запуска — один клик
      </p>
      <div className={styles.pixelforgeFooter__links}>
        <a href="#services">Услуги</a>
        <a href="#about">О нас</a>
        <a href="#contact">Контакты</a>
      </div>
      <p className={styles.pixelforgeFooter__copyright}>
        © 2026 PixelForge. Все права защищены.
      </p>
    </footer>
  )
}
