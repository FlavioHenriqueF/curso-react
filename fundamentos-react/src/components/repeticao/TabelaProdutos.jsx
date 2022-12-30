import "./TabelaProduto.css";
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const perifericos = produtos.map((hardware, i) => {
    return (
      <tr className={i % 2 === 0 ? "Par" : "Impar"} key={hardware.id}>
        <td>{hardware.id}</td>
        <td>{hardware.item}</td>
        <td>R$ {hardware.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2 className="Title">{props.titulo}</h2>
      <table className="Tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produtos</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{perifericos}</tbody>
      </table>
    </div>
  );
};
