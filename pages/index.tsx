import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="A note creating app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <nav>
          <ul className={styles.navbar}>
            <li>Home</li>
            <li>Project Repo</li>
            <li className={styles.add_note}>Add Note</li>
          </ul>
        </nav>
      </body>
      
    </>
  )
}
