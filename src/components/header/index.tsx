import Image from 'next/image'
import Link from 'next/link'
import config from 'config'

import * as styles from './styles.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <div className={styles.imageContainer}>
                <Image src="/logo.png" alt="tigger blog logo" width="48px" height="44px" />
              </div>
              <strong className={styles.title}>{config.title}</strong>
            </div>
          </Link>
          <ul className={styles.menuContainer}>
            {config.menus.map(({ id, menu, link }) => (
              <li key={id} className={styles.menuTitle}>
                <Link href={link}>
                  <span className={styles.menuName}>{menu}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
