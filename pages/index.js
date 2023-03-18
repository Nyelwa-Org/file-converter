import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

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
        {file ? (
          <span>
            <div className={styles.listFiles}>{`${file.name}`}</div>
            <div className={styles.extraBtn}>
              <button type="" className={styles.button}>
                Add More files
              </button>
              <button type="" className={styles.button}>
                Convert
              </button>
            </div>
          </span>
        ) : (
          <span>
            <label htmlFor="file-upload" className={styles.button}>
              <i
                className="bi bi-cloud-arrow-up-fill"
                style={{ color: "rgb(var(--background-end-rgb))" }}
              ></i>{" "}
              Choose file
            </label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </span>
        )}
      </main>
    </>
  );
}
