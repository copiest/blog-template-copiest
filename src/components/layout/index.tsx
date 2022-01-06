import React from 'react'

import { layoutWrapper, container } from './styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={layoutWrapper}>
      <section className={container}>{children}</section>
    </main>
  )
}
