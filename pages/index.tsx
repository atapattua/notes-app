import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//components
import Card from "@mui/material/Card"
import SideMenu from '@/components/SideMenu'
import Note from '@/components/Note'

export default function Home() {
  const notes: Array<Object> = [
    {
      title: "First note",
      _id: 1,
      data: "This is my first note"
    }
  ]

  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="A note creating app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/public/notepad.png" />
      </Head>
      <body>
        <nav>
          <ul className={styles.navbar}>
            <li>Home</li>
            <a href="https://github.com/atapattua/notes-app" target="_blank"><li>Project Repo</li></a>
            <li className={styles.add_note}>Add Note</li>
          </ul>
        </nav>

        <main>
          <div className={styles.main_container}>
            <SideMenu />
            <Note />
          </div>
        </main>
      </body>
      
    </>
  )
}
