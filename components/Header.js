import Link from "next/link"
import styles from './Header.module.css'

export function Header() {
  return (
      <header className={styles.header}>
        <Link href="/">
            <div className={styles.divided}>Index</div>
        </Link>
        <Link href="/about">
            <div className={styles.divided}>About</div>
        </Link>
      </header>
  )
}
