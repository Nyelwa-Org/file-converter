import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Just Convert</title>
        <meta name="description" content="Created by Markson F. Senguji" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Just Convert</h1>
          <h4>
            Just Convert is an online file converter tool. To get started <br />{" "}
            use the button below and select files to convert from your <br />{" "}
            computer
          </h4>
        </div>
        <div className={styles.rowSelect}>
          <select>
            <option>PDF</option>
          </select>
          <h2>to</h2>
          <select>
            <option>DOCX</option>
          </select>
        </div>
        <button type="" className={styles.button}> <i className="bi bi-paperclip" style={{ color: 'rgb(var(--background-end-rgb))' }}></i> Choose file</button>
        {/* <div className={styles.footer}>
          <h5>&copy; Markson F. Senguji | 2023</h5>
        </div> */}
      </main>
    </>
  );
}
