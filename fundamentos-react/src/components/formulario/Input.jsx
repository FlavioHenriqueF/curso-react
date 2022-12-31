import { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("");

  function aoDigitar(e) {
    setValor(e.target.value);
  }

  return (
    <div>
      <h2>
        Valor Digitado: <strong>{valor}</strong>
      </h2>
      <div>
        <input value={valor} onChange={aoDigitar} />
        <input value={valor} readOnly />
        {/* <input value={undefined} />  COMPONENTE NÃO CONTROLADO */}
      </div>
    </div>
  );
};
