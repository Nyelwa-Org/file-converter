import styles from './label.module.css'

function Label({htmlFor, value, children}) {
  return <label htmlFor={htmlFor} className={styles.label}>{value}{children}</label>;
}

export default Label;
