import styles from "../styles/Navegador.module.css";
import Link from "next/link";
export default function (props) {
  return (
    <div>
      <Link href={props.destino} passHref>
        <div
          className={styles.navegador}
          style={{ backgroundColor: props.cor ?? "dodgerblue" }}
        >
          {props.texto}
        </div>
      </Link>
    </div>
  );
}
