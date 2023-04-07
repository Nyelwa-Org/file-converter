import styles from "./fileTile.module.css";

function FileTile({filename}) {
  return <div className={styles.tile}>{filename}<i className="bi bi-x-lg" style={{ color: "rgb(var(--background-end-rgb))", cursor:"pointer" }}></i></div>;
}

export default FileTile;
