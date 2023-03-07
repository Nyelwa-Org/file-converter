import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>File Converter</title>
        <meta name="description" content="Created by Markson F. Senguji" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Convert Your</h1>
          <h2>File Easily</h2>
        </div>
        <div className={styles.body}>
          
        </div>
        <div className={styles.footer}>
          
        </div>
      </main>
    </>
  )
}
