import styles from './button.module.css'

function Button(props) {
  return <button type={props.type} className={styles.button}>{props.value}</button>;
}

export default Button;
