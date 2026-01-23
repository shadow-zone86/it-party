import styles from './nextpage-footer.module.scss'

export function NextPageFooter() {
  return (
    <footer className={styles.nextpageFooter}>
      <div className={styles.nextpageFooter__logo}>
        Next<span>Page</span>
      </div>
      <p className={styles.nextpageFooter__slogan}>
        Следующая страница вашего бизнеса
      </p>
      <div className={styles.nextpageFooter__links}>
        <a href="#services">Услуги</a>
        <a href="#about">О нас</a>
        <a href="#contact">Контакты</a>
      </div>
      <p className={styles.nextpageFooter__copyright}>
        © 2026 NextPage. Все права защищены.
      </p>
    </footer>
  )
}
