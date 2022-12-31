import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState();
  const [nerd, setNerd] = useState(false);

  function fornecerInfo(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <p>
          Nome: <strong>{nome}</strong>
        </p>
        <p>
          Idade: <strong>{idade}</strong>
        </p>
        <p>
          Nerd: <strong>{nerd}</strong>
        </p>
      </div>
      <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
    </div>
  );
};
