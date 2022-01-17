import Image from 'next/image'
import Link from 'next/link'
import config from 'config'

import {
  header,
  navbar,
  container,
  logoContainer,
  imageContainer,
  title,
  menuTitle,
  menuContainer,
} from './styles.css'

export default function Header() {
  return (
    <header className={header}>
      <nav className={navbar}>
        <div className={container}>
          <Link href="/">
            <div className={logoContainer}>
              <div className={imageContainer}>
                <Image src="/logo.png" alt="tigger blog logo" width="48px" height="44px" />
              </div>
              <strong className={title}>{config.title}</strong>
            </div>
          </Link>
          <ul className={menuContainer}>
            {config.menus.map(({ id, menu, link }) => (
              <li key={id} className={menuTitle}>
                <Link href={link}>
                  <span>{menu}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
