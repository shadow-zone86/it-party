import styles from './webcraft-footer.module.scss'

export function WebCraftFooter() {
  return (
    <footer className={styles.webcraftFooter}>
      <div className={styles.webcraftFooter__content}>
        <div className={styles.webcraftFooter__brand}>
          <h3 className={styles.webcraftFooter__brandTitle}>
            Web<span>Craft</span> Studio
          </h3>
          <p className={styles.webcraftFooter__brandDescription}>
            Создаём цифровые решения, которые работают. Ваш надёжный партнёр в
            мире веб-разработки.
          </p>
        </div>
        <div className={styles.webcraftFooter__links}>
          <h4 className={styles.webcraftFooter__linksTitle}>Услуги</h4>
          <ul className={styles.webcraftFooter__linksList}>
            <li>
              <a href="#services">Веб-сайты</a>
            </li>
            <li>
              <a href="#services">Приложения</a>
            </li>
            <li>
              <a href="#services">Автоматизация</a>
            </li>
            <li>
              <a href="#services">SEO</a>
            </li>
          </ul>
        </div>
        <div className={styles.webcraftFooter__links}>
          <h4 className={styles.webcraftFooter__linksTitle}>Компания</h4>
          <ul className={styles.webcraftFooter__linksList}>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#portfolio">Портфолио</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Карьера</a>
            </li>
          </ul>
        </div>
        <div className={styles.webcraftFooter__links}>
          <h4 className={styles.webcraftFooter__linksTitle}>Контакты</h4>
          <ul className={styles.webcraftFooter__linksList}>
            <li>
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
            </li>
            <li>
              <a href="mailto:hello@webcraft.studio">hello@webcraft.studio</a>
            </li>
            <li>
              <a href="#">Москва</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.webcraftFooter__bottom}>
        <p className={styles.webcraftFooter__copyright}>
          © 2026 WebCraft Studio. Все права защищены.
        </p>
        <div className={styles.webcraftFooter__social}>
          <a href="#" aria-label="Telegram">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.38-3.61 3.99-1.66 4.83-1.95 5.37-1.96.12 0 .37.03.54.18.14.12.18.28.2.45-.01.06.01.24 0 .38z" />
            </svg>
          </a>
          <a href="#" aria-label="VK">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.37 13.25h-1.24c-.47 0-.61-.37-1.45-1.22-.73-.71-1.05-.8-1.23-.8-.25 0-.32.07-.32.42v1.12c0 .3-.09.48-.88.48-1.3 0-2.74-.79-3.75-2.25-1.52-2.15-1.94-3.76-1.94-4.09 0-.18.07-.34.42-.34h1.24c.31 0 .43.14.55.48.6 1.75 1.62 3.28 2.03 3.28.16 0 .23-.07.23-.47v-1.81c-.05-.85-.49-.92-.49-1.22 0-.15.12-.3.32-.3h1.95c.26 0 .35.14.35.46v2.44c0 .26.12.35.19.35.16 0 .29-.09.58-.38.9-1.01 1.54-2.56 1.54-2.56.09-.18.23-.34.54-.34h1.24c.37 0 .45.19.37.46-.16.8-1.75 2.98-1.75 2.98-.14.22-.19.32 0 .56.14.18.58.56.88.9.55.62.98 1.14 1.09 1.5.12.36-.06.55-.42.55z" />
            </svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
