import styles from "../src/styles/Estiloso.module.css";
import Link from "next/link";
import Layout from "../src/components/Layout";

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS Módulos</h1>
      </div>
    </Layout>
  );
}
