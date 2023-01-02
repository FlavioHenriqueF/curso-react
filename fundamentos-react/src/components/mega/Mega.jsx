import "./Mega.css";
import { useState } from "react";

export default (props) => {
  function mega(array) {
    const aleatorio = Math.floor(Math.random() * (60 + 1 - 1)) + 1;
    return array.includes(aleatorio) ? mega(array) : aleatorio;
  }

  const [numeros, setNumeros] = useState([]);
  const [repetir, setRepetir] = useState(props.qtde || 7);

  const numerosMega = [];
  function gerarNum() {
    const qtde = repetir;
    for (let i = 0; i < qtde; i++) {
      numerosMega.push(mega(numerosMega));
    }
    return setNumeros(numerosMega.sort((n1, n2) => n1 - n2));
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qnt de Números</label>
        <input
          type="number"
          value={repetir}
          onChange={(e) => {
            setRepetir(+e.target.value);
          }}
        />
      </div>
      <button onClick={gerarNum}>Gerar Números</button>
    </div>
  );
};
