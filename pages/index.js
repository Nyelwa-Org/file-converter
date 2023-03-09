import Head from 'next/head'
import styles from '@/styles/Home.module.css'


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
          <h2>Files Easily</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.dotted}>
            <i className='bi bi-cloud-arrow-down-fill' style={{ color: 'rgb(var(--secondary-color))', fontSize: '1.5rem' }}></i>
            <h5>Drag&Drop file here</h5>
            <h5>OR</h5>
            <button type="" className={styles.button}> <i class="bi bi-paperclip" style={{ color: 'rgb(var(--background-end-rgb))' }}></i> Choose file</button>
          </div>
        </div>
        <div className={styles.footer}>
          <h5>&copy; Markson F. Senguji | 2023</h5>
        </div>
      </main>
    </>
  )
}
