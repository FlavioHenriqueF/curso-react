import { useState } from "react";
import Layout from "../src/components/Layout";

export default function integracao() {
  const [codigo, setCodigo] = useState(1);
  const [cliente, setCliente] = useState({});

  async function obterCliente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await resp.json();
    setCliente(dados);
  }

  return (
    <Layout title="">
      <div>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterCliente}>Interagir</button>
        <ul>
          <li>Codigo: {cliente.id}</li>
          <li>Nome: {cliente.nome}</li>
          <li>Email: {cliente.email}</li>
        </ul>
      </div>
    </Layout>
  );
}
