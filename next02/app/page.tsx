import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={inter.className}>Hello World</h1>
      </div>
      <Link href={'/about'}>Go to About page</Link>
    </main>
  )
}
