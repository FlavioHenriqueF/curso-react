import { useState } from "react";
import Layout from "../src/components/Layout";

export default function Estado() {
  const [numero, setNumero] = useState(0);

  function inc() {
    setNumero(numero + 1);
  }

  return (
    <Layout titulo="Componente com Estado">
      <p>{numero}</p>
      <button onClick={inc}>Incrementar</button>
    </Layout>
  );
}
