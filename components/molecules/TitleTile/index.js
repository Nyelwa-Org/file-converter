import styles from "./titleTile.module.css";

function TitleTile() {
  return (
    <>
      <h1 className={styles.title}>Just Convert</h1>
      <p className={styles.description}>
        Just Convert is an online file converter tool. To get started <br /> use
        the button below and select files to convert from your <br /> computer
      </p>
    </>
  );
}

export default TitleTile;
