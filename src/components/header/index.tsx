import Image from 'next/image'
import Link from 'next/link'
import config from 'config'

import {
  navbar,
  wrapper,
  container,
  logoContainer,
  imageContainer,
  title,
  menuTitle,
  menuContainer,
} from './styles.css'

export default function Header() {
  return (
    <nav className={navbar}>
      <section className={wrapper}>
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
                <Link href={link}>{menu}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  )
}
